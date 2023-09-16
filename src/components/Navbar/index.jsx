import "./styles.css"
/*import CartWidget from "../CartWidget/CartWidget.jsx";*/
import CartWidget from "./CartWidget";
import LogoWigdet from "./LogoWidget";
import { NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar">
        <Link to='/'>
            <LogoWigdet />
        </Link>

        <div className="Marcas">
            <NavLink to ={`/marca/DJI`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>DJI</NavLink>
            <NavLink to ={`/marca/Parrot`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Parrot</NavLink>
            <NavLink to ={`/marca/DEERC`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>DEERC</NavLink>
            
        </div>

        <CartWidget />

    </nav>);
}

export default Navbar;