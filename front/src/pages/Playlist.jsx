import Header from "../content/Header"
import Biblioteca from "../content/Biblioteca"
import "../Playlist.css"

function Playlist() {
    return (
        <div>
            <Header></Header>
            <div className='tela_principal_pesquisa'>
                <Biblioteca></Biblioteca>
                <div className='conteiner_playlist'>
                    <div className="div_playlist">
                        <div class="foto_playlist">
                            <svg data-encore-id="icon" role="img" fill="#fff" viewBox="0 0 24 24" width="40" height="40" ><path d="M17.318 1.975a3.329 3.329 0 1 1 4.707 4.707L8.451 20.256c-.49.49-1.082.867-1.735 1.103L2.34 22.94a1 1 0 0 1-1.28-1.28l1.581-4.376a4.726 4.726 0 0 1 1.103-1.735L17.318 1.975zm3.293 1.414a1.329 1.329 0 0 0-1.88 0L5.159 16.963c-.283.283-.5.624-.636 1l-.857 2.372 2.371-.857a2.726 2.726 0 0 0 1.001-.636L20.611 5.268a1.329 1.329 0 0 0 0-1.879z"></path></svg>
                            <p>Editar foto</p>
                        </div>
                        <div className="nome_playlist">nome</div>
                    </div>
                    <div>
                        musicas
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist