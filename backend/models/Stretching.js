import mongoose from "mongoose";

const StretchingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is requried!'
    },
    description: [
        {
            type: String,
            default: 'Enjoy stretching'
        }
    ],
    imgPath: [
        {
            type: String
        }
    ],
    views: {
        type: Number,
        default: 0
    },
    tag: {
        place: [
            {
                type: String
            }
        ],
        part: [
            {
                type: String
            }
        ],
        situation: [
            {
                type: String
            }
        ]
    }
});

const model = mongoose.model("stretching", StretchingSchema);
export default model;