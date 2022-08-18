const pool = require("../config/dbConfig");

class OnboardingController {
  static async postName(req, res) {
    try {
      const { first_name, last_name } = req.body;
      const updatedName = await pool.query(
        "UPDATE users SET first_name = $1, last_name = $2 WHERE id = $3 RETURNING first_name, last_name",
        [first_name, last_name, req.user]
      );
      res.status(200).json(updatedName.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("server error");
    }
  }
  static async postLocation(req, res) {
    try {
      const { location } = req.body;
      const updatedLocation = await pool.query(
        "UPDATE  users SET location = $1 WHERE id = $2 RETURNING location",
        [location, req.user]
      );
      res.status(200).json(updatedLocation.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("server error");
    }
  }
  static async postPronouns(req, res) {
    try {
      const { pronouns } = req.body;
      const updatedPronouns = await pool.query(
        "UPDATE users SET pronouns = $1 WHERE id = $2 RETURNING pronouns",
        [pronouns, req.user]
      );
      res.status(200).json(updatedPronouns.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("server error");
    }
  }
  static async postInterests(req, res) {
    try {
    } catch (error) {}
  }
  static async postMoments(req, res) {
    try {
    } catch (error) {}
  }
}

module.exports = OnboardingController;
