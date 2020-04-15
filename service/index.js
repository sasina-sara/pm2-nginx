const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Sasina");
});

app.get("/crash", (req, res) => {
  res.send("Crash");
  process.exit(1);
});

app.listen(process.env.PORT, () =>
  console.log("Server is running at ", process.env.PORT)
);
