const express = require("express");
const cors = require("cors");
const csv = require("csv-parser");
const fs = require("fs");
const app = express();

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
  //   console.log(req);
  res.status(200).send("gotcha");
});
