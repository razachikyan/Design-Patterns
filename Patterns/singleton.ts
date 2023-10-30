class Database {
  private static instance: Database;
  private constructor() {
    // Connect to DB
  }
  public static connectDB(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  public getData() {}
}

(function clientCode() {
  const db1 = Database.connectDB();
  const db2 = Database.connectDB();

  if (db1 === db2) {
    console.log("Pattern works, both variables contain the same instance.");
  } else {
    console.log("Pattern failed, variables contain different instances.");
  }
})();
