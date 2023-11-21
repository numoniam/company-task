const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
	await queryInterface.createTable('helloTable', {
		usrid: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: Sequelize.STRING,
			allowNull: false
		},
    email:{
      type:Sequelize.STRING,
      allowNull:true
    }
	});
}

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('helloTable');
}

module.exports = { up, down };