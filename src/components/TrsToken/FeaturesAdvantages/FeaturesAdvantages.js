import React from "react";
import "./FeaturesAdvantages.css";

const Trade = () => {
  return (
    <section className="MuiPaper-root tjss305 MuiPaper-elevation0 bg-of-ftr">
      <div className="MuiContainer-root MuiContainer-maxWidthLg main-ftr">
        <div className="Features-wrap temp">
          <div className="content">
            <h2 className="title jss170">Decide, Direct, Deliver</h2>{" "}
            <div className="Features-content">
              <div className="item">
                <div className="jss170">
                  <div className="icon">
                    <img
                      src="https://just.network/_nuxt/img/f1.2c84b5a.png"
                      alt=""
                    />
                  </div>
                  Stake to Participate
                </div>{" "}
                <div>
                  By staking your TRS tokens, you're not just securing assets; you're gaining an active role in the heart of Trush governance. Dive into our governance and play a key role in influencing the platform's direction.
                </div>
              </div>{" "}
              <div className="item">
                <div className="jss170">
                  <div className="icon">
                    <img
                      src="https://just.network/_nuxt/img/f2.d250055.png"
                      alt=""
                    />
                  </div>
                  Vote with Weight
                </div>{" "}
                <div>
                  The weight of your vote is directly tied to your TRS token stake. It's a system that rewards commitment, ensuring that those who are deeply invested in our blockchain have the power to guide its evolution
                </div>
              </div>{" "}
              <div className="item">
                <div className="jss170">
                  <div className="icon">
                    <img
                      src="https://just.network/_nuxt/img/f3.e3a7a41.png"
                      alt=""
                    />
                  </div>
                  Propose & Transform
                </div>{" "}
                <div>
                  Your creativity and insights are invaluable. With TRS, you can propose transformative changes to the network, driving its growth and steering its technological journey. Every token holder has the potential to be a catalyst!
                </div>
              </div>{" "}
              <div className="item">
                <div className="jss170">
                  <div className="icon">
                    <img
                      src="https://just.network/_nuxt/img/f4.952a9c7.png"
                      alt=""
                    />
                  </div>
                  Rewards & Representation
                </div>{" "}
                <div>
                  Staking TRS isn't just a passive act; it's a partnership. By securing our network, you play a pivotal role in its stability and growth. And in return? You're rewarded not just with returns, but with representation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trade;
