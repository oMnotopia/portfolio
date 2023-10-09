import '../styles/NavBar.css'

import { Link, Outlet } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="title">
          <Link to={`/`}>Clayton Persinger</Link>
        </div>
        <div className="info">
          <Link to={`/about`}>About</Link>
          <Link to={`#`}>projects</Link>
          <Link to={`#`}>Blog</Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar