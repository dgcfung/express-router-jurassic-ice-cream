const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {dinosaurRouter} = require('./routes/dinosaur')
const {flavorRouter} = require('./routes/flavor')

app.use(bodyParser.json());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.use('/dinosaurs', dinosaurRouter)
app.use('/flavors', flavorRouter)

app.listen(4567, () => {
    console.log(`running on port 4567!`)
})
