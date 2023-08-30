import React from "react";
import "../BuildDapps.css";
const Banner = (props) => {
  return (
    <section className="dapps-hero MuiPaper-root-170 bjss165 MuiPaper-elevation0-173">
      <div className="wrapper feature-banner">
        <div className="dapps-hero__content">
          <h1 className="main__title">{props.title}</h1>
          <p className="main__text">{props.description}</p>
          <a href={props.btnLink} className="button filled" target="_blank">
            <span>{props.btnText}</span>
          </a>
        </div>
        <div className="d3-img">
          <img src={props.bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
