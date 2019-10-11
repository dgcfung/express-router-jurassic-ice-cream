# Router Practice with Jurassic Ice Cream

For this homework, we will build a small Express app in our server.js file. Once each route is working try to test it from the browser or with Postman.

![](https://cdn.dribbble.com/users/28275/screenshots/3804066/icecream.gif)

## Set Up
- Fork and clone this repo
- Run `npm install`
- Set up your database
    - `npx sequelize-cli init`
    - change your config file to reference PSQL
    - Create Your Postgres DB
        - `npx sequelize-cli db:create`
    - Create your models: You will need 2 models: Dinosaur and Flavor
        - `npx sequelize-cli model:generate`
        - Dinosaur should have a name(text), height(integer), and period(string)
        - Flavor should have name(string), color(string), on_sale(boolean)
    - Execute your migrations
        - `npx sequelize-cli db:migrate`
    - Create your seed file
        - `npx sequelize-cli seed:generate`
        - There is sample seed data in `seed.js`
    - Execute your seed file
        - `npx sequelize-cli db:seed:all`
- Follow the instructions inside of `routes/dinosaur.js`, `routes/flavor.js` and `server.js`


