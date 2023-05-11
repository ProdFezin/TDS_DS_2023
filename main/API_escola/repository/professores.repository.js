const con = require("../mysql-connection");

module.exports = {
    buscaTodos: () => {
        return con.select().from("professores");
    },
    buscaPorId: (id) => {
        return con.select().from("professores").where("id", "=", id);
    },
    inserir: (professor) => {
        return con.insert(professor).into("professores");
    },
    deletar: (id) => {
        return con("professores").where({ id: id }).del();
    },
    atualizar: (professor, id) => {
        return con("professores").update(professor).where({ id: id });
    },
    buscaTodosDaSala: () => {
        return con("PROFESSORES").innerJoin(
            "salas",
            "professores.id",
            "salas.professor_id"
        );
    },
    buscaNaSala: (id) => {
        return con
            .select(
                "PROF.ID",
                "PROF.NOME AS NOME_PROFESSOR",
                "SALA.NOME AS NOME_SALAS",
                "SALA.NUMERO_SALA AS TURMA_PROFESSOR"
            )
            .from("PROFESSOR AS PROF")
            .innerJoin("SALAS AS SALA", "PROF.ID", "SALA.PROFESSOR_ID")
            .where("PROF.ID", id);
    },
    inserirNaSala: (parametro) => {
        return con.insert(parametro).into("salas");
    },
};