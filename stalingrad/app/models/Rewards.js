/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Rewards', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		points: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		created: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'DATE(CURRENT_TIMESTAMP)'
		},
		updatedAt: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'DATE(CURRENT_TIMESTAMP)'
		}
	}, {
		tableName: 'Rewards'
	});
};
