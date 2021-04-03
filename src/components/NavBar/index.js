import "./Navbar.css"

function NavBar(){
    return (
        <nav className="bar container-fluid d-flex flex-row justify-content-around align-items-center border border-warning">
            <a href=""><img className="nav-logo" src='https://i.imgur.com/uex7EOt.png' alt='homepage' /></a>
            <a href=""><span>Home</span></a>
            <a href=""><span>About</span></a>
            <a href=""><span>Offers</span></a>
            <a href=""><span>Register</span></a>
        </nav>
    )
}

export default NavBar