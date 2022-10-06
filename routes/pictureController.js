const express = require("express");
const router = express.Router();

const Picture = require("../models/picturesModel");

// get all pictures
router.get("/", (req, res) => {
  Picture.find()
    .then((pictures) => res.status(200).json(pictures))
    .catch((error) => res.status(400).json({ error }));
});

// find one
router.get("/:id", (req, res) => {
  Picture.findOne({ _id: req.params.id })
    .then((picture) => res.status(200).json(picture))
    .catch((error) => res.status(400).json({ error }));
});

// post picture
router.post("/", (req, res) => {
  const newPicture = new Picture({
    ...req.body,
  });
  newPicture
    .save()
    .then(() => res.status(200).json({ message: "nouvel objet enregistré !" }))
    .catch((err) => res.status(400).json({ err }));
});

// update
router.put("/:id", (req, res) => {
  Picture.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "objet modifié !" }))
    .catch((err) => res.status(400).json({ err }));
});

// delete
router.delete("/:id", (req, res) => {
  Picture.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "objet supprimé !" }))
    .catch((err) => res.status(400).json({ err }));
});

module.exports = router;
