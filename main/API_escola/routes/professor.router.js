const express = require("express");
const professoresController = require("../controller/professores.controller");

const routes = new express.Router();

routes.get("/", professoresController.buscaTodos);
routes.get("/:id([0-9]+)", professoresController.buscaPorId);
routes.post("/", professoresController.inserir);
routes.delete("/:id([0-9]+)", professoresController.deletar);
routes.put("/:id([0-9]+)", professoresController.atualizar);
routes.get("/salas", professoresController.buscaTodosDaSala);
routes.get("/salas/:id([0-9]+)", professoresController.buscaNaSala);
routes.post("/salas", professoresController.inserirNaSala);

module.exports = routes;