const pool = require("../config/dbConfig");

class RepliesController {
  static async getReplies(req, res) {
    try {
      const { id } = req.params;
      const replies = await pool.query(
        "SELECT * FROM replies WHERE activity_id = $1",
        [id]
      );
      res.status(200).json(replies.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
  static async postReply(req, res) {
    try {
      const { content, activity_id } = req.body;
      const newReply = await pool.query(
        "INSERT INTO replies (user_id, activity_id, content) VALUES ($1, $2, $3) RETURNING activity_id, content",
        [req.user, content, activity_id]
      );
      res.json(newReply.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
  static async deleteReply(req, res) {
    try {
      const { id } = req.params;
      const deletedReply = await pool.query(
        "DELETE FROM replies WHERE id = $1 RETURNING *",
        [id]
      );
      res.json(deletedReply.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
}

module.exports = RepliesController;
