const knex = require("knex");

module.exports = knex({
    client: "mysql",
    connection: {
        host: "localhost",
        port: 3309,
        user: "root",
        password: "",
        database: "escola",
    },
});