const express = require("express");
const path = require("path");
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, "..", "client", "entry")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "entry", "index.html"));
});

app.listen(port, "127.0.0.1", () => {
  console.log("Listening on http://127.0.0.1:" + port);
});
