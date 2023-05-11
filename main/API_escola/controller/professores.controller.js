const professoresRepository = require("../repository/professores.repository");

module.exports = {
    buscaTodos: (req, res) => {
        professoresRepository
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
            res.status(404).send({ msg: "Parametro id e obrigatorio meno" });
        }

        professoresRepository
            .buscaPorId(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    inserir: (req, res) => {
        const professor = req.body;

        if (professor.length > 1) {
            res.send({
                msg: "Número de registros informados é maior que o permitido!",
            });
        }

        professoresRepository
            .inserir(professor)
            .then(() => {
                res.send({
                    msg: "professor inserido com sucesso! la ele dnv",
                    professor,
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
                res.send({ msg: "professor deletado com sucesso! Foi de base" });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    atualizar: (req, res) => {
        const professor = req.body;
        const { id } = req.params;

        professoresRepository
            .atualizar(professor, id)
            .then(() => {
                res.send({
                    msg: "Professor atualizado com sucesso!",
                    professor,
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    buscaTodosDaSala: (req, res) => {
         professoresRepository
             .buscaTodosDaSala()
             .then((data) => {
                 res.send(data);
             })
             .catch((error) => {
                 res.status(500).send(error);
             });
     },
     buscaNaSala: (req, res) => {
         const { id } = req.params;
         professoresRepository
             .buscaNaSala(id)
             .then((data) => {
                 res.send(data);
             })
             .catch((error) => {
                 res.status(500).send(error);
             });
     },
     inserirNaSala: async(req, res) => {
         const salas = req.body;

         const professor = await professoresRepository
             .buscaPorId(salas.professor_id)
             .then((data) => data)
             .catch((error) => {
                 return res.status(500).send(error);
             });

         if (professor.length <= 0) {
             return res.status(404).send({ msg: "Professor não existe! F" });
         }

         professoresRepository
             .inserirNaSala(salas)
             .then((data) => {
                 return res.send({ msg: "sala registrada com sucesso!" });
             })
             .catch((error) => {
                 return res.status(500).send(error);
             });
     },
};