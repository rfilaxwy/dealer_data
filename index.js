const express = require("express"),
  cors = require("cors"),
  csv = require("csv-parser"),
  fs = require("fs"),
  app = express(),
  DAO = require("./db/dao");

//Database

let db = new DAO("/magic/db/file/path.sql");

app.use(cors());

const port = 3100;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/api/dealerData", (req, res) => {
  const carData = [];
  fs.createReadStream("./data/dealer_import.csv")
    .pipe(csv())
    .on("data", row => {
      carData.push(row);
    })
    .on("end", () => {
      console.log("CSV file successfully processed");
      res.status(200).send(carData);
    });
});

app.post("/api/dealerData", (req, res) => {
  //something like this to add get data onto db
  //db.run(backup, req.carData);
  res.status(200).send("Update Success");
});
