import axios from "axios"
import { useEffect, useState } from "react"
import "../Add_musica.css"
import { Link } from "react-router-dom"

function Add_album() {
    const [album, setAlbuns] = useState({ nome: "", foto: "", id_artista: 0 })

    const add = async () => {
        if (album.nome && album.foto && album.artista_id != "") {
            await axios.post("http://localhost:6969/add_album", album)
            alert("album adicionada")
        }
    }

    return (
        <>
            <div className="conteiner_add_musica">
                <Link to={"/"} className='spotfy'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-spotify" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                    </svg>
                </Link>
                <div className="conteiner_inputs">
                    <label htmlFor="nome">Nome do album</label>
                    <input type="text" onChange={(e) => album.nome = e.target.value} id="nome" className="inputs" />
                </div>
                <div className="conteiner_inputs">
                    <label htmlFor="id_artista">foto</label>
                    <input type="text" onChange={(e) => album.foto = e.target.value} id="id_artista" className="inputs" />
                </div>
                <div className="conteiner_inputs">
                    <label htmlFor="album_id">Id do artista</label>
                    <input type="number" onChange={(e) => album.id_artista = e.target.value} id="album_id" className="inputs" />
                </div>

                <div onClick={() => add()} className="botao">Adicionar</div>
            </div>
        </>
    )

}

export default Add_album