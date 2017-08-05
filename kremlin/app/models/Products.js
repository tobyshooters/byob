/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Products', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		company_id: {
			type: DataTypes.INTEGER,
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
		updateAt: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'DATE(CURRENT_TIMESTAMP)'
		}
	}, {
		tableName: 'Products'
	});
};
