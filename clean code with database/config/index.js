const mysql = require("mysql");

cons = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "savan",
});
cons.connect((error) => {
  if (error) {
    console.error("Error connecting to the database: ", error);
    return;
  }
  console.log("Connected to the database!");
});

module.exports = cons;
