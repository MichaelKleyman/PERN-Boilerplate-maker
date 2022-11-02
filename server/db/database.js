const Sequelize = require('sequelize');

const databaseName = 'async-week-database'

const db = new Sequelize(`postgres://localhost:5432/${databaseName}`, {
  logging: false,
});

module.exports = db;
