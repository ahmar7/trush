import React from "react";
import "./Banner.css";
import "../Ambassador.css";
const Banner = () => {
  return (
    <section className="MuiPaper-root-new bjss165 MuiPaper-elevation0-173">
      <div className="MuiContainer-root-223 MuiContainer-maxWidthLg-229">
        <h1 className="MuiTypography-root-231 bjss166 MuiTypography-h1-236">
          Become a
          <br />
          <span className="jss170">Trush Ambassador</span>
        </h1>
        <h2 className="MuiTypography-root-231 bjss168 MuiTypography-h2-237 opacity-sub">
          Ignite global change with Trush and enjoy unparalleled perks & rewards!
        </h2>
        
        <a className="njss175 button filled btn-center" href="#" style={{ width: 150 }}>
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default Banner;
