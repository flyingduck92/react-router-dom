import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <h3>To do app</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        <Link to="/detail/1">Detail</Link>
        <Link to="/update/1">Update</Link>
        <Link to="/auth/login">Login</Link>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default MainLayout