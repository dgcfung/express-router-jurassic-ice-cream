const express = require('express');

const dinoIcecreamRouter = express.Router();
const { Dinosaur, Flavor } = require('../models');


// Create a route that displays all dinos



// Create a route that displays all flavors



// Create a route that displays a single dino by id Ex: /dinos/id/1 should display json of the dino with an id of 1



// Create a route that displays a single dino by name Ex: /dinos/name/barney should display json of barney the dinosaur



// Create a route that displays a single flavor by id Ex: /flavors/id/1 should display json of the flavor with an id of 1



// Create a route that displays a single flavor by name Ex: /flavors/name/lemon should display json of the lemon flavor


module.exports = {
    dinoIcecreamRouter
}