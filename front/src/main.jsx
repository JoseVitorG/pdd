import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Pesquisa from './pages/Pesquisa'
import Inscreva from './pages/Inscrevase'
import Login from './pages/Login'
import Add_musica from './pages/Add_musica'
import Mostar_tudo from './pages/Mostrar_tudo'

const paginas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/pesquisa', element: <Pesquisa /> },
  { path: '/inscrever', element: <Inscreva /> },
  { path: '/login', element: <Login /> },
  { path: '/add_musica', element: <Add_musica /> },
  { path: '/selection/:tabela', element: <Mostar_tudo /> },

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas} />,
)
