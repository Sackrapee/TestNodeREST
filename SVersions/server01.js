const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/subscribes')

app.get("/", (req, res) => {
    res.send("Hello Node.js REST Server");
  });

app.listen(3000, () => console.log('Server Started'))