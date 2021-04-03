import "./Navbar.css"

function NavBar(){
    return (
        <nav className="container-fluid d-flex flex-row justify-content-start align-items-center bg-dark border border-warning">
            <a><div className="nav-logo"></div></a>
            <a href=""><span>Home</span></a>
            <a href=""><span>About</span></a>
            <a href=""><span>Offers</span></a>
            <a href=""><span>profile</span></a>
        </nav>
    )
}

export default NavBar