const Sequelize = require("sequelize");
const db = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");
require("dotenv").config();

const SALT_ROUNDS = 5;

const User = db.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  //   age: {
  //     type: Sequelize.INTEGER,
  //     allowNull: false,
  //     validate: {
  //       notEmpty: true,
  //     },
  //   },
});

User.prototype.generateToken = function () {
  try {
    const token = jwt.sign({ id: this.id }, `${process.env.JWT}`);
    return { token };
  } catch (e) {
    console.error(e);
  }
};

User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({
    where: { username },
  });
  const match = await bcrypt.compare(password, user.password);
  if (!user || !match) {
    const error = Error("Incorrect username/password");
    error.status = 401;
    throw error;
  } else {
    return user.generateToken();
  }
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    if (!user) {
      throw "No User";
    }
    else return user;
  } catch {
    const error = Error("Bad token");
    error.status = 401;
    throw error;
  }
};

//hook to hash password
// const hashPassword = async (user) => {
//   //encrypts it with bcrypt just incase the password has been changed
//   if (user.changed("password")) {
//     user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
//   }
// };
User.addHook("beforeCreate", async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 3);
  }
});

User.addHook("beforeUpdate", async (user) => {
    if (user.changed("password")) {
      user.password = await bcrypt.hash(user.password, 3);
    }
  });

module.exports = User;
