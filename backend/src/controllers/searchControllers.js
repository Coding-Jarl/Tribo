const models = require("../models");

const simple = (req, res) => {
  const { needle } = req.query;
  models.searchable
    .findByNeedle(needle)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  simple,
};
