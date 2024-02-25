import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-evenly bg-slate-950 w-[100vw] mx-auto'>
        <img src='https://imgs.search.brave.com/Nk1nSeuMRDy6743pcbET77YizstbzjsNyAJ_7bCH55A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L0hWekFwR0trSDZZ/TTF2VU85ek9vNWxK/QkM0LmpwZWc'
            className='w-[10%] h-[10%] rounded-full'
        />
        <p className='text-white'><Link to="/">Planets</Link></p>
    </div>
  )
}

export default NavBar