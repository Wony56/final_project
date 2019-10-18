import app from "./app";
import "./db";
import dotenv from "dotenv";

dotenv.config();

import "./models/Stretching";

const PORT = process.env.PORT || 8080;

const handleListening = () => 
    console.log(`Listening on : http://localhost:${PORT}`)

app.listen(PORT, handleListening);