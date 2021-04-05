import "./Navbar.css"
import { Link } from 'react-router-dom';

function NavBar(props){
    return (
        <nav className="bar container-fluid d-flex flex-row justify-content-around align-items-center border border-warning">
            <Link to='/'><img className="logo" src='https://i.imgur.com/uex7EOt.png' alt='homepage' /></Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Offers</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Register</Link>
        </nav>
    )
}

export default NavBar