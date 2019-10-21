import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

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
    repetition: String,
    imgAddress: {
        type: String,
        default: process.env.IMAGE_ADDRESS || "127.0.0.1"
    },
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