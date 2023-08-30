import React from 'react';
import './Benefits.css'
import { Building, Scale, Feature } from "../../../utils/allImg";
const Benefits = () => {
    return (
      <section className="MuiPaper-root-178 MuiPaper-elevation0-181 benefits-section" style={{ "padding-top": "85px" }}>
        <div className="MuiContainer-root-271 MuiContainer-maxWidthLg-277" style={{ "padding-bottom": 80 }}>
          
          <h1 className="MuiTypography-root-281 jss373 MuiTypography-h1-286">
            Harness the Power of {/* */}
            <span className="jss374"> Blockchain Innovation</span>
          </h1>
          <div className="MuiBox-root-234 jss491 jss490 opacity-sub">
            As blockchain technology gains traction, Trush stands out with its remarkable growth prospects and innovative edge. Investors may become part of our trailblazing ecosystem.
          </div>
          <div className="MuiGrid-root-381 jss492 MuiGrid-container-382">
            <div className="MuiGrid-root-381 jss493 MuiGrid-item-383 MuiGrid-grid-sm-12-441 MuiGrid-grid-md-4-447">
              <div>
                <img
                  alt="Streamlined Building"
                  className="jss495"
                  src={Building}
                />
              </div>
              <h5 className="MuiTypography-root-281 jss494 MuiTypography-h5-290 jss170">
                Future's Blueprint
              </h5>
              <div className="MuiBox-root-234 jss503 jss498 benefits-text">
                With an array of state-of-the-art solutions, Trush's emphasis on interoperability and user-centric design offers a beacon of potential in the decentralized landscape.
              </div>
            </div>
            <div className="MuiGrid-root-381 jss493 MuiGrid-item-383 MuiGrid-grid-sm-12-441 MuiGrid-grid-md-4-447">
              <div>
                <img
                  alt="Enhanced Scalability"
                  className="jss495"
                  src={Scale}
                />
              </div>
              <h5 className="MuiTypography-root-281 jss494 MuiTypography-h5-290 jss170">
                Growth Prospects
              </h5>
              <div className="MuiBox-root-234 jss503 jss498 benefits-text">
                The blockchain market is rapidly expanding. As a leading player, Trush offers investors significant growth prospects, making it a compelling investment choice.
              </div>
            </div>
            <div className="MuiGrid-root-381 jss493 MuiGrid-item-383 MuiGrid-grid-sm-12-441 MuiGrid-grid-md-4-447">
              <div>
                <img
                  alt="Customizable Features"
                  className="jss495"
                  src={Feature}
                />
              </div>
              <h5 className="MuiTypography-root-281 jss494 MuiTypography-h5-290 jss170">
                Unique Position
              </h5>
              <div className="MuiBox-root-234 jss503 jss498 benefits-text">
                Trush's innovative consensus mechanism, robust security, and commitment to sustainability distinguish it in the blockchain space, making it a unique investment opportunity.
              </div>
            </div>
          </div>
          <div className="MuiBox-root-234 jss502 jss496">
            <div className="MuiGrid-root-381 MuiGrid-container-382">
              <div className="MuiGrid-root-381 MuiGrid-item-383 MuiGrid-grid-md-6-449">
                <h2 className="MuiTypography-root-281 jss497 MuiTypography-h2-287 jss170">
                  The Trush Edge
                </h2>
              </div>
              <div className="MuiGrid-root-381 MuiGrid-item-383 MuiGrid-grid-md-6-449">
                <div className="MuiBox-root-234 jss503 jss498 opacity-sub font-weight-bold text-center">
                  "By investing in Trush, you're choosing to be part of a network that's transforming blockchain technology and paving the way for a self-governed, decentralized future. With Trush, you're choosing to be part of the future."
                </div>
              </div>
            </div>
            <div className="MuiGrid-root-381 jss499 MuiGrid-container-382 MuiGrid-spacing-xs-2-405">
              <div className="MuiGrid-root-381 MuiGrid-item-383 MuiGrid-grid-xs-12-427 MuiGrid-grid-md-4-447">
                <div className="MuiBox-root-234 jss504 jss500 font-weight-bold">
                  <img
                    alt="Number of validators"
                    src="https://www.ankr.com/_next/static/images/validators-c061febdde3d9b0740f8aece13b68905.svg"
                  />
                  <span className="jss170">Up to 75 000 TPS</span>
                </div>
              </div>
              <div className="MuiGrid-root-381 MuiGrid-item-383 MuiGrid-grid-xs-12-427 MuiGrid-grid-md-4-447">
                <div className="MuiBox-root-234 jss505 jss500 font-weight-bold">
                  <img
                    alt="Transactions per second"
                    src="https://www.ankr.com/_next/static/images/transactions-fb4a5424f9b37ee7025cc4aecae5961c.svg"
                  />
                  <span className="jss170">$0.00001 Transaction Fees</span>
                </div>
              </div>
              <div className="MuiGrid-root-381 MuiGrid-item-383 MuiGrid-grid-xs-12-427 MuiGrid-grid-md-4-447">
                <div className="MuiBox-root-234 jss506 jss500 font-weight-bold">
                  <img
                    alt="RPC requests"
                    src="https://www.ankr.com/_next/static/images/requests-3e23b95e9dccdfa5b06d140cec8be97f.svg"
                  />
                  <span className="jss170">1.8s Transaction Finality</span>
                </div>
              </div>
            </div>
            <div className="MuiBox-root-234 jss507 jss501 opacity-sub">
              As the blockchain industry thrives, numerous layer 1 protocols jostle for superiority. Amid this crowded landscape, Trush stands as a beacon of innovation, demonstrating a unique blend of agility, security, and user-centric design that sets it apart.
            </div>
          </div>
        </div>
      </section>
    );
}

export default Benefits;
