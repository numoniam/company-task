const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");

const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const umzug = new Umzug({
  migrations: { glob: "migrations/*.js" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

// Run all pending migrations
// umzug.up().then(console.log('All migrations have been executed.'));

// Run a specific migration
umzug.up().then(console.log('Migration has been executed.'));

// umzug.pending().then(console.log('Migration has been executed.'));

// umzug
//   .down({ migrations: ["20230602094132-hello-table"] },)
//   .then(console.log("Migration has been executed."))
//   .catch((err) => {
//     console.log(err, "::::::::::::::::");
//   });

// async function savan(){
//     const result= await umzug.pending()
//     return result
// }

// console.log(savan());

// umzug.down().then(console.log('All migrations have been executed.'));


// umzug.down({ to: '20230602090014-userdata-table' }).then(console.log('All migrations have been executed.'));


// bumzug.down({ migrations: ['20230602094122-test-table', '20230602094132-hello-table'] }).then(console.log('All migrations have been executed.'));

