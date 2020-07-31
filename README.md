# MicroService for Legal Statements

> A small micro service for Service Oriented Architecture for Legal statement services. This service will place a placeholder statement consistently with product ID's.

## Related Projects

  - https://github.com/KichiUeda/legal_service
  - https://github.com/KichiUeda/Micko-proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

***Assuming PostGreSQL is downloaded correctly**
> npm install

> npm run seed

> npm run build

> npm start

> url:port/bundle.js -- endpoint for bundle to be used as micro service
## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- PostGreSQL
  > You must create a Postgres username and password and place those inside a environemtn variable as the following

  >POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE

- Knex installed globally or in project's directory
- Environment variables set-up
  >PORT_LEGAL for environment variable name

## Development

- This service uses React and Styled Components for Front-End. NodeJS, Express, Knex and PostGreSQL for Back-End

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

