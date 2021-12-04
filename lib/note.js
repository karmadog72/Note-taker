const fs = require("fs");
const path = require("path");

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
module.exports = { generateNote };
