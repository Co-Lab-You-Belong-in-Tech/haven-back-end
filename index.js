const express = require("express");
const controller = require("./src/controllers/controllers");
const app = express();
const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/users", controller.getAllUsers);
app.use("/auth", require("./src/routes/auth"));
app.use("/activities", require("./src/routes/activities"));
