const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const stuff = require("./routes/stuff.route");

const user = require('./routes/user.route');

const MONGO_ACCESS = process.env.MONGO_LAB;
mongoose.connect(MONGO_ACCESS, {
})
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use("/api/stuff",stuff);
app.use('/api/auth', user);

module.exports = app
