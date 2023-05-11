const alunosRepository = require("../repository/alunos.repository");

module.exports = {
    buscaTodos: (req, res) => {
        alunosRepository
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

        alunosRepository
            .buscaPorId(id)
            .then((data) => {
                res.send(data);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    inserir: (req, res) => {
        const aluno = req.body;

        if (aluno.length > 1) {
            res.send({
                msg: "Número de registros informados é maior que o permitido!",
            });
        }

        alunosRepository
            .inserir(aluno)
            .then(() => {
                res.send({
                    msg: "Aluno inserido com sucesso! (la ele)",
                    aluno,
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        alunosRepository
            .deletar(id)
            .then(() => {
                res.send({ msg: "Aluno deletado com sucesso! F chat" });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    atualizar: (req, res) => {
        const aluno = req.body;
        const { id } = req.params;

        alunosRepository
            .atualizar(aluno, id)
            .then(() => {
                res.send({
                    msg: "Aluno atualizado com sucesso! Versao 4.4 MediaFire completo 4k full Hd",
                    funcionario,
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
         alunosRepository
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

         const aluno = await alunosRepository
             .buscaPorId(salas.alunos_id)
             .then((data) => data)
             .catch((error) => {
                 return res.status(500).send(error);
             });

         if (aluno.length <= 0) {
             return res.status(404).send({ msg: "kekw esse maluco n existe" });
         }

         alunosRepository
             .inserirNaSala(salas)
             .then((data) => {
                 return res.send({ msg: "Cela de prisão criada com sucesso."});
             })
             .catch((error) => {
                 return res.status(500).send(error);
             });
     },
};