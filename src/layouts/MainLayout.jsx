import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <h3>To do app</h3>
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout