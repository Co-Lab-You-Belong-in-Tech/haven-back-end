const pool = require("../config/dbConfig");

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await pool.query(
        "SELECT username, pronouns, bio FROM users"
      );
      res.status(200).json(users.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
}

module.exports = UserController;
