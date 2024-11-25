import Header from "../content/Header"
import Biblioteca from "../content/Biblioteca"
import Perfil from "../content/Perfil"

function User() {
    return (
        <>
            <Header />
            <div className='tela_principal_pesquisa'>
                <Biblioteca />
                <Perfil />
            </div>
        </>
    )

}

export default User