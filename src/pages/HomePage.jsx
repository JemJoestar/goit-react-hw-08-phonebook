import React from 'react'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      Welcome to <NavLink to="/contacts">Phone Book</NavLink>
    </div>
  )
}

export default HomePage
