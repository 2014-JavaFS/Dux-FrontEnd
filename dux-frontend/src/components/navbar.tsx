// navigation bar to be displayed on certain pages (tbd)

// main page (logo), user profile, ducks, cart (icon)
import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to={`/users/profile`}>Profile</NavLink>
                <NavLink to={`/users/inventory`}>Dux</NavLink>
                <NavLink to='/users/cart'>Cart</NavLink>
            </nav>
        </>
    );
}