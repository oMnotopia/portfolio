import '../styles/NavBar.css'

import About from './About'
import HomePage from './homePage'

import {NavLink, Outlet } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="title">
          {/* <NavLink to={`/`} >Clayton Persinger</NavLink> */}
          <a href="/">Clayton Persinger</a>
        </div>
        <div className="info">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          {/* <HashLink to="about" >About</HashLink>
          <NavLink to={`/projects`} >Projects</NavLink> */}
          {/* <NavLink to={`#`} >Blog</NavLink> */}
        </div>
      </nav>
      {/* <HomePage />
      <About /> */}
      {/* <Outlet /> */}
    </>
  )
}

export default NavBar