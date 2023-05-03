import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import database from "./database.js";
import router from "./routes/index.js";

const app = express();
const PORT = 80;

database.connect();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", router);
app.use(express.static(path.join(process.cwd(), "/../frontend/build")));
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "/../frontend/build"))
);

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${process.cwd()}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Sorry! Error Occured!");
  }
});

app.use(cors());

app.listen(process.env.PORT || 80, () => {
  console.log(`Listening on port ${PORT}`);
});
