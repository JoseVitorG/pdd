import express from "express";
import {pegar_data} from "../controller/controller.js"
const router = express.Router()

router.get("/", pegar_data)

export default router