import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const StretchingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Title is requried!'
    },
    repetition: String,
    processList: [
        {
            imgAddress: {
                type: String,
                default: process.env.IMAGE_ADDRESS || "127.0.0.1"
            },
            imgPath: {
                type: String
            },
            description: [
                {
                    type: String
                }
            ]
        }
    ],
    views: {
        type: Number,
        default: 0
    },
    check: String,
    point: String,
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
    ],
    hashtag: [
        {
            type: String
        }
    ]
});

const model = mongoose.model("stretching", StretchingSchema);
export default model;