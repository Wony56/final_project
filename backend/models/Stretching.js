
import mongoose from "mongoose";

const StretchingSchema = new mongoose.Schema({
    url: {
        type: String,
        required: "URL is required"
    },
    highlightUrl: String,
    location: [
        {
            type: String
        }
    ],
    target: [
        {
            type: String
        }
    ],
    occupation: [
        {
            type: String
        }
    ],
    situations: [
        {
            type: String
        }
    ]
});

const model = mongoose.model("Stretching", StretchingSchema);
export default model;