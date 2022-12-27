'use strict'

var mongoose = require('mongoose')
var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/cursofavoritos', (err, res) => {
    if (err) {
        return console.log(`error al conectar a la base de datos: ${err}`)
    } else {
        console.log("conección a la base de datos establecida")
        app.listen(port, () => {
            console.log(`api rest favoritos funcionando en http://localhost:${port}`);
        });
    }
})
