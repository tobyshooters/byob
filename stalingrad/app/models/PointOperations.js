/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PointOperations', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		amount: {
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
		tableName: 'PointOperations'
	});
};
