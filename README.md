# GraphQL with NodeJS Express

A simple app that produces graphql capabilities for querying an external 'users' REST API to GraphQL

## What does it use ?

- express
- graphql-express
- graphiql tool
- axios

## The Backend

In order to simulate a real server RSTfull API (with CRUD capabilities out of the box) we user json-server.

The database is a JSON file.

json-server can must be lauch as a prerequisite for this app.

```shell
yarn run json:server
```

_Note : Watch the package.json to unerstand what the script does for launching json-server_

## Install

```shell
yarn install
```

## Run

```shell
yarn start
```

Then open the following link :

- http://localhost:4000/graphql

You can play along with the graphiql tool
