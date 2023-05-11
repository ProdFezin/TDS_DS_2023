const con = require("../mysql-connection");

module.exports = {
    buscaTodos: () => {
        return con.select().from("salas");
    },
    buscaPorId: (id) => {
        return con.select().from("salas").where("id", "=", id);
    },
    inserir: (sala) => {
        return con.insert(sala).into("salas");
    },
    deletar: (id) => {
        return con("salas").where({ id: id }).del();
    },
    buscaTodosDepDoFunc: () => {
        return con("funcionarios").innerJoin(
            "dependentes",
            "funcionarios.id",
            "dependentes.funcionario_id"
        );
    },
    buscaDepDoFunc: (id) => {
        return con
            .select(
                "FUN.ID",
                "FUN.NOME AS NOME_FUNCIONARIO",
                "DEP.NOME AS NOME_DEPENDENTE",
                "DEP.TELEFONE AS TELEFONE_DEPENDENTE"
            )
            .from("FUNCIONARIOS AS FUN")
            .innerJoin("DEPENDENTES AS DEP", "FUN.ID", "DEP.FUNCIONARIO_ID")
            .where("FUN.ID", id);
    },
    inserirDependentes: (parametro) => {
        return con.insert(parametro).into("dependentes");
    },
};