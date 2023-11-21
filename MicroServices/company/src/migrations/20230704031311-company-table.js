const { Sequelize, fn } = require("sequelize");

async function up({ context: queryInterface }) {
  await queryInterface.createTable("company", {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: fn("gen_random_uuid"),
    },
    name: {
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.INTEGER,
    },
    city: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable("company");
}

module.exports = { up, down };
