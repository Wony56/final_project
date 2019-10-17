import mongoose from "mongoose";

mongoose.connect(
    "mongodb://client:client@13.125.39.196:8000/spine_fairy",
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
)

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = error => console.log(`Error on DB Connection ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
