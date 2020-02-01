const express = require("express");
const d3 = require("d3-dsv");
const csv = require("csv-parser");
const fs = require("fs");
const app = express();

const port = 3100;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/api/dealerData", (req, res) => {
  console.log(req);
  res.status(200).send("gotcha");
});

///Maybe put this in a get request to mimic getting new car data or in a post to mimic new car data
//being sent.
// let carData = [];

// fs.createReadStream("./data/dealer_import.csv")
//   .pipe(csv())
//   .on("data", row => {
//     carData.push(row);

//     // console.log(row);
//   })
//   .on("end", () => {
//     console.log("CSV file successfully processed");
//     console.log(carData);
//   });
