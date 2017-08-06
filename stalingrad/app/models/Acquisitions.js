/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Acquisitions', {
		id: {
			type: DataTypes.INTEGER,
			allowNull: true,
			primaryKey: true
		},
		company_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		product_id: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		longitude: {
			type: DataTypes.REAL,
			allowNull: false
		},
		latitude: {
			type: DataTypes.REAL,
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
		tableName: 'Acquisitions'
	});
};
