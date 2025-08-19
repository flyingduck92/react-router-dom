import { Outlet } from 'react-router-dom'
import { Navbar } from '../components'

function MainLayout() {
  return (
    <div>
      <h3>To do app</h3>
      <Navbar />
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout