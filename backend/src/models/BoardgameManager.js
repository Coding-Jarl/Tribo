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
        inner join boardgames_have_creators on boardgame.id=boardgames_have_creators.idBoardgame
      where 
        id=${id};`,
      [id]
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
