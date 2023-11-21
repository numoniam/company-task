const { Pool } = require('pg');
const fs=require('fs')
const pool = new Pool({
  user: 'savan',
  host: 'localhost',
  database: 'test',
  password: 'savan',
  port: 26257, // Default CockroachDB port
  max: 20, // Maximum number of connections in the pool
  idleTimeoutMillis: 30000, // How long a connection is allowed to remain idle
  connectionTimeoutMillis: 2000, // How long to wait for a connection to become available
  ssl:{
    ca:fs.readFileSync('/home/ad.rapidops.com/savan.ghori/cockroach/certs/ca.crt').toString(),
    key:fs.readFileSync('/home/ad.rapidops.com/savan.ghori/cockroach/certs/client.root.key').toString(),
    crt:fs.readFileSync('/home/ad.rapidops.com/savan.ghori/cockroach/certs/client.root.crt').toString()
  }
  
});
// console.log(pool.ssl);

module.exports = pool;
