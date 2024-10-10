import { useState } from 'react'

import "../Pesquisa.css"
import Header from '../content/Header'
import Biblioteca from '../content/Biblioteca'

function Pesquisa() {
    const [recentes, setRecentes] = useState([
        // { nome_album: "333", nome_artistas: "matuê", foto_url: "https://i.scdn.co/image/ab67616d00001e0263ecdc2fc549275b51fbb9a7" },
        // { nome_album: "333", nome_artistas: "matuê", foto_url: "https://i.scdn.co/image/ab67616d00001e0263ecdc2fc549275b51fbb9a7" },
        // { nome_album: "333", nome_artistas: "matuê", foto_url: "https://i.scdn.co/image/ab67616d00001e0263ecdc2fc549275b51fbb9a7" },
        // { nome_album: "333", nome_artistas: "matuê", foto_url: "https://i.scdn.co/image/ab67616d00001e0263ecdc2fc549275b51fbb9a7" },
        // { nome_album: "333", nome_artistas: "matuê", foto_url: "https://i.scdn.co/image/ab67616d00001e0263ecdc2fc549275b51fbb9a7" },
        // { nome_album: "333", nome_artistas: "matuê", foto_url: "https://i.scdn.co/image/ab67616d00001e0263ecdc2fc549275b51fbb9a7" },
    ])

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
                                    <p>{album.nome_artistas}</p>
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