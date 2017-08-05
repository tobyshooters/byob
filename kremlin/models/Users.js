/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Users', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		username: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		birthdate: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		city: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		country: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		created: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'DATE(CURRENT_TIMESTAMP)'
		}
	}, {
		tableName: 'Users'
	});
};
