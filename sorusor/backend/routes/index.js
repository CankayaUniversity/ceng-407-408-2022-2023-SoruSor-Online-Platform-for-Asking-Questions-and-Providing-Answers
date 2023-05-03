import express from "express";
import questionRouter from "./Question.js";
import answerRouter from "./Answer.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("This api is reserved for sorusor");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);

export default router;
