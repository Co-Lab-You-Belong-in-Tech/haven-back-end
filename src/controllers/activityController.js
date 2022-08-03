const pool = require("../config/dbConfig");

class ActivityController {
  static async getAllActivities(req, res) {
    try {
      const activities = await pool.query("SELECT * FROM activities");
      res.status(200).json(activities.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
  static async postActivity(req, res) {
    try {
      const { title, content, budget, spots_closed, spots_total} = req.body;
      const newActivity = await pool.query(
        "INSERT INTO activities (user_id, title, content, budget, spots_open, spots_total) VALUES ($1, $2, $3, $4, $5, $6) RETURNING title, content, budget, spots_open, spots_total",
        [req.user, title, content, budget, spots_closed, spots_total]
      );
      res.json(newActivity.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
  static async deleteActivity(req, res) {
    try {
      const { id } = req.params;
      const deletedActivity = await pool.query(
        "DELETE FROM activities WHERE id = $1 RETURNING *",
        [id]
      );
      res.json(deletedActivity.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
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
      const { id } = req.params;
      const { content } = req.body;
      const newReply = await pool.query(
        "INSERT INTO replies (user_id, activity_id, content) VALUES ($1, $2, $3) RETURNING activity_id, content",
        [req.user, id, content]
      );
      res.json(newReply.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
  static async deleteReply(req, res) {
    try {
      const { reply_id } = req.params;
      const deletedReply = await pool.query(
        "DELETE FROM replies WHERE id = $1 RETURNING *",
        [reply_id]
      );
      res.json(deletedReply.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
}

module.exports = ActivityController;
