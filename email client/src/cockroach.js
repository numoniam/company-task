const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");
const fs = require("fs");

const sequelize = new Sequelize("hello", "savan", "savan", {
  host: "localhost",
  dialect: "postgres",
  port: 26257,
  dialectOptions: {
    ssl: {
      ca: fs
        .readFileSync(
          "/home/ad.rapidops.com/savan.ghori/cockroach/certs/ca.crt"
        )
        .toString(),
      key: fs
        .readFileSync(
          "/home/ad.rapidops.com/savan.ghori/cockroach/certs/client.root.key"
        )
        .toString(),
      crt: fs
        .readFileSync(
          "/home/ad.rapidops.com/savan.ghori/cockroach/certs/client.root.crt"
        )
        .toString(),
    },
  },
});

const umzug = new Umzug({
  migrations: { glob: "migrations/20230608131236-userinfo-table.js" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
});

// Run a specific migration
umzug.up().then(console.log("Migration has been executed."));

// Down a specific migration
// umzug.down().then(console.log('Migration has been executed.'));
