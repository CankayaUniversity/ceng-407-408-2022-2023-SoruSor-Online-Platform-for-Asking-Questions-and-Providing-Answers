import mongoose from "mongoose"; // This line imports the Mongoose library for MongoDB interactions

// This is the Question schema definition..It includes the question text, question ID,creation date, and user object.
const QuestionSchema = new mongoose.Schema({
  questionName: String,
  questionUrl: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  answers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Answers",
  },
  voteCount: {
    type: Number,
    default: 0,
  },
  user: Object,
});

export default mongoose.model("Questions", QuestionSchema);
