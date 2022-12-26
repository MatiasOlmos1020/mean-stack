'use strict'

var app = require('./app');
var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`api rest favoritos funcionando en http://localhost:${port}`);
});