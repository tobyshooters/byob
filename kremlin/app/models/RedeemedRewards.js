/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('RedeemedRewards', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		reward_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		used: {
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
		tableName: 'RedeemedRewards'
	});
};
