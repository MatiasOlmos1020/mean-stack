'use strict'

var express = require('express');
var boodyParser = require('body-parser');

var app = express();
var api = require('./routes/favorito') 

app.use(boodyParser.urlencoded({ extended: false }));
app.use(boodyParser.json())
app.use('/api',api);


module.exports = app;