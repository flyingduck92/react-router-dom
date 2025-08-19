import { Link } from 'react-router-dom'
import { HiClipboardDocument, HiHome, HiMiniPencilSquare, HiMiniUserCircle, HiOutlineLockOpen, HiOutlinePencilSquare } from "react-icons/hi2"
import { useEffect, useState } from 'react'

function Navbar() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])


  const logoutHandler = () => {
    localStorage.clear()
    setLoggedIn(false)
  }

  return (
    <nav className='bg-sky-500 p-4 flex justify-start items-center gap-4'>
      <Link className='flex justify-center items-center gap-2 text-zinc-100 hover:text-sky-500 hover:font-bold hover:bg-zinc-100 px-3 py-2 rounded-lg transition-colors ease-in-out' to="/">
        <HiHome /> Home
      </Link>
      <Link className='flex justify-center items-center gap-2 text-zinc-100 hover:text-sky-500 hover:font-bold hover:bg-zinc-100 px-3 py-2 rounded-lg transition-colors ease-in-out' to="/detail/1">
        <HiClipboardDocument /> Detail
      </Link>
      <Link className='flex justify-center items-center gap-2 text-zinc-100 hover:text-sky-500 hover:font-bold hover:bg-zinc-100 px-3 py-2 rounded-lg transition-colors ease-in-out' to="/create">
        <HiOutlinePencilSquare />Create
      </Link>
      <Link className='flex justify-center items-center gap-2 text-zinc-100 hover:text-sky-500 hover:font-bold hover:bg-zinc-100 px-3 py-2 rounded-lg transition-colors ease-in-out' to="/update/1">
        <HiMiniPencilSquare /> Update
      </Link>
      <div>
        {!loggedIn ? (
          <Link className='flex justify-center items-center gap-2 text-zinc-100 hover:text-sky-500 hover:font-bold hover:bg-zinc-100 px-3 py-2 rounded-lg transition-colors ease-in-out' to="/auth/login">
            <HiMiniUserCircle /> Login
          </Link>
        ) : (
          <button
            onClick={logoutHandler}
            className="flex items-center gap-2 bg-red-500 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:bg-red-600 active:scale-95 transition-colors ease-in-out">
            <HiOutlineLockOpen />
            Logout
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar