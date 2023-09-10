import { useEffect } from "react";
import {  useLoaderData } from "react-router-dom";
import * as methods from "../../methods";
import NOTFOUND from "../Not_found";
import Carousel from "../../components/carousel";
import Header from "../../layouts/Header";
import "../../assets/Styles/sass/pages/_logement.scss";
import Tag from "../../components/Tag";
import Details from "../../components/detail";
import Footer from "../../layouts/Footer";

const Logement = () => {
  const logement = useLoaderData();
  useEffect(() => {}, []);
  // if logement is not found
  if (!logement) return <NOTFOUND />;
  const rating = Number(logement.rating) || 0;

  return (
    <div className="logement">
      <Header />
      <main>
        <Carousel images={logement.pictures} />
        <div className="content">
          <div className="tags-title">
            <div className="title-location">
              <h2>{logement.title}</h2>
              <span>{logement.location}</span>
            </div>
            <div className="tags">
              {logement.tags.map((tag,index) => (
                <Tag tag={tag} key={index} />
              ))}
            </div>
          </div>
          <div className="profile-stars">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, index) => {
                const isActive = rating > index;
                return (
                  <svg
                    key={index}
                    className={isActive ? "active" : ""}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                );
              })}
            </div>
            <div className="profile">
              <div className="name">
                <div>{logement.host.name}</div>
              </div>
              <div className="photo">
                <img src={logement.host.picture} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="detail">
          <div className="decriptions">
            <Details name="Decription" decription={logement.description} />
          </div>
          <div className="equipements">
            <Details name="Équipements" list={logement.equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Logement;

export const loader = async ({ params }) => {
  const { id } = params;

  const data = await methods.find(id);
  return data;
};
