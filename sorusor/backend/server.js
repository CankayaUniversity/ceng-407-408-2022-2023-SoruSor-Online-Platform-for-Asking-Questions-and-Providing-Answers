import express from "express";// This line imports the Express library for building web applications
import cors from "cors";// This line imports the CORS library for enabling Cross-Origin Resource Sharing (CORS)
import path from "path";// This line imports the Node.js Path module for working with file paths
import bodyParser from "body-parser";// This line imports the Body-Parser library for parsing request bodies in middleware
import database from "./database.js";// This line imports the "database" module from the "database.js" file
import router from "./routes/index.js";// This line imports the "router" module from the "index.js" file in the "routes" directory

const app = express();// This line creates a new instance of the Express application
const PORT = 80;// This line sets the port number to 80 for the application to listen on

database.connect();// This line calls the "connect" function from the "database" module to establish a connection to the database

app.use(bodyParser.json({ limit: "50mb" }));// This line adds the "body-parser" middleware to parse JSON data with a 50mb limit
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));// This line adds the "body-parser" middleware to parse URL-encoded data with a 50mb limit


// This middleware adds the "Access-Control-Allow-Origin" and "Access-Control-Allow-Headers" headers to allow cross-origin requests
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});

app.use("/api", router);// This middleware mounts the "router" module on the "/api" route
app.use(express.static(path.join(process.cwd(), "/../frontend/build")));// This middleware serves static files from the "frontend/build" directory for all routes
// This middleware serves static files from the "frontend/build" directory for the "/uploads" route
app.use(
  "/uploads",
  express.static(path.join(process.cwd(), "/../frontend/build"))
);

// This middleware handles all routes that are not caught by previous middlewares and serves the "index.html" file from the "frontend/build" directory
app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${process.cwd()}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Sorry! Error Occured!");
  }
});

app.use(cors());// This middleware enables Cross-Origin Resource Sharing (CORS) by adding the necessary headers to the HTTP response

// This code starts the server and listens for incoming requests on port 80 (or the environment port if specified)
app.listen(process.env.PORT || 80, () => {
  console.log(`Listening on port ${PORT}`);
});
