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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS')   {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});
// const cors = require('cors');
// app.use(cors)

// Mongoose database connection
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{
    useCreateIndex: true,
    useNewUrlParser: true
});

// Order routes
const orderRoutes = require('./src/router');
app.use('/ordermgmt', orderRoutes);

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
        status: err.status || 500,
        data: null
    });
});

module.exports = app;