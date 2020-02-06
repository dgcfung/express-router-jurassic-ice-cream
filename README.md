# Router Practice with Jurassic Ice Cream

For this homework, we will build a small Express app in our server.js file. Once each route is working try to test it from the browser or with Postman.

![](https://cdn.dribbble.com/users/28275/screenshots/3804066/icecream.gif)

## Set Up
- Fork and clone this repo
- Run `npm install`

## Create Your Database
- `npx sequelize-cli init`
- change your config file to reference PSQL
- Create Your database with `npx sequelize-cli db:create`
- Create two ,odels, a Dinosaur model and a Flavor model, with `npx sequelize-cli model:generate <model info goes here>`
    - Dinosaur should have a name(text), height(integer), and period(string)
    - Flavor should have name(string), color(string), on_sale(boolean)
- Execute your migrations with `npx sequelize-cli db:migrate`
- Create your seed file with `npx sequelize-cli seed:generate`
    - There is sample seed data in `seed.js`
- Execute your seed file with `npx sequelize-cli db:seed:all`
        
        
- Follow the instructions inside of `routes/dinosaur.js`, `routes/flavor.js` and `server.js`
