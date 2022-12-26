'use strict'

function prueba(req, res) {
    let nombre = req.params.nombre;
    res.status(200).send({ message: `hola ${nombre}, así es, has caído en un puto el que lee` });
}

function getFavorito(req, res) {
    var favoritoId = req.params.id;
    res.status(200).send({ data: favoritoId })
}

function getFavoritos(req, res) {

}

function saveFavorito(req, res) {
    var params = req.body;

    res.status(200).send({ favorito: params });
}

function updateFavorito(req, res) {

}

function deleteFavorito(req, res) {

}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}