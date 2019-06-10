const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// import the dinosaur router and flaor router here


app.use(bodyParser.json());


// wrtie error handling app.use that sends logs error stack and status 500


// set dinosaur router under '/dinos'


// set icecream router under '/flavors'


app.listen(4567, () => {
    console.log(`running on port 4567!`)
})
