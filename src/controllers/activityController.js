const pool = require("../config/dbConfig");

class ActivityController {
  static async getAllActivities(req, res) {
    try {
      const activities = await pool.query(
        "SELECT * FROM activities"
      );
      res.status(200).json({activities});
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
}

module.exports = ActivityController;
