const express = require("express");
const fs = require("fs");
const filePath = require("filePath");

//instantiate the server
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`API server now on port 3001!`);
});
