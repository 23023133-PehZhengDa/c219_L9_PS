import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src="https://sgwiki.com/images/thumb/8/80/Republic_Polytechnic_Logo.jpg/300px-Republic_Polytechnic_Logo.jpg"
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={getClass}>
          About
        </NavLink>
        <NavLink to="/categories" className={getClass}>
          Categories
        </NavLink>
        <NavLink to="/register" className={getClass}>
          Register
        </NavLink>
      </nav>
    </header>
  );
}
