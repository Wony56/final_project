import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
  time: {
    type: Number,
    required: "Time is required!"
  },
  stretching: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stretching"
  }
});

const model = mongoose.model("Schedule", ScheduleSchema);

export default model;
