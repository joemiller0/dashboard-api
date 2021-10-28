const Pool = require("pg").Pool;

const pool = new Pool({
    user:"joemiller",
    password: process.env.SYSTEM_PASSWORD,
    host: "localhost", 
    port: 5432, //postgres default
    database: "dashboard"
});

module.exports = pool;