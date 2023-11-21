const mysql = require("mysql2/promise");
const dotenv = require("dotenv").config();

async function getDbConnection() {
  let db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  return db;
}

module.exports = getDbConnection;
