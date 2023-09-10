import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/Styles/sass/components/_thumb.scss";

const Thumb = (props) => {
  const { id, image, title } = props;
  return (
    <div className="thumb">
      <NavLink to={`/logement/${id}`}>
        <img src={image} alt="" />
        <div className="container">
          <div className="title-container">
            <h4>{title}</h4>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Thumb;
