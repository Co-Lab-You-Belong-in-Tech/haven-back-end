const pool = require("../config/dbConfig");

class FriendsController {
  static async sendFriendRequest(req, res) {
    try {
      const { id } = req.params;
      const outgoingRequest = await pool.query(
        "INSERT INTO friend_requests (sender_id, receiver_id) VALUES ($1, $2) RETURNING *",
        [req.user, id]
      );
      res.status(200).json(outgoingRequest.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
  static async acceptFriendRequest() {}

  static async getIncomingRequests(req, res) {
    try {
      const incomingRequests = await pool.query(
        "SELECT * FROM friend_requests WHERE receiver_id = $1",
        [req.user]
      );
      res.status(200).json(incomingRequests.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }

  static async getOutgoingRequests(req, res) {
    try {
      const outgoingRequests = await pool.query(
        "SELECT * FROM friend_requests WHERE sender_id = $1",
        [req.user]
      );
      res.status(200).json(outgoingRequests.rows);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server error");
    }
  }
}

module.exports = FriendsController;
