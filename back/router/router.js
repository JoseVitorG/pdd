import express from "express";
import {pegar_data, add_user, pegar_musicas, login} from "../controller/controller.js"
const router = express.Router()

router.get("/", pegar_data)
router.post("/inscrever", add_user)
router.get("/pesquisa", pegar_musicas)
router.post("/login", login)

export default router