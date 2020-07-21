/** @format */

import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = parseInt(dotenv.config(), 10) || 4000;

app.listen(PORT, () => console.log(`Listening on :${PORT}`));
