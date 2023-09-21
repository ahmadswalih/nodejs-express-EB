const express = require("express");

const app = express();
const port = 80;

//get Route
app.get("/", (req, res) => {
  res.status(200).send("Helllo Worldddd");
});

app.listen(port, () => {
  console.log(`Application is Running in the PORT ${port}`);
});
