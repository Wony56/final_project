import app from "./app";
import "./db";

import "./models/Stretching";

const PORT = 8080;

const handleListening = () => 
    console.log(`Listening on : http://localhost:${PORT}`)

app.listen(PORT, handleListening);