import React from "react";
import "./StartBuilding.css";
const StartBuilding = () => {
  return (
    <section className="main-building m5">
      <div className="wrapper">
        <div className="main-building__imgBlock">
          <img
            data-src="https://velas.com/assets/img/main/light/building-gradient.svg"
            data-theme-src="https://velas.com/assets/img/main/dark/building-gradient.svg"
            alt="building"
            className="main-building__decor lozad"
            src="https://velas.com/assets/img/main/light/building-gradient.svg"
            data-loaded="true"
          />
          <img
            data-src="https://velas.com/assets/img/main/light/building.webp"
            data-theme-src="https://velas.com/assets/img/main/dark/building.webp"
            data-rjs={2}
            alt="building"
            className="main-building__img lozad"
            src="https://velas.com/assets/img/main/light/building.webp"
            data-loaded="true"
          />
        </div>
        <div className="main-building__content jus-mb">
          <h2 className="main__title jss170 mbl-fer center-mb">
            Craft Your Vision with Trush
          </h2>
          <p className="main__text">
            Develop game-changing dApps, NFTs, and more using Trush's robust
            blockchain infrastructure. Enjoy the advantages of our active
            community, comprehensive resources, and generous support programs.
          </p>
          <a
            href="https://trush-foundation.gitbook.io/trush-network/"
            className="button filled"
            target="_blank"
          >
            <span>Start Building Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StartBuilding;
