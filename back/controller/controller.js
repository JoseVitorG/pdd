import cliente from "../db.js"


const pegar_data = async (req, res) => {
    const album_popular = await cliente.query("select * from album_popular limit 6")
    const artistas = await cliente.query("select * from artistas_populares limit 6")
    const radios = await cliente.query("select * from radio_popular limit 6")
    const destaques = await cliente.query("select * from tops_em_destaque limit 6")
    const playlist = await cliente.query("select * from playlist_do_spotify limit 6")
    res.status(200).send({album: album_popular.rows, artistas: artistas.rows, radios: radios.rows, destaques: destaques.rows, playlist: playlist.rows})
}

const add_user = async (req, res) => {
    const data = req.body
    const resposta = await cliente.query(`insert into usuarios(nome, senha) values('${data.nome}', '${data.senha}')`)
    res.status(201).send(resposta)
}

export {pegar_data, add_user}