import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'


function App() {
  const [cantores, setCantores] = useState([])
  const [albuns, setAlbuns] = useState([])
  const [radios, setRadios] = useState([])
  const [destaques, setDestaques] = useState([])
  const [playlists, setPlaylists] = useState([])

  const pegar_inicio = async () => {
    const meta = await axios.get("http://localhost:6969/")
    setAlbuns(meta.data.album)
    setCantores(meta.data.artistas)
    setRadios(meta.data.radios)
    setDestaques(meta.data.destaques)
    setPlaylists(meta.data.playlist)
  }

  useEffect(() => { pegar_inicio() }, [])

  return (
    <>
      <header className='header'>
        <div className='spotfy'>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-spotify" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
          </svg>
        </div>
        <div className='conteiner_header'>
          <div className='btn_home'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
          </div>
          <label className='procurar'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
            <input type="text" className='input' />
          </label>
        </div>
        <div className='conteiner_header'>
          <div className='btn_inscrever'>Inscreva-se</div>
          <div className='btn_entrar'>Entrar</div>
        </div>
      </header>
      <div className='tela_principal'>
        <div className='biblioteca'>
          <div className='header_biblioteca'>
            <div className='title'>
              <div>
                <svg data-encore-id="icon" role="img" width="25" height="25" fill="#878787" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
              </div>
              <p>Sua Biblioteca</p>
            </div>
            <p className='plus'>+</p>
          </div>
          <div className='conteiner_first_playlist'>
            <p>Crie sua primeira playlist</p>
            <p>É facil, vamos te ajudar.</p>
            <div className='button'>Criar playlist</div>
          </div>
          <div className='conteiner_first_playlist'>
            <p>Que tal seguir um podcast novo?</p>
            <p>Avisaremos você sobre novos episódeos.</p>
            <div className='button'>Explore podcasts</div>
          </div>
        </div>

        <div className='conteiner_musicas'>
          <div>
            <div className='conteiner_artista_populares'>
              <p className='titulo'>Artistas populares</p>
              <div className='mostrar_tudo'>Mostar tudo</div>
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
              <div className='mostrar_tudo'>Mostar tudo</div>
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
              <div className='mostrar_tudo'>Mostar tudo</div>
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
              <div className='mostrar_tudo'>Mostar tudo</div>
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

export default App
