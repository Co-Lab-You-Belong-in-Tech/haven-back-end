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
      const { interests } = req.body;
      const interestArr = JSON.parse(interests);
      const interestInsert = async (user, interest) => {
        await pool.query(
          "INSERT INTO interests (user_id, interest) VALUES ($1, $2)",
          [user, interest]
        );
      };
      const insertInterests = (arr) => {
        for (let i = 0; i < arr.length; i++) {
          interestInsert(req.user, arr[i]);
        }
      };
      if (interests) insertInterests(interestArr);
      res.status(200);
    } catch (error) {
      console.error(error);
      res.status(500).json("server error");
    }
  }
  static async postMoments(req, res) {
    try {
    } catch (error) {}
  }
  static async postBirthday(req, res) {
    try {
      const {birthday} = req.body;
      const updatedBirthday = await pool.query(
        "UPDATE users SET birthday = $1 WHERE id = $2 RETURNING birthday",[birthday, req.user]
      )
      res.status(200).json(updatedBirthday.rows)
    } catch (error) {
      console.error(error);
      res.status(500).json("server error")
    } 
  }
}

module.exports = OnboardingController;
