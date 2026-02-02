import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return <nav className="navbar">
        <div className=",avbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div classNaem="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar