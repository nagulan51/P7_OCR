import "../../assets/Styles/sass/layouts/_footer.scss";
import logo from "../../assets/images/LOGO-white.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}
