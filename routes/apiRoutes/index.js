const router = require("express").Router();

router.use(note.js);

app.get("/api/notes", (req, res) => {
  res.json(database.slice(1));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.delete("/api/notes/:id", (req, res) => {
  deleteNote(req.params.id, database);
  res.JSON(true);
});
module.exports = router;
