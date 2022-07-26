const pool = require("../config/dbConfig");

class Controller {
  static async registerUser(req, res) {
    const { username } = req.body;
    try {
      const user = await pool.query(
        "INSERT INTO users (username) VALUES ($1)",
        [username]
      );
      res.status(200).json("Successfully registered");
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
  static async getAllUsers(req, res) {
    try {
      const users = await pool.query("SELECT * FROM users");
      res.status(200).json(users.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
}

module.exports = Controller;
