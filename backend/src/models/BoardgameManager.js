const AbstractManager = require("./AbstractManager");

class BoardgameManager extends AbstractManager {
  constructor() {
    super({ table: "boardgame" });
  }

  find(id) {
    return this.connection.query(
      `
      SELECT 
          boardgame.* , 
          group_concat(distinct concat(role,"#",idCreator) separator ",") as "creators"
      FROM 
        boardgame 
        left join boardgames_have_creators on boardgame.id=boardgames_have_creators.idBoardgame
      where 
        id=?;`,
      [id]
    );
  }

  findPerUsers(users) {
    return this.connection.query(
      `
      SELECT 
        distinct(boardgame.id), boardgame.name
      FROM
        boardgame
          inner join collections_have_boardgames on boardgame.id=collections_have_boardgames.idBoardgame
          inner join collection on collections_have_boardgames.idCollection=collection.id
          inner join user on collection.idOwner=user.id
      WHERE
        user.id IN (?)
      ;`,
      [users]
    );
  }

  insert(boardgame) {
    return this.connection.query(
      `insert into ${this.table} 
      (name, imgUrl, description, minPlayers,maxPlayers, minDuration,maxDuration, minAge, createdAt, year, idOwner) values (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        boardgame.name,
        boardgame.imgUrl,
        boardgame.description,
        boardgame.minPlayers,
        boardgame.maxPlayers,
        boardgame.minDuration,
        boardgame.maxDuration,
        boardgame.minAge,
        new Date().toISOString().slice(0, 19),
        boardgame.year,
        null,
      ]
    );
  }

  update(boardgame) {
    return this.connection.query(
      `update ${this.table} set 
      name = ?,
      imgUrl = ?,
      description = ?,
      minPlayers = ?,
      maxPlayers = ?,
      minDuration = ?,
      maxDuration = ?,
      minAge = ?,
      createdAt = ?,
      year = ?,
      idOwner = ?
      where id = ?`,
      [
        boardgame.name,
        boardgame.imgUrl,
        boardgame.description,
        boardgame.minPlayers,
        boardgame.maxPlayers,
        boardgame.minDuration,
        boardgame.maxDuration,
        boardgame.minAge,
        new Date().toISOString().slice(0, 19),
        boardgame.year,
        null,
        boardgame.id,
      ]
    );
  }
}
module.exports = BoardgameManager;
