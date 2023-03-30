const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const PORT = 80;

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors
app.use((req, res, next) => {
  req.headers("Access-Control-Allow-Origin", "*");
  req.headers("Access-Control-Allow-Headers", "*");
  next();
});

//routes
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use("/uploads", express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Sorry! Error Occured!");
  }
});

app.use(cors());

//server listening
app.listen(process.env.PORT || 80, () => {
  console.log(`Listening on port ${PORT}`);
});
