const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://Elisha:elisha_01@cluster0.vlhzzpg.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB Atlas (tesst_auth0) réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !" + err));
