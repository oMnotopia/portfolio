import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav id="nav-bar">
        <div className="title">
          <a href="/">Clayton Persinger</a>
        </div>
        <div className="info">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>  
    </nav>
  )
}

export default NavBar