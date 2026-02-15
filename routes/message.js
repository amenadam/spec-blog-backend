import express from "express";
import { sendMessage } from "../controllers/Message.js";

const messageRoute = express.Router();

messageRoute.post("/send", sendMessage);
export default messageRoute;
