import express from "express";
import { getMessages, sendMessage } from "../controllers/Message.js";

const messageRoute = express.Router();

messageRoute.post("/send", sendMessage);
messageRoute.get("/", getMessages);
export default messageRoute;
