const Sequelize = require('sequelize');
const db = require('../database');

const Movie = db.define('movie', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Movie;
