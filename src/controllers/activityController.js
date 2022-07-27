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
  static async getActivity(req, res) {
    try {
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
  static async postActivity(req, res) {
    try {
      const { content, budget, people_amount } = req.body;
      const newActivity = await pool.query(
        "INSERT INTO activities (user_id, content, budget, people_amount) VALUES ($1, $2, $3, $4) RETURNING content, budget, people_amount",
        [req.user, content, budget, people_amount]
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
}

module.exports = ActivityController;
