import '../styles/NavBar.css'


const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="title">
          <a href="/">Clayton Persinger</a>
        </div>
        <div className="info">
          <a href="/about">About</a>
          <a href="#">projects</a>
          <a href="#">Blog</a>
        </div>
      </nav>
    </>
  )
}

export default NavBar