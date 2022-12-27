'use strict';

var express = require('express');
var FavoritoController = require('../controllers/favorito');
var api = express.Router();

api.get('/prueba/:nombre', FavoritoController.prueba);
api.get('/favorito/:id', FavoritoController.getFavorito);
api.get('/favoritos', FavoritoController.getFavoritos);
api.post('/favorito', FavoritoController.saveFavorito);
api.delete('/favorito/:id', FavoritoController.deleteFavorito);
api.put('/favorito/:id', FavoritoController.updateFavorito);

module.exports = api;