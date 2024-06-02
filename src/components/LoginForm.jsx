import React from 'react'
import {useNavigate} from 'react-router-dom'
const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <form className='flex flex-col gap-4 text-black'>
        <input className='bg-white/70' type='text' placeholder='Username' />
        <input className='bg-white/70' type="password" name="password" id="password" placeholder='Password' />
        <button className='bg-blue-500 text-white' type='submit'>Login</button>
        <button onClick={()=> navigate('/chat')}>Bypass</button>
    </form>
  )
}

export default LoginForm