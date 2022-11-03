const router = require('express').Router();
const User = require('../db/models/Users');

// GET /auth/me
router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization))
  } catch (e) {
    next(e);
  }
});

// POST /auth/login
router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

// POST /auth/signup
router.post("/signup", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send({ token: await newUser.generateToken() });
  } catch (e) {
    if (e.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User Already Exists");
    } else {
      next(e);
    }
  }
});

module.exports = router