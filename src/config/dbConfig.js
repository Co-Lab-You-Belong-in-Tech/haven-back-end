const Pool = require("pg").Pool;

const development = {
  user: "postgres",
  password: "emir",
  host: "localhost",
  port: 5432,
  database: "sample_express",
};

const production = {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
};

const pool = new Pool(
  process.env.NODE_ENV === "production"
    ? connectionProduction
    : connectionDevelopment
);
module.exports = pool;
