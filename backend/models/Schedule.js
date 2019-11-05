import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
  stretching: {
    type: String
  }
});

const model = mongoose.model("Schedule", ScheduleSchema);

export default model;
