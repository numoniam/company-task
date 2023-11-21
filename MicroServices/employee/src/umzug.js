const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");

const sequelize = new Sequelize("microservice", "root", "root", {
  host: "localhost",
  dialect: "postgres",
  port: 26257,
});

const umzug = new Umzug({
  migrations: { glob: "migrations/*.js" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
});

// Run a specific migration
umzug.up().then(console.log("Migration has been executed."));

// Down a specific migration
// umzug.Down().then(console.log('Migration has been executed.'));
