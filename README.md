# Init this app

This Makefile defines several targets that you can use to build and initialize the Docker Compose setup:

build: builds the application Docker image using the Dockerfile in the current directory and tags it as myapp
up: starts the Docker Compose setup in detached mode
down: stops the Docker Compose setup
restart: stops and starts the Docker Compose setup
init-db: initializes the MongoDB database by running the init-mongo.js script in the ./data/mongodb/initdb.d directory
seed-db: seeds the MongoDB database with some initial data using the npm run seed-db script in the application container
dev: starts the application in development mode using the npm run start:dev script
start: starts the application in production mode using the npm start script
You can run these targets by running make <target>, for example make build to build the Docker image or make up to start the Docker Compose setup.

# API

The API is available at http://localhost:3000/api/users uri.

---

## Users

create a new users

**URL**: `/api/users`

**Auth required:** No

### POST

#### Response

##### 201

```json
[
  {
    "id": 1,
    "first_name": "George",
    "email": "george.bluth@reqres.in",
    "avatar": {
      "type": "Buffer",
      "data": [
        104, 116, 116, 112, 115, 58, 47, 47, 114, 101, 113, 114, 101, 115, 46,
        105, 110, 47, 105, 109, 103, 47, 102, 97, 99, 101, 115, 47, 49, 45, 105,
        109, 97, 103, 101, 46, 106, 112, 103
      ]
    },
    "_id": "63f7c983fcbc533a3d4122d2",
    "__v": 0
  },
  {
    "id": 2,
    "first_name": "Janet",
    "email": "janet.weaver@reqres.in",
    "avatar": {
      "type": "Buffer",
      "data": [
        104, 116, 116, 112, 115, 58, 47, 47, 114, 101, 113, 114, 101, 115, 46,
        105, 110, 47, 105, 109, 103, 47, 102, 97, 99, 101, 115, 47, 50, 45, 105,
        109, 97, 103, 101, 46, 106, 112, 103
      ]
    },
    "_id": "63f7c983fcbc533a3d4122d3",
    "__v": 0
  }
]
```

Get a user by id

**URL**: `/api/users/:id`

**Auth required:** No

### GET

#### Response

##### 200

```json
{
  "id": 1,
  "first_name": "George",
  "email": "george.bluth@reqres.in",
  "avatar": {
    "type": "Buffer",
    "data": [
      104, 116, 116, 112, 115, 58, 47, 47, 114, 101, 113, 114, 101, 115, 46,
      105, 110, 47, 105, 109, 103, 47, 102, 97, 99, 101, 115, 47, 49, 45, 105,
      109, 97, 103, 101, 46, 106, 112, 103
    ]
  },
  "_id": "63f7c9a9fcbc533a3d4122de",
  "__v": 0
}
```

get image by avatar url

**URL**: `/api/users/:url/avatar`

**Auth required:** No

### GET

#### Response

##### 200

```json
{
  "type": "Buffer",
  "data": [
    255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0,
    255, 219, 0, 67, 0, 8, 6, 6, 7, 6, 5, 8, 7, 7, 7, 9, 9, 8, 10, 12, 20, 13,
    12, 11, 11, 12, 25, 18, 19, 15, 20, 29, 26, 31, 30, 29, 26, 28, 28, 32,
    36, 46, 39, 32, 34, 44, 35, 28, 28, 40, 55, 41, 44, 48, 49, 52, 52, 51, 31, 39,    
    ]
}
```

---

remove file by id

**URL**: `/api/users/:id/avatar`

**Auth required:** No

### DELETE

#### Response

##### 200


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
