const express = require("express");
const path = require("path");
const app = express();
const { port } = require(path.join(__dirname, "config.js"));

app.use(express.static(path.join(__dirname, "..", "client", "entry")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "entry", "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Listening on http://0.0.0.0:${server.address().port}`);
});