import express from "express";
import answerDB from "../models/Answer.js";
import analyzeText from "../utils/perspectiveAPI.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const toxicityScore = await analyzeText(
      req.body.questionName || req.body.answer
    );
    if (toxicityScore >= 0.4) {
      return res.status(400).send({
        status: false,
        message: "Content not allowed",
      });
    }

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
      .catch((e) => {
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
