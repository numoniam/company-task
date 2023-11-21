const express = require("express");
const app = express();

const pool = require('./db');

async function executeQuery(query) {
  const connection = await pool.connect();
  try {
    const result = await connection.query(query);
    return result.rows;
   } 
   catch(e){
    console.log(e);
   }
}

// Example usage
async function getData() {
  const query = 'SELECT * FROM myinfo';
  const data = await executeQuery(query);
  console.log(data);
}

getData();


app.listen(3000, () => {
  console.log("server started listening on 3000..............");
});
