import express from "express";
import { postUser } from "./post.js";
import getUsers from "./get.js";

const router = express.Router();

router.post("/", postUser);
router.get("/", getUsers);

export default router;
