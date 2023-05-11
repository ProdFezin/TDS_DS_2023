const express = require("express");
const professoresRoutes = require("./professores.router");
const alunosRoutes = require("./alunos.router");
const salasRoutes = require("./salas.router");

const routes = new express.Router();


routes.use("/professores", professoresRoutes);
routes.use("/alunos", alunosRoutes);
routes.use("/sala", salasRoutes);

module.exports = routes;