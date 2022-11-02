const db = require('../database');
const User = require('./Users');
const Movie = require('./Movies');

Movie.belongsToMany(User, {through: 'Users-movies'});
User.hasMany(Movie);
Movie.belongsTo(User);

module.exports = {
  db,
  Movie,
  User,
};
