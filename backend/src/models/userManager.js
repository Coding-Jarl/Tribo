const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (pseudo, email, password, createdAt) values (?,?,?,?)`,
      [user.pseudo, user.email, user.password, new Date()]
    );
  }

  findByMail(user) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE email=?`, [
      user.email,
    ]);
  }
}

module.exports = UserManager;
