import React from 'react'
import { Link } from 'react-router-dom'

export const LogoContainer = () => {
  return ( 
    <Link to="/" className="flex items-center">
        <img src="/logo.svg" alt="Logo" className="w-10 min-w-10 h-10 min-h-10 object-contain" />
    </Link> 
  )
}
