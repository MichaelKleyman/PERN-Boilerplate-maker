const router = require('express').Router();
const Movie = require('../db/models/Movies');
const User = require('../db/models/Users');

// GET /api/movies

router.get('/', async (req, res, next) => {
  try {
    const allMovies = await Movie.findAll();
    res.send(allMovies);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
