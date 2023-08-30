import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
      <section className="MuiPaper-root-175 branBanner MuiPaper-elevation0-178">
        <div className="MuiContainer-root-228 inner-banner MuiContainer-maxWidthLg-234">
          <div className="banner-max ">
            <h2 className="MuiTypography-root-236 main-brand banner1608 jss1703 jss1704 MuiTypography-h2-242 jss170">
              Trush Brand Essentials
            </h2>
            <p className="MuiTypography-root-236  banner1609 jss1703 jss1704 MuiTypography-body1-238">
              Delve into our comprehensive guide filled with vital insights on the utilization of Trush's distinctive brand elements.
            </p>
          </div>
          <div className="jss1700">
            <a href="https://trush-foundation.gitbook.io/trush-network/" target="_blank" className="button brand">
              <span className="font-weight-bold" style={{ color: "white" }}>Access Brandbook</span>
            </a>
          </div>
        </div>
      </section>
    );
}

export default Banner;
