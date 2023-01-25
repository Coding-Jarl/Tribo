const AbstractManager = require("./AbstractManager");

class SearchableManager extends AbstractManager {
  constructor() {
    super({ table: "searchable" });
  }

  findByNeedle(needle) {
    return this.connection.query(
      `select * from  ${this.table} where haystack LIKE ?`,
      [`%${needle}%`]
    );
  }
}

module.exports = SearchableManager;
