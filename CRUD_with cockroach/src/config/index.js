const { Pool } = require('pg');
const fs=require('fs')
const cockroach = new Pool({
  user: 'savan',
  host: 'localhost',
  database: 'hello',
  password: 'savan',
  dialect: "postgres",
  port: 26257, 
  max: 20,
  ssl:{
    ca:fs.readFileSync('/home/ad.rapidops.com/savan.ghori/cockroach/certs/ca.crt').toString(),
    key:fs.readFileSync('/home/ad.rapidops.com/savan.ghori/cockroach/certs/client.root.key').toString(),
    crt:fs.readFileSync('/home/ad.rapidops.com/savan.ghori/cockroach/certs/client.root.crt').toString()
  }
  
});
// console.log(pool.ssl);

module.exports = cockroach;
