const { Sequelize,fn } = require("sequelize");

async function up({ context: queryInterface }) {
  await queryInterface.createTable("myinfos", {
    usrid: {
      type: Sequelize.UUID ,
      allowNull: false,
      primaryKey: true,
      defaultValue:fn("gen_random_uuid")
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    access_token:{
      type:Sequelize.STRING(1000),
    }
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable("myinfos");
}

module.exports = { up, down };
