import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'


function Products() {
  return (
      <div>
          <input type={"search"} placeholder="Search Products..." />
          <nav>
              <NavLink to={"featured"}>Featured</NavLink>
              <NavLink to={"new"}>New Products</NavLink>
          </nav>
          <h1>Hello</h1>
          <Outlet/>
    </div>
  )
}

export default Products