import '../styles/NavBar.css'

import { NavLink, Outlet } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="title">
          <NavLink to={`/`}>Clayton Persinger</NavLink>
        </div>
        <div className="info">
          <NavLink to={`/about`}>About</NavLink>
          <NavLink to={`/projects`}>Projects</NavLink>
          {/* <NavLink to={`#`}>Blog</NavLink> */}
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar