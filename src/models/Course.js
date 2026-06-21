import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    default: "4 weeks",
  },
});

export default mongoose.models.Course || mongoose.model("Course", courseSchema);
