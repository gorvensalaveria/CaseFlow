const { Pool } = require("pg");

require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const pool = new Pool({
  connectionString: DATABASE_URL,

  ssl: { rejectUnauthorized: false },

 
  max: 10, 
  idleTimeoutMillis: 30_000, 
  connectionTimeoutMillis: 10_000, 
});


pool.on("error", (err) => {
  console.error("Unexpected PG pool error:", err);
});

module.exports = { pool };