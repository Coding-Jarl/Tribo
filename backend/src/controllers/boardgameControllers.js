const models = require("../models");

const browse = (req, res) => {
  models.boardgame
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.boardgame
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] === null) {
        res.sendStatus(404);
      } else {
        let game = rows[0];
        const rawCreators = game?.creators?.split(",") || [];
        const creators = {
          artists: [],
          publishers: [],
          developers: [],
          designers: [],
        };
        for (let i = 0; i < rawCreators.length; i += 1) {
          const creatorStats = rawCreators[i].split("#");
          creators[creatorStats[0]].push(
            `${creatorStats[1]}#${creatorStats[2]}`
          );
        }
        game = { ...game, creators };
        res.send(game);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const edit = (req, res) => {
  const boardgame = req.body;

  // TODO validations (length, format...)

  boardgame.id = parseInt(req.params.id, 10);

  models.boardgame
    .update(boardgame)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const boardgame = req.body;

  // TODO validations (length, format...)

  models.boardgame
    .insert(boardgame)
    .then(([result]) => {
      res.location(`/boardgames/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.boardgame
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
