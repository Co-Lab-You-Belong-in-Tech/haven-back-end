const pool = require("../config/dbConfig");

class OnboardingController {
  static async postName(req, res) {
    try {
      const { first_name, last_name } = req.body;
      const newUser = await pool.query(
        "INSERT INTO users first_name, last_name VALUES($1, $2) RETURNING first_name, last_name",
        [first_name, last_name]
      );
      res.status(200).json(newUser.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("server error");
    }
  }
  static async postLocation(req, res) {
    try {
      const { location } = req.body;
      const insertedLocation = await pool.query(
        "INSERT INTO users location VALUES ($1) RETURNING location",
        [location]
      );
      res.status(200).json(insertedLocation.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("server error");
    }
  }
  static async postPronouns(req, res) {
    try {
      const { pronouns } = req.body;
      const insertedPronouns = await pool.query(
        "INSERT INTO users pronouns VALUES ($1)",
        [pronouns]
      );
      res.status(200).json(insertedPronouns.rows);
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
