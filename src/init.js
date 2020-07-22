/** @format */
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const PORT = parseInt(process.env.PORT, 10) || 4000;

app.listen(PORT, () => console.log(`Listening on: ${PORT}`));
