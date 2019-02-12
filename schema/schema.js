const graphql = require('graphql');
// const _ = require('lodash');
const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

/* async function getUser(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
} */

const CompanyType = new GraphQLObjectType({
  name: 'Company',
  fields: {
    name: { type: GraphQLString },
    catchPhrase: { type: GraphQLString },
    bs: { type: GraphQLString },
  },
});

const GeoType = new GraphQLObjectType({
  name: 'Geo',
  fields: {
    lat: { type: GraphQLString },
    lng: { type: GraphQLString },
  },
});

const AddressType = new GraphQLObjectType({
  name: 'Address',
  fields: {
    street: { type: GraphQLString },
    suite: { type: GraphQLString },
    city: { type: GraphQLString },
    zipcode: { type: GraphQLString },
    geo: { type: GeoType },
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    address: { type: AddressType },
    phone: { type: GraphQLString },
    website: { type: GraphQLString },
    company: { type: CompanyType },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        // return getUser(args.id);

        // axios responses with a '.data' so we need to push
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data)
          .catch(err => console.error(err));
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
