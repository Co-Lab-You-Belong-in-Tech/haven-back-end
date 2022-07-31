const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.use("/auth", require("./src/routes/auth"));
app.use("/activities", require("./src/routes/activities"));
app.use("/activities/:id/replies", require("./src/routes/replies"))