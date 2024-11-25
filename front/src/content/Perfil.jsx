import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "../Perfil.css"

function Perfil() {
    const [musicas, setMusicas] = useState([])
    const [user, setUser] = useState([])
    const { id } = useParams()

    const pegar_data = async () => {
        console.log(id)
        const meta = await axios.get(`http://localhost:6969/perfil/${id}`)
        setMusicas(meta.data.albuns)
        setUser(meta.data.artista)
    }

    useEffect(() => { pegar_data() }, [])
    return (
        <div className='conteiner_mostrar_tudo'>
            <div className="conteiner_deitado_perfil">
                <img src={user.foto} className="imagem_fundo_perfil" />
                <div className="nome_artista">{user.nome}</div>
            </div>
            <div>
                <div className='conteiner_deitado_mostrar'>
                    {musicas.map((item, key) => (
                        <div key={key} className='conteiner_enter_mostra_tudo'>
                            <div className='div_play'>
                                <img src={item.foto} className="albuns_img" />
                            </div>
                            <p>{item.nome}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Perfil