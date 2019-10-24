import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: 'Username is required!'
    },
    isStaff: {
        type: Boolean,
        default: false
    }
});

UserSchema.plugin(passportLocalMongoose, {usernameField: "username"});

const model = mongoose.model("User", UserSchema);

export default model;