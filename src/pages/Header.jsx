import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {
  const location = useLocation()
  return (
    <div className='h-[15vh] flex justify-center items-center text-bold text-xl italic'>
      <Link to="/personajes" className='p-4 bg-slate-300 rounded-xl text-4xl'>
      Personajes
      </Link> 
      {location.pathname.includes('/PersonajeDetail/') && (
        <span> 👈🏿 Volver</span>
      )}
      </div>
  )
}

export default Header