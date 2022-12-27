'use strict'

var express = require('express');
var boodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito') 

app.use(boodyParser.urlencoded({ extended: false }));
app.use(boodyParser.json())
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Header', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Header','GET, POST, OPTIONS, PUT, DELETE')
    res.header('allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
})
app.use('/api',api);


module.exports = app;