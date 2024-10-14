import { useParams } from "react-router-dom"
import Biblioteca from "../content/Biblioteca"
import Header from "../content/Header"
import axios from "axios"
import { useEffect, useState } from "react"
import "../Mostrar_tudo.css"


function Mostar_tudo() {
    const [dados, setDados] = useState([])
    const { tabela } = useParams()

    const pegar_data = async () => {
        const data = await axios.get(`http://localhost:6969/mostra_todos/${tabela}`)
        console.log()
        setDados(data.data)
    }

    useEffect(() => { pegar_data() }, [])

    return (
        <>
            <Header />
            <div className='tela_principal_mostrar_tudo'>
                <Biblioteca />
                <div className='conteiner_mostrar_tudo'>
                    <div>
                        <div className='conteiner_deitado_mostrar'>
                            {dados.map((item, key) => (
                                <div key={key} className='conteiner_enter_mostra_tudo'>
                                    <div className='div_play'>
                                        <img src={item.foto} className={tabela == "artistas_populares" ? "img_artista" : 'albuns_img_mostrar'} />
                                    </div>
                                    <p>{item.nome}</p>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Mostar_tudo