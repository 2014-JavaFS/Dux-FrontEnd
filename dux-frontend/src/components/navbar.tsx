// navigation bar to be displayed on certain pages (tbd)

// main page (logo), user profile, ducks, cart (icon)
import { NavLink } from "react-router-dom";
import '../styles.css';

export default function Navbar(){
    return(
        <>
            <nav className= "navbar">
                <div className = "homenav">
                <NavLink to='/'>Home</NavLink>
                </div>
                <NavLink to={`/users/profile`}>Profile</NavLink>
                <div className="profilenav">
                <NavLink to={`/users/inventory`}>Dux</NavLink>
                </div>
                <div className = "cartnav">
                <NavLink to='/users/cart'>Cart</NavLink>
                </div>
            </nav>
        </>
    );
}