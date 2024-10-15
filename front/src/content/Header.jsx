import { Link } from 'react-router-dom'
import "../Header.css"
import { useEffect, useState } from 'react'
import axios from 'axios'

function Header() {
  const [user, setUser] = useState()

  const auto_login = async () => {
    if (localStorage.getItem("login")) {
      const user_local = JSON.parse(localStorage.getItem("login"))
      const login = await axios.post("http://localhost:6969/login", user_local)
      if (login.data) {
        setUser(user_local)
      } else {
        console.log("erro")
      }
    }
  }

  useEffect(() => { auto_login() }, [])

  return (
    <header className='header'>
      <Link to={"/"} className='spotfy'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fff" class="bi bi-spotify" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
        </svg>
      </Link>
      <div className='conteiner_header'>
        <Link to={"/"} className='btn_home'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
          </svg>
        </Link>
        <Link to={"/pesquisa"} className='procurar'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input type="text" className='input' />
        </Link>
      </div>
      <div className='conteiner_header'>
        {user ?
          (
            <>
              <Link><img src={user.foto} className='img_perfil' /></Link>
            </>
          )
          :
          (
            <>
              <Link to={"/inscrever"} className='btn_inscrever'>Inscreva-se</Link>
              <Link to={"/login"} className='btn_entrar'>Entrar</Link>
            </>
          )

        }
      </div>
    </header>
  )
}

export default Header