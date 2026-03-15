const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "saas_platform",
  password: "PostgerSQL",
  port: 5432
});

module.exports = pool;