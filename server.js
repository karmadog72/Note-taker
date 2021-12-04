const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db.json");

//instantiate the server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/notes", (req, res) => {
  res.json(database.slice(1));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public.index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public.notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public.index.html"));
});

function generateNote(body, notesArray) {
  var note = body;
  if (!Array.isArray(notesArray)) notesArray = [];
  if (notesArray.length === 0) notesArray.push(0);
  body.id = notesArray[0];
  notesArray[0]++;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}
app.post("api/notes", (req, res) => {
  const note = generateNote(req.body, database);
  res.json(note);
});

function deleteNote(id, notesArray) {
  for (let i = 0; i < notesArray.length; i++) {
    let note = notesArray[i];

    if (note.id === id) {
      notesArray.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify(notesArray, null, 2)
      );
      break;
    }
  }
}

app.delete("/api/notes/:id", (req, res) => {
  deleteNote(req.params.id, database);
  res.JSON(true);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
