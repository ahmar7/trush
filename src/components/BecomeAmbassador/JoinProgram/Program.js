import React from "react";
import "./Program.css";
const Program = () => {
  return (
    <section className="MuiPaper-root-298 bjss289 MuiPaper-elevation0-301">
      <div className="MuiContainer-root-351 MuiContainer-maxWidthLg-357">
        <h2 className="MuiTypography-root-359 bjss290 MuiTypography-h2-365 jss170">
          Join Trush's Ambassador program
        </h2>
        <div className="MuiGrid-root-389 bjss291 MuiGrid-container-390">
          <div className="MuiGrid-root-389 MuiGrid-item-391 MuiGrid-grid-xs-12-435 MuiGrid-grid-sm-6-443">
            <div className="MuiBox-root-492 bjss493 bjss292">
              <img
                className="bjss293"
                src="https://www.ankr.com/_next/static/images/join@1x-6339d787e124a1f0717889cf3e35e242.png"
                alt="Join Ankr’s Ambassador program"
              />
            </div>
          </div>
          <div className="MuiGrid-root-389 MuiGrid-item-391 MuiGrid-grid-xs-12-435 MuiGrid-grid-sm-6-443">
            <div className="MuiBox-root-492 bjss494 bjss294">
              <h5 className="MuiTypography-root-359 bjss295 MuiTypography-h5-368 font-weight-bold">
                <i>We are seeking passionate ambassadors to promote our vision and mission in the greater blockchain ecosystem.</i>
              </h5>
              <p className="MuiTypography-root-359 bjss296 MuiTypography-body1-361">
                Trush is revolutionizing the blockchain sphere with our unique blend of cutting-edge technology and user-centric approach. With the Trush Beacon Consensus (TBC), Ethereum Virtual Machine compatibility, and impressive transaction speeds, we're pushing for a future where blockchain technology is universally efficient and accessible.
              </p>
              <p className="MuiTypography-root-359 bjss296 MuiTypography-body1-361">
                However, to realize this vision, we need passionate ambassadors like you. As part of the Trush Ambassador Program, you'll play a crucial role in sharing our mission with the wider community, promoting a platform that values innovation, efficiency, and decentralization. Join us in shaping the future of blockchain technology, making Trush the go-to platform for developers and users worldwide.
              </p>  
              <a className="njss175 button filled btn-join-program" href="#" style={{ width: 150, "margin-top": 30 }}>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
