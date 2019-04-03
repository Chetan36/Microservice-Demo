const express = require('express');
const app = express();

// Environment variables access
require('dotenv').config()

// Default console logger for routes
const morgan = require('morgan');
app.use(morgan('dev'));

// Body parser to extract request bodies more efficiently
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS handling
const cors = require('cors');
app.use(cors)

// Mongoose database connection 
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{
    useCreateIndex: true,
    useNewUrlParser: true
});

app.use('/api', function(req, res, next) {
    res.status(200).json({message: "I am here"});
})

// Inventory routes
const inventoryRoutes = require('./src/router');
app.use('/invmgmt', inventoryRoutes);

// No route to serve request
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Any error or exception thrown from server
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        status: err.status || 500
    });
});

module.exports = app;