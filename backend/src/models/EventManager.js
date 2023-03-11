const AbstractManager = require("./AbstractManager");

class EventManager extends AbstractManager {
  constructor() {
    super({ table: "event" });
  }

  async insert(event) {
    const newEvent = await this.connection.query(
      `INSERT INTO event (timestamp, location, idOwner) values (?,?,?)`,
      [event.when, event.where, event.idOwner]
    );
    const eventId = newEvent[0].insertId;

    const selectedFriends = event.selectedFriends.map((friend) => [
      eventId,
      friend.value,
    ]);

    await this.connection.query(`INSERT INTO event_has_user values ?`, [
      selectedFriends,
    ]);

    const selectedGames = event.selectedGames.map((game) => [
      eventId,
      game.value,
    ]);
    await this.connection.query(`INSERT INTO event_has_boardgame values ?`, [
      selectedGames,
    ]);

    return newEvent;
  }

  update(item) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    );
  }
}

module.exports = EventManager;
