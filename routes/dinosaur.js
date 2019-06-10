const express = require('express');

const dinosaurRouter = express.Router();
const { Dinosaur } = require('../models');


// Create a route that displays all dinos


// Create a route that displays a single dino by id Ex: /id/1 should display json of the dino with an id of 1



// Create a route that displays a single dino by name Ex: /name/barney should display json of barney the dinosaur



module.exports = {
    dinosaurRouter
}