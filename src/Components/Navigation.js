import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
      <div>
          <nav>
              <NavLink to={""}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"user"}>Users</NavLink>
        <NavLink to={'seachParam'}>SeachParam</NavLink>
          </nav>
    </div>
  )
}

export default Navigation