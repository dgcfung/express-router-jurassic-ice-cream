const express = require('express');

const flavorRouter = express.Router();
const { Flavor } = require('../models');


// Create a route that displays all flavors


// Create a route that displays a single flavor by id Ex: /id/1 should display json of the flavor with an id of 1



// Create a route that displays a single flavor by name Ex: /name/lemon should display json of the lemon flavor


module.exports = {
    flavorRouter
}