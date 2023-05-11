const salasRepository = require("../repository/salas.repository");

module.exports = {
    buscaTodos: (req, res) => {
        salasRepository
            .buscaTodos()
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    buscaPorId: (req, res) => {
        const { id } = req.params;

        if (!id) {
            res.status(404).send({ msg: "Parametro id obrigatorio!" });
        }

        salasRepository
            .buscaPorId(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    inserir: (req, res) => {
        const salas = req.body;

        if (aluno.length > 1) {
            res.send({
                msg: "Número de registros informado é maior que o permitido!",
            });
        }
        if (professor.length > 1) {
            res.send({
                msg: "Número de registros informado é maior que o permitido!",
            });
        }

        salasRepository
            .inserir(salas)
            .then(() => {
                res.send({
                    msg: "Sala inserida, com sucesso!",
                    salas,
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        professoresRepository
            .deletar(id)
            .then(() => {
                res.send({ msg: "Professor deletado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
};