const express = require("express");
const salasController = require("../controller/salas.controller");

const routes = new express.Router();

routes.get("/", salasController.buscaTodos);
routes.get("/:id([0-9]+)", salasController.buscaPorId);
routes.post("/", salasController.inserir);
routes.delete("/:id([0-9]+)", salasController.deletar);


module.exports = routes;