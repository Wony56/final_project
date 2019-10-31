import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Username is required!"
  },
  name: {
    type: String,
    required: "Name is required!"
  },
  job: String,
  age: Number,
  part: [
    {
      type: String
    }
  ],
  schedules: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Schedule"
    }
  ],
  isStaff: {
    type: Boolean,
    default: false
  }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "username" });

const model = mongoose.model("User", UserSchema);

export default model;
