const router = require("express").Router();
const fs = require("fs");
// const database = fs.readFileSync("", "utf8");
let database = require("../../db/db.json");
const path = require("path");
// router.use(note.js);

router.get("/notes", (req, res) => {
  return res.json(database);
});

router.post("/notes", (req, res) => {
  // req.body <-- comes from request from the front end
  const noteBody = req.body;
  let newData = database || [];
  newData.push(noteBody);
  // fs.writeFile as db.json and make the file contents newData
  fs.write("newData", db.json(database), (err) => {
    if (err) throw err;
  });
  console.log(noteBody);
});

router.delete("/api/notes/:id", (req, res) => {
  deleteNote(req.params.id, database);
  res.JSON(true);
});
module.exports = router;
