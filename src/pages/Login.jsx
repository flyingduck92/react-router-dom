/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { HiOutlineLockClosed } from "react-icons/hi2"
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/')
    } else {
      navigate('/auth/login')
    }
  }, [])

  const loginHandler = () => {
    navigate('/')
    const user = {
      username: 'sekti',
      email: 'admin@gmail.com'
    }
    localStorage.setItem('user', JSON.stringify(user))
  }

  return (
    <article>
      <h1>Login</h1>
      <button onClick={loginHandler} className="flex items-center gap-2 bg-sky-500 text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:bg-sky-600 active:scale-95 transition-colors ease-in-out cursor-pointer">
        <HiOutlineLockClosed className="text-lg" />
        Login
      </button>
    </article>
  )
}

export default Login