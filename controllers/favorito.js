'use strict'

var Favorito = require('../models/favorito')

function prueba(req, res) {
    let nombre = req.params.nombre;
    res.status(200).send({ message: `hola ${nombre}, así es, has caído en un puto el que lee` });
}

function getFavorito(req, res) {
    var favoritoId = req.params.id;

    Favorito.findById(favoritoId, function (err, favorito) {
        if (err) {
            res.status(500).send({ message: 'error al devolver el marcador' });
        } else {
            if (!favorit0) {
                res.status(404).send({ message: 'Ese marcador no existe' });
            } else {
                res.status(200).send({ favorito })
            }
        }

    });

}

function getFavoritos(req, res) {
    Favorito.find({}).sort('-title').exec((err, favoritos) => {
        if (err) {
            res.status(500).send({ message: 'error al devolver los marcadores' });
        }else{
            if (!favoritos) {
                res.status(404).send({ message: 'No hay marcadores' });
            }else{
                res.status(200).send({ favoritos });
            }
        }
    })
}

function saveFavorito(req, res) {
    var favorito = new Favorito();
    var params = req.body;

    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((err, favoritoStored) => {
        if (err) {
            res.status(500).send({ message: 'error al guardar el marcador' });
        }else{
            res.status(200).send({ favorito: favoritoStored });
        }
    });

}

function updateFavorito(req, res) {
    var favoritoId = req.params.id;
    var update = req.body;

    Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated) => {
        if (err) {
            res.status(500).send({ message: 'error al actualizar el marcador' });
        }else{
            res.status(200).send({ favorito: favoritoUpdated });
        }
    })

}

function deleteFavorito(req, res) {
    var favoritoId = req.params.id;
    Favorito.findById(favoritoId, function (err, favorito) {
        if (err) {
            res.status(500).send({ message: 'error al devolver el marcador' });
        }else{
            if (!favorito) {
                res.status(404).send({ message: 'Ese marcador no existe' });
            } else {
                favorito.remove(err => {
                    if (err) {
                        res.status(500).send({ message: 'Error al borrar el marcador' });
                    } else {
                        res.status(200).send({ message: 'El marcador se ha eliminado correctamente' });
                    }
                });
            }
        }
    });
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}