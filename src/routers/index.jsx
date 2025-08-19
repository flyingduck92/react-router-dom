import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'


const routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/create',
        element: <Create />
      },
      {
        path: '/detail/:id',
        element: <Detail />
      },
      {
        path: '/update/:id',
        element: <Update />
      }
    ]
  },
  {
    path: '/auth/login',
    element: <Login />
  }
])

export default routers