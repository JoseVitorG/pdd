import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Perfil() {
    const [musicas, setMusicas] = useState([])
    const { id } = useParams()

    const pegar_data = async () => {
        console.log(id)
        const meta = await axios.get(`http://localhost:6969/perfil/${id}`)
        setMusicas(meta.data.musicas)
    }

    useEffect(() => { pegar_data() }, [])
    return (

        <div className='conteiner_mostrar_tudo'>
            <img src="" />
            <div>
                <div className='conteiner_deitado_mostrar'>
                    {musicas.map((item, key) => (
                        <div key={key} className='conteiner_enter_mostra_tudo'>
                            <div className='div_play'>
                                <img src={item.foto} />
                            </div>
                            <p>{item.nome}</p>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Perfil