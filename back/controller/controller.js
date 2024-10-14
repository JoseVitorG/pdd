import cliente from "../db.js"


const pegar_data = async (req, res) => {
    try {
        const [album_popular, artistas, radios, destaques, playlist] = await Promise.all([
            cliente.query("select * from album_popular limit 6"),
            cliente.query("select * from artistas_populares limit 6"),
            cliente.query("select * from radio_popular limit 6"),
            cliente.query("select * from tops_em_destaque limit 6"),
            cliente.query("select * from playlist_do_spotify limit 6")
        ]);

        res.status(200).send({
            album: album_popular.rows,
            artistas: artistas.rows,
            radios: radios.rows,
            destaques: destaques.rows,
            playlist: playlist.rows
        });
    } catch (error) {
        res.status(500).send({ error: 'Erro ao buscar os dados' });
    }
};

const add_user = async (req, res) => {
    const data = req.body
    const resposta = await cliente.query(`insert into usuarios(nome, senha) values('${data.nome}', '${data.senha}')`)
    res.status(201).send(resposta)
}

const pegar_musicas = async (req, res) => {
    const data = await cliente.query(
        `
        SELECT musicas.nome AS nome_musica, 
       album_popular.nome_album AS nome_album,
        album_popular.nome_artistas as nome_artista
        FROM musicas
        LEFT JOIN album_popular ON musicas.album_id = album_popular.id
        limit 6
        ;
        `)
    res.status(200).send(data.rows)
}

const login = async (req, res) => {
    const user = req.body
    const data = await cliente.query(`select nome, senha from usuarios where nome = '${user.nome}' and senha = '${user.senha}'`)
    if (data.rows.length > 0) {
        res.status(200).send(true)
    } else {
        res.status(404).send(false)
    }

}

const add_musica = async (req, res) => {
    const dados = req.body
    const data = await cliente.query(`insert into musicas(nome, artista_id, album_id) values('${dados.nome}', ${dados.artista_id}, ${dados.album_id})`)
    res.status(200).send(data)
}

export { pegar_data, add_user, pegar_musicas, add_musica, login }