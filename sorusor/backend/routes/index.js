import express from "express";// This line imports the Express library for building web applications
import questionRouter from "./Question.js";// Importing the Question model from the Question.js file
import answerRouter from "./Answer.js";// Importing the Answer model from the Answer.js file

const router = express.Router();// Set up the router
// Define a simple GET endpoint that returns a message
router.get("/", (req, res) => {
  res.send("This api is reserved for sorusor");
});

router.use("/questions", questionRouter);// This router handles all routes related to questions
router.use("/answers", answerRouter);//This router handles all routes related to answers

export default router;
