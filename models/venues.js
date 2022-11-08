import mongoose from "mongoose";
const { Schema } = mongoose;

const venuesSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Venues", venuesSchema);
