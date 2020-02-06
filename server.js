const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dinosaurs = require('./routes/dinosaur')
const flavors = require('./routes/flavor')

app.use(bodyParser.json());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.use('/dinosaurs', dinosaurs)
app.use('/flavors', flavors)

app.listen(4567, () => {
    console.log(`running on port 4567!`)
})
