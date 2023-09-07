import Header from "../../layouts/Header";
import Banner from "../../components/Banner";
// import Cards from "../../components/Cards";
import { fetchAll } from "../../methods/";
import { Tlogement } from "../../types/logement";
import { useState, useEffect } from "react";

import "../../assets/Styles/sass/pages/_home.scss";
import Thumb from "../../components/thumb";
import Footer from "../../layouts/Footer";
export default function Home() {
  const [logements, setlogement] = useState<Tlogement[]>([]);

  const load = async () => {
    const alllogements = await fetchAll();
    if (alllogements) {
      setlogement(alllogements);
    } else {
      console.log("error to load lodgemnts");
    }
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <div className="home">
      <Header />
      <Banner title="Chez vous, partout et ailleurs" />
      <div className="card_wrapper">
        {logements.map((logement) => (
          <Thumb
            id={logement.id}
            image={logement.cover}
            title={logement.title}
            key={logement.id}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
