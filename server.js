const express = require("express");
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes/index");
const htmlRoutes = require("./routes/index");

//instantiate the server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
