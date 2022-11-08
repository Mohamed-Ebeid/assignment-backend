import mongoose from "mongoose";
const { Schema } = mongoose;
//Model for mongoDB
const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    favVenue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venues",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
