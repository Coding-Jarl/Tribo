const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

const signup = (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 8);

  models.user
    .insert(user)
    .then(([result]) => {
      delete user.password;
      user.id = result.insertId;

      const token = jwt.sign(user, "passwordDeMionServeur");
      res.status(201).send({ user, token });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const login = (req, res) => {
  const { user } = req; // const user = req.user;

  const token = jwt.sign(user, "passwordDeMionServeur");
  res.status(200).send({ user, token });
};

module.exports = {
  signup,
  login,
};
