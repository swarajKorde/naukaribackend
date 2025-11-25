import mongoose from "mongoose";

const cutoffSchema = new mongoose.Schema({
  category: { type: String, required: true },   // e.g., "General", "SC", "Blind", "PwD"
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

    company: { type: String, default: "", trim: true },

    logo: { type: String, default: "" },

    resultDate: { type: Date },

    // ⭐ ANY number of cutoffs
    cutoffs: {
      type: [cutoffSchema],
      default: [],
    },

    resultLink: { type: String, default: "" },
  },

  { timestamps: true }
);

export default mongoose.model("Result", resultSchema);
