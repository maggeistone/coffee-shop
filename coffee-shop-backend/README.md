# Coffees shop backend

Class: CMPT 353
Project: Final Project
Creator: Maggie Johnstone

## npm install

This will bring in all the dependencies of the project, which are specified in the package.json file. The node_modules are not updated to prevent the bundle size from exploding in size.

## npm run start

This command will get the backend running on localhost:8080

## SQL

You need a MySQL instance running on localhost. You will need to pass the host, user, and password of your locally-running instance so that Node can create and obtain connection to it. Note that this has to change in every routes file.

## TODO

- refactor backend to use a single connection pool rather than spin up new SQL connections in every route backend
