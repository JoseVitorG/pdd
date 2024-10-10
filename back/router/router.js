import express from "express";
import {pegar_data, add_user} from "../controller/controller.js"
const router = express.Router()

router.get("/", pegar_data)
router.post("/inscrever", add_user)

export default router