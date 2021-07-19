# Gaming-test
step 1
1. Gaming-test/api$ `npm install`
2. `npm run start`

step 2
1. Gaming-test/client$ `npm install`
2. `npm run start`

step 3

Setup Mongo db info on

1. Gaming-test/db
2. .env file from .env.example

        DB_USER=yourUserName
        DB_PASS=yourPassWord

        # JWT Token info
        TOKEN_EXPIRATION=365d

        # Token Secret
        ACCESS_TOKEN_SECRET=aRandomSecretToken
        REFRESH_TOKEN_SECRET=aRandomRefreshToken