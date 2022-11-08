import mongoose from "mongoose";
const { Schema } = mongoose;
//Model for mongoDB

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
