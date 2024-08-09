// navigation bar to be displayed on certain pages (tbd)

// main page (logo), user profile, ducks, cart (icon)
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="homenav">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="profilenav">
          <NavLink to={`/users/profile`}>Profile</NavLink>
        </div>
        <div className="profilenav">
          <NavLink to={`/users/inventory`}>Dux</NavLink>
        </div>
        <div className="profilenav">
          <NavLink to={`/ducks`}>Dux</NavLink>
        </div>
        <div className="cartnav">
          <NavLink to={`/cart`}>Cart</NavLink>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
