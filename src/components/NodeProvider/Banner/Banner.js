import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="MuiPaper-root-new bjss165 MuiPaper-elevation0-173">
      <div className="MuiContainer-root-223 MuiContainer-maxWidthLg-229">
        <h1 className="MuiTypography-root-231 bjss166 MuiTypography-h1-236">
          Become a
          <br />
          <span className="jss170">Trush Node Provider</span>
        </h1>
        <h2 className="MuiTypography-root-231 bjss168 MuiTypography-h2-237 opacity-sub">
          Embark on this rewarding journey, contribute to the blockchain revolution, and earn incentives!
        </h2>
        
        <div className="button-sequence">
          <a className="njss175 button filled" href="#">
            Use Trush Servers
          </a>

          <a className="MuiButtonBase-root-263 MuiButton-contained-244 btn-transparent MuiButton-disableElevation-247" href="https://trush-foundation.gitbook.io/trush-network/node-provider/requirements-for-being-a-node-provider#use-your-own-hardware" target="_blank" style={{ height: 48 }}>
            Use Your Hardware
          </a>
        </div>  

      </div>
    </section>
  );
};

export default Banner;
