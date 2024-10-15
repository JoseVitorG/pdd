import { useState } from "react"
import axios from "axios"
import "../cadastro.css"

function Inscreva() {
    const [data, setData] = useState({ nome: "", email: "", senha: "", foto: "" })


    const enviar = async () => {
        if (data.nome && data.senha && data.email && data.foto !== "") {
            const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
            if (gmailRegex.test(data.email)) {
                try {
                    const res = await axios.post("http://localhost:6969/inscrever", data)
                    localStorage.setItem("login", JSON.stringify(data))
                    window.location.href = "http://localhost:5173/"
                } catch (e) {
                    console.log(e)
                }
            } else {
                console.log("digite um email valido")
            }
        } else {
            console.log("diggita ai")
        }
    }

    return (
        <>
            <div className="conteiner_cadastro">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                </svg>
                <p className="titulo_inscreva">Se inscreva e comece a curtir</p>
                <div className="conteiner_em_pe">
                    <label htmlFor="nome" className="placehoder">Digite seu nome</label>
                    <input type="text" id="nome" className="input_inscrever" onChange={(e) => { data.nome = e.target.value }} />
                </div>
                <div className="conteiner_em_pe">
                    <label htmlFor="email" className="placehoder">Digite seu email</label>
                    <input type="text" id="email" className="input_inscrever" onChange={(e) => { data.email = e.target.value }} />
                </div>
                <div className="conteiner_em_pe">
                    <label htmlFor="senha" className="placehoder">Digite uma senha</label>
                    <input type="text" id="senha" className="input_inscrever" onChange={(e) => { data.senha = e.target.value }} />
                </div>
                <div className="conteiner_em_pe">
                    <label htmlFor="foto" className="placehoder">Adicione uma foto</label>
                    <input type="text" id="foto" className="input_inscrever" onChange={(e) => { data.foto = e.target.value }} />
                </div>
                <div className="botao_inscrever" onClick={() => enviar()}>Inscrever-se</div>
            </div>
        </>
    )
}

export default Inscreva