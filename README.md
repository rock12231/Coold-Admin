# Coold-Admin

Coold-Admin is a Node.js application built with Express, MongoDB, Elastic, and Redis. It focuses on security, utilizing Corus, Ratelimit, and Express routing for secure communication.

## Features

- MVC architecture with Model, Controller, and Service layers.
- Utility folder for environment configuration using .env files (local, test, production).
- Utilizes Jest for testing along with Joy and Express validator for request validation.

## Pages

- LOGIN
- SIGNUP

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. For production, build the project and then start the server:
```bash
npm run build
npm run serve
```

# Dependencies

- Express
- MongoDB
- Elastic
- Redis
- @types/express
- @types/node
- config
- cors
- debug
- dotenv
- joi
- jsonwebtoken
- morgan
- sequelize
- typescript

# Usage

- For development: `npm run dev`
- For production: `npm run build` followed by `npm run serve`

# Security

- Utilizes Corus for CORS protection.
- Implements Ratelimit for limiting requests.
- Express routing for secure routing.

# Optimization

- Follows standard practices for Express development.
- Uses Redis for caching to improve performance.
