# Childcare SaaS Product

This is a Childcare SaaS Product, which aims to provide a platform for parents to find and hire caregivers for their children. The product allows caregivers to create a profile and list their availability, hourly rate, and location. Parents can search for caregivers based on their location, availability, and hourly rate, and can also view caregiver profiles to learn more about them.

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- TypeScript
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment variables
- express-validator for request validation

## Getting Started

### Prerequisites

- Node.js installed on your machine
- PostgreSQL installed on your machine

### Installation

1. Clone the repository:

```
git clone https://github.com/kirollosatef/childcare-mvp-saas
```

2. Install dependencies:

```
cd childcare
npm install
```

3. Create a `.env` file based on the `.env.example` file, and add the required environment variables.

4. Create the PostgreSQL database and run the SQL script to create the necessary tables:

```
createdb childcare
psql childcare < database.sql
```

### Usage

To start the server, run:

```
npm start
```

The server will start on `http://localhost:3000`.

### Endpoints of User Registration

1. Registration endpoint [PSOT]
2. get user profile [GET]
3. update user profile [PUT]
4. login endpoint [POST]
5. logout endpoint [POST]
6. Delete user [DELETE]
    1. enable user [POST] or [PUT]
    2. disable user [POST]

### URL Signature

1. /api/users/register
2. /api/users/profile
3. /api/users/profile
4. /api/login
5. /api/logout
6. /api/users
    1. /api/users/enable
    2. /api/users/disable

### Project folder structure (per feature)

- Caregiver
- user-registration
    - register
        - register.controller.ts
        - register.service.ts
        - register.router.ts
    - profile
    - login-logout
- DB
    - db.service.ts
- server.ts


### Notion DOCS if you need 
  [Notion DOCS](https://dull-vision-568.notion.site/Childcare-MVP-Product-f659a6902ce84e019ddeb18b0b8ea450?pvs=4)