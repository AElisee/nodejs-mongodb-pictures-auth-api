const express = require("express");
const cors = require("cors");
require("./models/dbConfig");

// routes
const pictureRoutes = require("./routes/pictureController");
const userRoutes = require("./routes/userController");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/picture", pictureRoutes);
app.use("/api/auth", userRoutes);

app.listen(5000, () => {
  console.log("server listening on port 5000 !");
});
