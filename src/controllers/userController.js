const pool = require("../config/dbConfig");

class UserController {
  static async getUsers(req, res) {
    try {
      const users = await pool.query(
        "SELECT username, id, first_name, last_name, pronouns, location, avatar_url FROM users"
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
        "SELECT username, pronouns, birthday, first_name, last_name, avatar_url, location FROM users WHERE id = $1",
        [id]
      );
      const activities = await pool.query(
        "SELECT * from activities WHERE user_id = $1",
        [id]
      );

      const interests = await pool.query(
        "SELECT interest FROM interests WHERE user_id = $1",
        [id]
      );
      const moments = await pool.query(
        "SELECT question, answer FROM moments WHERE user_id = $1", [id]
      )
      const userProfile = {
        profile: user.rows,
        activities: activities.rows,
        interests: interests.rows,
        moments: moments.rows
      };
      res.status(200).json(userProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server Error");
    }
  }
  static async getMyUser(req, res) {
    try {
      const myUser = await pool.query(
        "SELECT username, pronouns, birthday, first_name, last_name, avatar_url, location FROM users WHERE id = $1",
        [req.user]
      );
      const myActivities = await pool.query(
        "SELECT * from activities WHERE user_id = $1",
        [req.user]
      );
      const myInterests = await pool.query(
        "SELECT * FROM interests WHERE user_id = $1",
        [req.user]
      );
      const myMoments = await pool.query(
        "SELECT question, answer FROM moments WHERE user_id = $1",
        [req.user]
      )

      const userProfile = {
        myUser: myUser.rows,
        myActivities: myActivities.rows,
        myInterests: myInterests.rows,
        myMomnents: myMoments.rows
      };
      res.status(200).json(userProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
  static async getUserInterest(req, res) {
    try {
      const { id } = req.params;
      const interests = await pool.query(
        "SELECT * FROM interests WHERE user_id = $1",
        [id]
      );
      res.status(200).json(interests.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server Error");
    }
  }
}

module.exports = UserController;
