const models = require("../models");

const getFriends = (req, res) => {
  models.user
    .findFriends(req.user.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getFriends,
};
