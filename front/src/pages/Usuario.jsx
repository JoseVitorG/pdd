import Header from "../content/Header"
import Biblioteca from "../content/Biblioteca"
import Perfil from "../content/Perfil"

function User() {
    return (
        <>
            <Header />
            <div>
                <Biblioteca />
                <Perfil />
            </div>
        </>
    )

}

export default User