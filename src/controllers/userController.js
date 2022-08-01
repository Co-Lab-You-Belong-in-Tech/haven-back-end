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
  static async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await pool.query(
        "SELECT username, pronouns, bio FROM users WHERE id = $1",
        [id]
      );
      res.status(200).json(user.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server Error");
    }
  }
  static async getMyUser(req, res) {
    try {
      const myUser = await pool.query(
        "SELECT username, pronouns, bio FROM users WHERE id = $1",
        [req.user]
      );
      res.status(200).json(myUser.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
}

module.exports = UserController;
