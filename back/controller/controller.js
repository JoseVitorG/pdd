import Albuns from "../modules/Albuns.js";
import Artistas from "../modules/Artistas.js";
import Login from "../modules/Login.js";
import Musicas from "../modules/Musicas.js";
import Playlists from "../modules/Playlist.js";


const get = async (req, res) => {
    try {
        const login = await Login.findAll()
        const artistas = await Artistas.findAll()
        const album = await Albuns.findAll()
        const musicas = await Musicas.findAll()
        res.status(200).send({ artistas, login, album, musicas })
    } catch (e) {

    }
}
const pegar_data = async (req, res) => {
    try {
        const [musicas, artistas, playlist] = await Promise.all([
            Musicas.findAll(
                {
                    limit: 6
                }
                ,
                {
                    include: [
                        { model: Albuns },
                    ]
                }),
            Artistas.findAll(
                {
                    limit: 6
                }
                , {
                    include: [
                        { model: Login },
                    ]
                }),
            Playlists.findAll(
                {
                    limit: 6
                }
                , {
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
    const login = await Login.findOne({ where: { email: email } })
    const id_login = login.dataValues.id
    Artistas.create({ nome, foto, id_login })
    res.status(201).send('foi')
}

const pegar_musicas = async (req, res) => {
    const data = await Musicas.findAll(
        {
            limit: 6
        }
        , {
            include: [
                { model: Albuns },
            ]
        })
    res.status(200).send(data)
}

const login = async (req, res) => {
    try {
        const user = req.body;

        const data = await Login.findOne({ where: { email: user.email, senha: user.senha } });

        if (data) {
            const meta = await Artistas.findOne({
                where: { id_login: data.id },
                include: [
                    {
                        model: Login,
                    },
                ],
            });

            if (meta) {
                res.status(200).send(meta);
            } else {
                res.status(404).send({ message: "Artista não encontrado." });
            }
        } else {
            res.status(404).send({ message: "Usuário não encontrado." });
        }
    } catch (error) {
        console.error("Erro no login:", error);
        res.status(500).send({ message: "Erro no servidor.", error: error.message });
    }
};


const albuns_artista = async (req, res) => {
    const { id } = req.params

    const artista = await Artistas.findByPk(id)
    const albuns = await Albuns.findAll(
        {
            limit: 6
        }
        , { where: { id_artista: id } })

    if (albuns && artista > []) {
        res.status(200).send({ artista, albuns })
    } else {
        res.status(404).send(false)
    }
}

const pegar_musicas_artista = async () => {
    const { id_artista } = req.params
    const musicas = await Musicas.findAll({ limit: 6 }, { where: { id: id_artista } })
    res.status(200).send(musicas)
}

const add_album = async (req, res) => {
    const { nome, foto, id_artista } = req.body
    Number(id_artista)
    await Albuns.create({ nome, foto, id_artista })
    res.status(201).send('ad')
}

const add_musica = async (req, res) => {
    const { nome, id_album } = req.body
    const album = await Albuns.findByPk(id_album)
    const foto = album.dataValues.foto
    await Musicas.create({ nome, foto, data_lancamento: new Date(), id_album })
    res.status(201).send('')
}

// preciso do banco para arrumar
const criar_playlist = async (req, res) => {
    const { nome, foto } = req.body
}

export { pegar_data, add_user, pegar_musicas, add_musica, login, albuns_artista, pegar_musicas_artista, get, add_album }