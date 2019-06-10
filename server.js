const express = require('express');
const bodyParser = require('body-parser');

const app = express()

// import the router here


// wrtie error handling app.use that sends logs error stack and status 500


// set imported router under '/'



app.listen(3000, () => {
    console.log(`running on port 3000!`)
})
