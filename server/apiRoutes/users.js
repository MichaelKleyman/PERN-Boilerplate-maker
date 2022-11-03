const router = require("express").Router();
const Movie = require("../db/models/Movies");
const User = require("../db/models/Users");

// GET /api/users

// const requireToken = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization;
//     const user = await User.findByToken(token);
//     console.log('>>>>', user);
//     req.user = user;
//     next();
//   } catch (error) {
//     next(error);
//   }
// };

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (e) {
    next(e);
  }
});

// GET /api/users/:id
// router.get("/:id", async (req, res, next) => {
//   try {
//     const singleUser = await User.findByPk(req.params.id, {
//       include: {
//         model: Movie,
//       },
//     });
//     res.send(singleUser);
//   } catch (e) {
//     next(e);
//   }
// });

// GET /api/users/auth/me
// router.get("/auth/me", async (req, res, next) => {
//   try {
//     res.send(await User.findByToken(req.headers.authorization))
//   } catch (e) {
//     next(e);
//   }
// });

// POST /api/users/auth
// router.post("/auth", async (req, res, next) => {
//   try {
//     // console.log("The req.body>>", req.body);
//     const user = await User.authenticate(req.body);
//     if (!user) {
//       res.sendStatus(404);
//     } else {
//       const token = await user.generateToken();
//       // console.log("Our token>>>", token);
//       res.send(token);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
