import express from "express";// This line imports the Express library for building web applications
import questionDB from "../models/Question.js";// Importing the Question model from the Question.js file
import analyzeText from "../utils/perspectiveAPI.js";// Importing function to analyze text using Perspective API

const router = express.Router();// Set up the router
// Define a route to handle POST requests to add a new question
router.post("/", async (req, res) => {
  console.log(req.body);

  try {// Analyze the text using the Perspective API
    const toxicityScore = await analyzeText(req.body.questionName);
    console.log(
      "Toxicity score for question:",
      req.body.questionName,
      "is",
      toxicityScore
    );

    if (toxicityScore >= 0.4) {// If the toxicity score is above 0.4, reject the request
      return res.status(400).send({
        status: false,
        message: "Content not allowed",
      });
    }
 // Create a new question in the database
    await questionDB
      .create({
        questionName: req.body.questionName,
        questionUrl: req.body.questionUrl,
        user: req.body.user,
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Question is added",
        });
      })
      .catch((err) => {// Handle any errors from filtering system that occur
        res.status(400).send({
          status: false,
          message: "Bad format",
        });
      });
  } catch (e) {// Handle any other errors that occur
    res.status(500).send({
      status: false,
      message: "Error while adding question",
    });
  }
});

router.get("/", async (req, res) => {
  try {// Analyze the text using the Perspective API again
    const toxicityScore = await analyzeText(
      req.body.questionName || req.body.answer
    );
    if (toxicityScore >= 0.8) {// If toxicity score is greater than or equal to 0.8, return an error response
      return res.status(400).send({
        status: false,
        message: "Content not allowed",
      });
    }
// Perform an aggregation on the questionDB collection to join it with the answers collection
    await questionDB
      .aggregate([
        {
          $lookup: {
            from: "answers", //collection to join
            localField: "_id", //field from input document
            foreignField: "questionId",
            as: "allAnswers", //output array field
          },
        },
      ])
      .exec()
      .then((doc) => {
        res.status(200).send(doc);// Return the joined document
      })
      .catch((error) => {// Handle any errors from filtering system that occur
        res.status(500).send({
          status: false,
          message: "Unable to get the question details",
        });
      });
  } catch (e) {// Handle any other errors that occur
    res.status(500).send({
      status: false,
      message: "Unexpected error",
    });
  }
});

export default router;
