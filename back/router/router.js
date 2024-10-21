import express from "express";
import { pegar_data, add_user, pegar_musicas, login, add_musica, pegar_artistas, pegar_albuns_populares, pegar_radios_populares, pegar_playlists, perfil } from "../controller/controller.js"
const router = express.Router()

router.get("/", pegar_data)
router.post("/inscrever", add_user)
router.get("/pesquisa", pegar_musicas)
router.post("/login", login)
router.post("/add_musica", add_musica)
router.get("/perfil/:nome_artistas", perfil)


router.get("/mostra_todos/artistas_populares", pegar_artistas)
router.get("/mostra_todos/album_popular", pegar_albuns_populares)
router.get("/mostra_todos/radio_popular", pegar_radios_populares)
router.get("/mostra_todos/playlist_do_spotify", pegar_playlists)

export default router