import axios from "axios"
import { useEffect, useState } from "react"
import "../Login.css"
import { Link } from "react-router-dom"


function Login() {
    const [user, setUser] = useState({ nome: "", senha: "" })

    const auto_login = async () => {
        if (localStorage.getItem("login")) {
            const user_local = localStorage.getItem("login")
            const login = await axios.post("http://localhost:6969/login", JSON.parse(user_local))
            console.log(login.data)
            if (login.data) {
                console.log("logado")
                window.location.href = "http://localhost:5173/"
            } else {
                console.log("errp")
            }
        }
    }

    const logar = async () => {
        if (user.nome && user.senha != "") {
            const login = await axios.post("http://localhost:6969/login", user)
            console.log(login.data)
            if (login.data) {
                console.log("logado")
                localStorage.setItem("login", user)
                window.location.href = "http://localhost:5173/"
            } else {
                console.log("erro")
            }
        }
    }

    useEffect(() => { auto_login() }, [])

    return (
        <>
            <div className="total_login">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-spotify" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
                    </svg>
                </div>

                <div className="conteiner_login">
                    <label htmlFor="nome">Seu nome</label>
                    <input type="text" placeholder="Seu nome" id="nome" onChange={(e) => user.nome = e.target.value} className="input_login" />
                    <label htmlFor="senha">Sua senha</label>
                    <input type="text" placeholder="Sua senha" id="senha" onChange={(e) => user.senha = e.target.value} className="input_login" />
                </div>
                <div onClick={() => logar()} className="btn_login">Entrar</div>
                <div className="deitado">
                    <p>Não tem uma conta?</p> <Link to={"/inscrever"} className="link">Inscreva-se no Spotfy</Link>
                </div>
            </div>
        </>
    )

}

export default Login