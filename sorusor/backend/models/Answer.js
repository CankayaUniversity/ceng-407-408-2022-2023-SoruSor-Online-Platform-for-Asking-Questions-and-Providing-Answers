import mongoose from "mongoose";// This line imports the Mongoose library for MongoDB interactions

//This is the schema for answers.It includes the answer text, question ID,creation date, and user object.
const AnswerSchema = new mongoose.Schema({
  answer: String,
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
});

export default mongoose.model("Answers", AnswerSchema);
