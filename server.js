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
  res.json(allNotes.slice(1));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public.index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public.notes.html"));
});

app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});
