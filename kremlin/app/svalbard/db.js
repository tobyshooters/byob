'use strict'

const Sequelize = require('sequelize');
const sequelize = new Sequelize('svalbard', 'user', 'pass', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'svalbard.db'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models/tables
db.Users = require('../models/Users.js')(sequelize, Sequelize);
db.Acquisitions = require('../models/Acquisitions.js')(sequelize, Sequelize);
db.PointOperations = require('../models/PointOperations.js')(sequelize, Sequelize);
db.Products = require('../models/Products.js')(sequelize, Sequelize);
db.Companies = require('../models/Companies.js')(sequelize, Sequelize);
db.Rewards = require('../models/Rewards.js')(sequelize, Sequelize);
db.RedeemedRewards = require('../models/RedeemedRewards.js')(sequelize, Sequelize);

//Relations

module.exports = db;
