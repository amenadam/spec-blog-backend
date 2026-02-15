import express from "express";
import { login } from "../controllers/auth.js";

const auhtRoute = express.Router();

auhtRoute.post("/login", login);

export default auhtRoute;
