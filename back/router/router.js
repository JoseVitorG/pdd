import express from "express";
import { pegar_data, add_user, pegar_musicas, add_musica, login, albuns_artista, pegar_musicas_artista, get, add_album } from "../controller/controller.js"
const router = express.Router()

router.get("/", pegar_data)
router.get("/get", get)
router.post("/inscrever", add_user)
router.get("/pesquisa", pegar_musicas)
router.post("/login", login)
router.post("/add_musica", add_musica)
router.post("/add_album", add_album)
router.get("/perfil/:id", albuns_artista)
router.get("/perfil/:nome_artistas/musicas", pegar_musicas_artista)



// router.get("/mostra_todos/artistas_populares", pegar_artistas)
// router.get("/mostra_todos/album_popular", pegar_albuns_populares)
// router.get("/mostra_todos/radio_popular", pegar_radios_populares)
// router.get("/mostra_todos/playlist_do_spotify", pegar_playlists)

export default router