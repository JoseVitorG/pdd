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
    await cliente.query(`insert into artistas_populares(nome_artistas, foto_url, tipo) values('${data.nome}', '${data.foto}', 'Artista')`)
    const id = await cliente.query(`select id from artistas_populares where nome_artistas = '${data.nome}'`)
    const resposta = await cliente.query(`insert into usuarios(email, senha, artista_id) values('${data.email}', '${data.senha}', ${id.rows[0].id})`)
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
    const data = await cliente.query(
        `
    select 
    usuarios.artista_id,
    usuarios.email, 
    usuarios.senha, 
    artistas_populares.nome_artistas as nome, 
    artistas_populares.foto_url as foto 
    from usuarios 
    join public.artistas_populares on usuarios.artista_id = artistas_populares.id
    where email = '${user.email}' and senha = '${user.senha}'
    `)
    if (data.rows.length > []) {
        res.status(200).send(data.rows)
    } else {
        res.status(404).send(false)
    }

}

const perfil = async (req, res) => {
    const { nome_artistas } = req.params

    const musicas = await cliente.query(
        `
        select
        musicas.nome,
        album_popular.foto_url as foto
        from musicas
        join album_popular on musicas.album_id = album_popular.id
        where nome_artistas = '${nome_artistas}'
        `
    )

    const user = await cliente.query(
        `
        select
        nome_artistas as nome,
        foto_url as foto,
        tipo
        from artistas_populares
        where nome_artistas = '${nome_artistas}'
        `
    )

    if (musicas.rows.length && user.rows.length > []) {
        res.status(200).send({user: user.rows,musicas: musicas.rows })
    } else {
        res.status(404).send(false)
    }

}

const add_musica = async (req, res) => {
    const dados = req.body
    const data = await cliente.query(`insert into musicas(nome, artista_id, album_id) values('${dados.nome}', ${dados.artista_id}, ${dados.album_id})`)
    res.status(201).send(data.rows)
}

// nao queria fazer assim mas os dados no banco de dados nao estao batendo, entao vai ter que ser assim

const pegar_artistas = async (req, res) => {
    const data = await cliente.query(`select id, nome_artistas as nome, foto_url as foto, tipo as desc from artistas_populares limit 18`)
    res.status(200).send(data.rows)
}

const pegar_albuns_populares = async (req, res) => {
    const data = await cliente.query(`select nome_album as nome, foto_url as foto, nome_artistas as desc from album_popular limit 18`)
    res.status(200).send(data.rows)
}
const pegar_radios_populares = async (req, res) => {
    const data = await cliente.query(`select nome_artistas as desc, foto_url as foto from radio_popular limit 18`)
    res.status(200).send(data.rows)
}
const pegar_playlists = async (req, res) => {
    const data = await cliente.query(`select descricao as desc, foto_url as foto from playlist_do_spotify limit 18`)
    res.status(200).send(data.rows)
}

export { pegar_data, add_user, pegar_musicas, add_musica, login, pegar_artistas, pegar_albuns_populares, pegar_radios_populares, pegar_playlists, perfil }