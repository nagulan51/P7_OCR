import logo from "../../assets/images/LOGO.svg";
import "../../assets/Styles/sass/layouts/_header.scss";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo_container">
          <img src={logo} alt="logo casa" className="logo" />
        </div>
        <div className="menu_items_container">
          <ul>
            <li>
              <NavLink
                to="/"
                className={(link) => (link.isActive ? "active" : "")}
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(link) => (link.isActive ? "active" : "")}
              >
                A Propos
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
