import express from "express";// This line imports the Express library for building web applications
import answerDB from "../models/Answer.js";// Importing the Answer model from the Answer.js file
import analyzeText from "../utils/perspectiveAPI.js";// Importing function to analyze text using Perspective API

const router = express.Router();// Set up the router
// Define a route to handle POST requests to add a new answer
router.post("/", async (req, res) => {
  try {// Analyze the text using the Perspective API
    const toxicityScore = await analyzeText(
      req.body.questionName || req.body.answer
    );
    if (toxicityScore >= 0.4) {// If the toxicity score is above 0.4, reject the request
      return res.status(400).send({
        status: false,
        message: "Content not allowed",
      });
    }
 // Create a new answer in the database
    await answerDB
      .create({
        answer: req.body.answer,
        questionId: req.body.questionId,
        user: req.body.user,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Answer added successfuly",
        });
      })
      .catch((e) => {// Handle any errors that occur
        res.status(400).send({
          status: false,
          message: "Bad request",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Error while adding answer",
    });
  }
});

export default router;
