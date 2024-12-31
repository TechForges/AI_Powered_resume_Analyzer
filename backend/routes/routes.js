import express from "express";
import { getTest } from "../controller/controller.js";

export const router = express.Router();

//test
router.get("/test",getTest);


export default router;