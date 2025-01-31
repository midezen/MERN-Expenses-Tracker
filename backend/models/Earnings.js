import mongoose from "mongoose";

const earningsSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    amount: { type: Number, required: true },
    calculatedOn: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Earnings", earningsSchema);
