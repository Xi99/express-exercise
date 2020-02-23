// create a server and route to handle the client get request by sending back
// data on the requested animal in db.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/db');

app.use(bodyParser.json())



app.get('/:animal', (req, res) => {

    res.json(db[req.params.animal])

})

// res.send(`${req.params.student} is ${db[req.params.student].age} years old and they are a huge fan of ${db[req.params.student].hobby}`); // { student: 'sean' } ----> returns 'Golfing' in server when you check Postman with Bailey as endpoint
// // can also do res.json(db[req.params.student]) to get the postman to show info
// })

// app.post('/:student', (req, res) => {
// console.log(req.body);
// db[req.params.student] = req.body;
// res.sendStatus(201); // 201 if for 'created'

// })


app.listen(3000, () => console.log('server is up and running'));



