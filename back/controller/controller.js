import Albuns from "../modules/Albuns.js";
import Artistas from "../modules/Artistas.js";
import Login from "../modules/Login.js";
import Musicas from "../modules/Musicas.js";
import Playlists from "../modules/Playlist.js";

const pegar_data = async (req, res) => {
    try {
        const [musicas, artistas, playlist] = await Promise.all([
            Musicas.findAll({
                include: [
                    { model: Albuns },
                ]
            }),
            Artistas.findAll({
                include: [
                    { model: Login },
                ]
            }),
            Playlists.findAll({
                include: [
                    { model: Musicas },
                    { model: Artistas }
                ]
            })
        ]);

        res.status(200).send({
            musicas,
            artistas,
            playlist
        });

    } catch (error) {
        res.status(500).send({ error: 'Erro ao buscar os dados' });
    }
};

const add_user = async (req, res) => {
    const { email, senha, nome, foto } = req.body
    await Login.create({ email, senha })
    const id_login = await Login.findOne({ attributes: ['id'] }, { where: { email: email } })
    Artistas.create({ nome, foto, id_login })
    res.status(201).send(resposta)
}

const pegar_musicas = async (req, res) => {
    const data = await Musicas.findAll({
        include: [
            { model: Albuns },
        ]
    })
    res.status(200).send(data.rows)
}

const login = async (req, res) => {
    const user = req.body
    const data = await Login.findOne({ where: { email: user.email, senha: user.senha } })
    if (data.length > []) {
        const meta = await Artistas.findOne(
            { where: { id_login: data.id } },
            {
                include: [
                    { model: Login },
                ]
            }
        )
        res.status(200).send(meta)
    } else {
        res.status(404).send(false)
    }

}

const albuns_artista = async (req, res) => {
    const { id } = req.params

    const artista = await Artistas.findByPk(id)
    const albuns = await Albuns.findAll({ where: { id_artista: id } })

    if (albuns && artista > []) {
        res.status(200).send({ artista, albuns })
    } else {
        res.status(404).send(false)
    }
}

const pegar_musicas_artista = async () => {
    const { id_artista } = req.params
    const musicas = await Musicas.findAll({ where: { id: id_artista } })
    res.status(200).send(musicas)
}

// removeria essa xereca mas deixar pra aquelas pragra ver

const add_musica = async (req, res) => {
    const dados = req.body
    const data = await Musicas.create(body)
    res.status(201).send(data.rows)
}

// nao queria fazer assim mas os dados no banco de dados nao estao batendo, entao vai ter que ser assim

// const pegar_artistas = async (req, res) => {
//     const data = await cliente.query(`select id, nome_artistas as nome, foto_url as foto, tipo as desc from artistas_populares limit 18`)
//     res.status(200).send(data.rows)
// }

// const pegar_albuns_populares = async (req, res) => {
//     const data = await cliente.query(`select nome_album as nome, foto_url as foto, nome_artistas as desc from album_popular limit 18`)
//     res.status(200).send(data.rows)
// }
// const pegar_radios_populares = async (req, res) => {
//     const data = await cliente.query(`select nome_artistas as desc, foto_url as foto from radio_popular limit 18`)
//     res.status(200).send(data.rows)
// }
// const pegar_playlists = async (req, res) => {
//     const data = await cliente.query(`select descricao as desc, foto_url as foto from playlist_do_spotify limit 18`)
//     res.status(200).send(data.rows)
// }

export { pegar_data, add_user, pegar_musicas, add_musica, login, albuns_artista, pegar_musicas_artista }