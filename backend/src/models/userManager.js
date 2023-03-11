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

  findFriends(userId) {
    return this.connection.query(
      `
    SELECT 
      user.id, user.pseudo 
    FROM 
      user
      INNER JOIN circles_have_users ON circles_have_users.user_id=user.id
      INNER JOIN circle ON circle.id=circles_have_users.circle_id
    WHERE 
      circle.idOwner=?
    ;`,
      [userId]
    );
  }
}

module.exports = UserManager;
