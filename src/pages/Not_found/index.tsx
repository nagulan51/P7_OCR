import Header from "../../layouts/Header";
import "../../assets/Styles/sass/pages/_not_found.scss"
import { Link } from "react-router-dom";

export default function not_found() {
  return (
    <div className="not_found">
      <Header />
      <div className="main">
        <h1>404</h1>
        <p>Oups! La page que
          vous demandez n'existe pas.</p>

        <div className="link">

          <Link to={"/"}>
            Retourner sur la page d’accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
