import mongoose from "mongoose";

const VoteSchema = new mongoose.Schema({
  userId: String,
  questionId: mongoose.Schema.Types.ObjectId,
  vote: Number, // -1 for downvotes, 1 for upvotes
});

export default mongoose.model("Votes", VoteSchema);
