const express = require('express')
const { Dinosaur, Flavor } = require('./models')
const app = express()

app.get('/', (req, res) => {
    res.send('index!')
})

// Create a route that displays all dinos



// Create a route that displays all flavors



// Create a route that displays a single dino by id Ex: /dinos/id/1 should display json of the dino with an id of 1



// Create a route that displays a single dino by name Ex: /dinos/name/barney should display json of barney the dinosaur



// Create a route that displays a single dino by id Ex: /flavors/id/1 should display json of the flavor with an id of 1



// Create a route that displays a single dino by name Ex: /flavors/name/lemon should display json of the lemon flavor


app.listen(3000, () => {
    console.log(`running on port 3000!`)
})