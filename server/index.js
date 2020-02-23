// create a server and route to handle the client get request by sending back
// data on the requested animal in db.js
const express = require('express');
const db = require('./db/db');
const cors = require('cors');

const app = express();

app.use(cors())



app.get('/:animal', (req, res) => {

    res.send({
        currentAnimal: req.params.animal,
        currentAnimalPicture: db.animals[`${req.params.animal}Picture`],
        currentAnimalCount: db.animals[`${req.params.animal}Count`],
    });
});

// app.post('/:student', (req, res) => {
// console.log(req.body);
// db[req.params.student] = req.body;
// res.sendStatus(201); // 201 if for 'created'

// })


app.listen(3000, () => console.log('server is up and running'));



