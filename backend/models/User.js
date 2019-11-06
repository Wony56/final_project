import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: "Username is required!"
  },
  password: {
    type: String,
    required: "Password is requried!"
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
      type: String
    }
  ],
  isStaff: {
    type: Boolean,
    default: false
  }
});

// UserSchema.plugin(passportLocalMongoose, { usernameField: "username" });

const model = mongoose.model("User", UserSchema);

export default model;
