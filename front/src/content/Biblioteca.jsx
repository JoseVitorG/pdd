import "../Biblioteca.css"
import { Link } from "react-router-dom"

function Biblioteca() {
    return (
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
            <Link className='conteiner_first_playlist' to={"/playlist"}>
                <p>Crie sua primeira playlist</p>
                <p>É facil, vamos te ajudar.</p>
                <div className='button'>Criar playlist</div>
            </Link>

            <Link to={"/add_musica"} className="conteiner_first_playlist">
                <p>Deseja lancar uma musica</p>
                <p>É facil, Clica ai</p>
                <div className='button'>
                    adicionar musica
                </div>
            </Link>
            <Link to={"/add_album"} className="conteiner_first_playlist">
                <p>Deseja lancar um album</p>
                <p>É facil, Clica ai</p>
                <div className='button'>
                    adicionar musica
                </div>
            </Link>
        </div>
    )
}

export default Biblioteca