import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Pesquisa from './pages/Pesquisa'
import Inscreva from './pages/Inscrevase'
import Login from './pages/Login'
import Add_musica from './pages/Add_musica'
import Mostar_tudo from './pages/Mostrar_tudo'
import Usuario from './pages/Usuario'
import Add_album from './pages/Add_album'
import Playlists from './pages/Playlist'

const paginas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/pesquisa', element: <Pesquisa /> },
  { path: '/inscrever', element: <Inscreva /> },
  { path: '/login', element: <Login /> },
  { path: '/add_musica', element: <Add_musica /> },
  { path: '/add_album', element: <Add_album /> },
  { path: '/selection/:tabela', element: <Mostar_tudo /> },
  { path: '/perfil/:id', element: <Usuario /> },
  { path: '/playlist', element: <Playlists /> },

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas} />,
)
