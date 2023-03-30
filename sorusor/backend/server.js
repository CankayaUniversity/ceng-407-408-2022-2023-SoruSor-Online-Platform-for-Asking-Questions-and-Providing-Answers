const express = require("express");// This line imports the Express.js library
const cors = require("cors");// This line imports the CORS middleware
const path = require("path");// This line imports the Path module
const app = express();// This line creates a new Express application instance
const bodyParser = require("body-parser");// This line imports the Body Parser middleware
const PORT = 80;// This line sets the port number to 80

//middleware
app.use(bodyParser.json({ limit: "50mb" }));// This line adds a middleware to parse incoming JSON data with a limit of 50mb
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));// This line adds a middleware to parse incoming URL-encoded data with extended options and a limit of 50mb

//cors
app.use((req, res, next) => {// This line adds a middleware function to handle all incoming requests
  req.headers("Access-Control-Allow-Origin", "*");// This line sets the Access-Control-Allow-Origin header to allow all origins
  req.headers("Access-Control-Allow-Headers", "*");// This line sets the Access-Control-Allow-Headers header to allow all headers
  next();// This line calls the next middleware function in the stack
});

//routes
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));// This line serves static files in the "/uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "/../frontend/build")));// This line serves static files in the "/uploads" directory from the frontend build folder

app.get("*", (req, res) => {// This line defines a route to handle all other requests and sends the index.html
  try {// Try to execute the following block of code
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));// This line sends the index.html file to the client
  } catch (e) {
    res.send("Sorry! Error Occured!");// This line sends a response message to the client indicating an error occurred
  }
});

app.use(cors());// This line enables Cross-Origin Resource Sharing (CORS) middleware

//server listening
app.listen(process.env.PORT || 80, () => {// This line starts the server listening on the specified port or the default port (80)
  console.log(`Listening on port ${PORT}`);// This line logs a message to the console indicating the server is listening on the specified port
});
