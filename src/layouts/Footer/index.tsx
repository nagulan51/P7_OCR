import "../../assets/Styles/sass/layouts/_footer.scss";
import logo from "../../assets/images/LOGO-white.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}
