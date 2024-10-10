import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Pesquisa from './pages/Pesquisa'
import Inscreva from './pages/Inscrevase'

const paginas = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/pesquisa', element: <Pesquisa /> },
  { path: '/inscrever', element: <Inscreva /> },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={paginas} />,
)
