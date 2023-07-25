import logo from "../../assets/Images/LOGO.svg";
import "../../assets/Styles/sass/layouts/_header.scss";
export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo_container">
          <img src={logo} alt="logo casa" className="logo" />
        </div>
        <div className="menu_items_container">
          <ul>
            <li>Accueil</li>
            <li>A Propos</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
