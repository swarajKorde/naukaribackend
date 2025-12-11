import mongoose from "mongoose";

const cutoffSchema = new mongoose.Schema({
  category: { type: String, required: true, uppercase:true },   // e.g., "General", "SC", "Blind", "PwD"
  value: { type: String, required: true }       // e.g., "74.5"
});

const resultSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      required:true
    },
    company: { type: String, default: "", trim: true },

    logo: { type: String, default: "" },

    resultDate: { type: Date },

    // ⭐ ANY number of cutoffs
    cutoffs: {
      type: [cutoffSchema],
      required:false,
      default: [],
    },

    resultLink: { type: String, default: "" },
  },

  { timestamps: true }
);

export default mongoose.model("Result", resultSchema);
