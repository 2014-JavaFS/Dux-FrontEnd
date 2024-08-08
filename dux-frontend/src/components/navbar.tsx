// navigation bar to be displayed on certain pages (tbd)

// main page (logo), user profile, ducks, cart (icon)
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to={"/"}>Home </Link>
        <Link to={"/users/profile"}>Profile </Link>
        <Link to={"/users/inventory"}>myDux </Link>
        <Link to={"/ducks"}>allDux </Link>
        <Link to={"/cart"}>Cart </Link>
      </nav>

      <Outlet />
    </>
  );
}
