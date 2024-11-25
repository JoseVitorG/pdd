import { useEffect, useState } from 'react'
import axios from "axios"
import '../Home.css'
import { Link } from 'react-router-dom'
import Header from '../content/Header'
import Biblioteca from '../content/Biblioteca'

function Home() {
  const [cantores, setCantores] = useState([])
  const [albuns, setAlbuns] = useState([])
  const [playlists, setPlaylists] = useState([])

  const pegar_inicio = async () => {
    if (!localStorage.getItem("data")) {
      const meta = await axios.get("http://localhost:6969/")
      console.log(meta.data)
      setCantores(meta.data.artistas)
      setAlbuns(meta.data.musicas)
      // setPlaylists(meta.data.playlist)
      localStorage.setItem("data", JSON.stringify(meta.data))
    } else {
      const data = JSON.parse(localStorage.getItem("data"))
      setCantores(data.artistas)
      setAlbuns(data.musicas)
      // setRadios(data.radios)
      // setDestaques(data.destaques)
      // setPlaylists(data.playlist)
    }
  };

  useEffect(() => { pegar_inicio() }, [])

  return (
    <>
      <Header />
      <div className='tela_principal_pesquisa'>
        <Biblioteca />
        <div className='conteiner_musicas'>
          
          <div>
            <div className='conteiner_artista_populares'>
              <p className='titulo'>Artistas populares</p>
              <Link to={"/selection/artistas_populares"} className='mostrar_tudo'>Mostar tudo</Link>
            </div>
            <div className='conteiner_deitado'>
              {cantores?.map((cantor, key) => (
                <Link key={key} className='conteiner_artista' to={`/perfil/${cantor.id}`}>
                  <div className='div_play'>
                    <img src={cantor.foto} className='imagem_artistas' />
                  </div>
                  <p>{cantor.nome}</p>
                  <p>Artista</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className='conteiner_artista_populares'>
              <p className='titulo'>Musicas populares</p>
              <Link to={"/selection/album_popular"} className='mostrar_tudo'>Mostar tudo</Link>
            </div>
            <div className='conteiner_deitado'>
              {albuns.map((album, key) => (
                <div key={key} className='conteiner_artista'>
                  <div className='div_play'>
                    <img src={album.foto} className='albuns_img' />
                  </div>
                  <p>{album.nome}</p>
                  <p>{album.nome_artistas}</p>
                </div>
              ))}
            </div>
          </div>


          {/* <div>
            <div className='conteiner_artista_populares'>
              <p className='titulo'>Playlist do Sputofai</p>
              <Link to={"/selection/playlist_do_spotify"} className='mostrar_tudo'>Mostar tudo</Link>
            </div>
            <div className='conteiner_deitado'>
              {playlists.map((playlist, key) => (
                <div key={key} className='conteiner_artista'>
                  <div className='div_play'>
                    <img src={playlist.foto_url} className='albuns_img' />
                  </div>
                  <p></p>
                  <p>{playlist.descricao}</p>
                </div>
              ))}
            </div>
          </div> */}


        </div>
      </div>

    </>
  )
}

export default Home


