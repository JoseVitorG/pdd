import { useEffect, useState } from 'react'
import axios from "axios"
import '../Home.css'
import { Link } from 'react-router-dom'
import Header from '../content/Header'
import Biblioteca from '../content/Biblioteca'

function Home() {
  const [cantores, setCantores] = useState([])
  const [albuns, setAlbuns] = useState([])
  const [radios, setRadios] = useState([])
  const [destaques, setDestaques] = useState([])
  const [playlists, setPlaylists] = useState([])

  const pegar_inicio = async () => {
    if (!localStorage.getItem("data")) {
      const meta = await axios.get("http://localhost:6969/")
      setAlbuns(meta.data.album)
      setCantores(meta.data.artistas)
      setRadios(meta.data.radios)
      setDestaques(meta.data.destaques)
      setPlaylists(meta.data.playlist)
      localStorage.setItem("data", JSON.stringify(meta.data))
    } else {
      const data = JSON.parse(localStorage.getItem("data"))
      setAlbuns(data.album)
      setCantores(data.artistas)
      setRadios(data.radios)
      setDestaques(data.destaques)
      setPlaylists(data.playlist)
    }
  }

  useEffect(() => { pegar_inicio() }, [])

  return (
    <>
      <Header />
      <div className='tela_principal'>
        <Biblioteca />
        <div className='conteiner_musicas'>
          <div>
            <div className='conteiner_artista_populares'>
              <p className='titulo'>Artistas populares</p>
              <Link to={"/selection/artistas_populares"} className='mostrar_tudo'>Mostar tudo</Link>
            </div>
            <div className='conteiner_deitado'>
              {cantores?.map((cantor, key) => (
                <div key={key} className='conteiner_artista'>
                  <div className='div_play'>
                    <img src={cantor.foto_url} className='imagem_artistas' />
                  </div>
                  <p>{cantor.nome_artistas}</p>
                  <p>{cantor.tipo}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className='conteiner_artista_populares'>
              <p className='titulo'>Álbuns populares</p>
              <Link to={"/selection/album_popular"} className='mostrar_tudo'>Mostar tudo</Link>
            </div>
            <div className='conteiner_deitado'>
              {albuns.map((album, key) => (
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

          <div>
            <div className='conteiner_artista_populares'>
              <p className='titulo'>Estações de rádio populares</p>
              <Link to={"/selection/radio_popular"} className='mostrar_tudo'>Mostar tudo</Link>
            </div>
            <div className='conteiner_deitado'>
              {radios.map((radio, key) => (
                <div key={key} className='conteiner_artista'>
                  <div className='div_play'>
                    <img src={radio.foto_url} className='albuns_img' />
                  </div>
                  <p>{radio.nome_album}</p>
                  <p>{radio.nome_artistas}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className='conteiner_artista_populares'>
              <p className='titulo'>Paradas em destaques</p>
            </div>
            <div className='conteiner_deitado'>
              {destaques.map((destaque, key) => (
                <div key={key} className='conteiner_artista'>
                  <div className='div_play'>
                    <img src={destaque.foto_url} className='albuns_img' />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
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
          </div>


        </div>
      </div>

    </>
  )
}

export default Home
