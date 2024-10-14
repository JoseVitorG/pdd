import { useEffect, useState } from 'react'
import axios from 'axios'

import "../Pesquisa.css"
import Header from '../content/Header'
import Biblioteca from '../content/Biblioteca'

function Pesquisa() {
    const [recentes, setRecentes] = useState([])

    const pegar_musicas = async () => {
        const musicas = await axios.get("http://localhost:6969/pesquisa")
        setRecentes(musicas.data)
    }

    useEffect(() => {pegar_musicas()},[])

    return (
        <>
            <Header />
            <div className='tela_principal_pesquisa'>
                <Biblioteca />
                <div className='conteiner_pesquisados'>
                    <div>
                        <div className='conteiner_titulo_pesquisa'>
                            <p className='titulo'>Álbuns populares</p>
                        </div>
                        <div className='conteiner_deitado'>
                            {recentes.map((album, key) => (
                                <div key={key} className='conteiner_artista'>
                                    <div className='div_play'>
                                        <img src={album.foto_url} className='albuns_img' />
                                    </div>
                                    <p>{album.nome_album}</p>
                                    <p>{album.nome_artista}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                </div>
            </div>

        </>
    )
}

export default Pesquisa