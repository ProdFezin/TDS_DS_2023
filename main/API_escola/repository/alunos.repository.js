const con = require("../mysql-connection");

module.exports = {
    buscaTodos: () => {
        return con.select().from("alunos");
    },
    buscaPorId: (id) => {
        return con.select().from("alunos").where("id", "=", id);
    },
    inserir: (aluno) => {
        return con.insert(aluno).into("alunos");
    },
    deletar: (id) => {
        return con("alunos").where({ id: id }).del();
    },
    atualizar: (professor, id) => {
        return con("alunos").update(aluno).where({ id: id });
    },
    buscaTodosDaSala: () => {
        return con("ALUNOS").innerJoin(
            "salas",
            "aluno.id",
            "salas.aluno_id"
        );
    },
    buscaNaSala: (id) => {
        return con
            .select(
                "ALU.ID",
                "ALU.NOME AS NOME_ALUNO",
                "SALA.NOME AS NOME_SALAS",
                "SALA.NUMERO_SALA AS SALA_DO_ALUNO"
            )
            .from("ALUNO AS ALU")
            .innerJoin("SALAS AS SALA", "ALU.ID", "SALA.ALUNO_ID")
            .where("ALUNO.ID", id);
    },
    inserirNaSala: (parametro) => {
        return con.insert(parametro).into("salas");
    },
};