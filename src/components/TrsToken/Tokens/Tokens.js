import React from "react";
import "./Tokens.css";
import { Link } from "react-router-dom";
const Rewards = () => {
  return (
    <section className="MuiPaper-root jss281 MuiPaper-elevation0">
      <div className="MuiContainer-root MuiContainer-maxWidthLg main-tkn-wrapper">
        <div className="Tokens-wrap">
          <div className="content">
            <h2 className="jss170">Power, Utility, & Governance</h2>{" "}
            <div className="Tokens-content">
              <div className="item">
                <div>
                  <div className="desc">
                    <h3 className="primary-text">
                      Unpacking TRS
                    </h3>{" "}
                    <p>
                      TRS token anchors Trush Network's security and governance. Validators back network stability by staking TRS, while holders enjoy voting rights, shaping network growth. This duality boosts decentralization and fosters active user engagement.
                    </p>{" "}
                    <a className="njss175 button filled btn-token" href="https://trush-foundation.gitbook.io/trush-network/trs-token/trs-in-governance" target="_blank">
                      Learn more
                    </a>
                  </div>{" "}
                  <div className="info">
                    <div className="p1">
                      <div>
                        <img
                          src="https://just.network/_nuxt/img/token1.de7d622.svg"
                          alt=""
                        />{" "}
                        <span className="jss170">Security</span>
                      </div>{" "}
                      <p>
                        Staking TRS ensures network security and deters malicious behavior.
                      </p>
                    </div>{" "}
                    <div className="p1">
                      <div>
                        <img
                          src="https://just.network/_nuxt/img/token2.5ab51af.svg"
                          alt=""
                        />{" "}
                        <span className="jss170">Governance</span>
                      </div>{" "}
                      <p>
                        Governance rights offered to TRS holders empower them to influence network evolution.
                      </p>
                    </div>
                  </div>{" "}
                  <a href="https://justswap.network/" target="_blank">
                    Buy now
                  </a>
                </div>{" "}
                <div className="token-gov-coin-wrap">
                  {/*
                  <p>
                    <span>
                      JST is granted statutory status as authorized digital
                      currency and medium of exchange in the Commonwealth of
                      Dominica effective on October 7th 2022.
                    </span>{" "}
                    <a
                      href="https://dominica.gov.dm/images/documents/tron_DOC-20221009-WA0010.pdf"
                      target="_blank"
                    >
                      View Ordinance
                    </a>
                  </p>
                  */}
                </div>
              </div>{" "}
              <div className="item">
                <div>
                  <div className="desc">
                    <h3>Ecosystem Dynamo</h3>{" "}
                    <p>
                      TRS token powers Trush's ecosystem, driving transactions, fueling dApps, and ensuring value through burning. Its vital role in DeFi liquidity and cross-chain features highlight its vast utility.
                    </p>{" "}
                    <a className="njss175 button filled btn-token" href="https://trush-foundation.gitbook.io/trush-network/trs-token/overview-of-trush-token-usdtrs" target="_blank">
                      Learn more
                    </a>
                  </div>{" "}
                  <div className="info">
                    <div className="p1">
                      <div>
                        <img
                          src="https://just.network/_nuxt/img/token3.3f85443.svg"
                          alt=""
                        />{" "}
                        <span className="jss170">Utility</span>
                      </div>{" "}
                      <p>
                        The token boosts liquidity in DeFi, and its interoperability allows interactions with other blockchains.
                      </p>
                    </div>{" "}
                    <div className="p1">
                      <div>
                        <img
                          src="https://just.network/_nuxt/img/token4.c0f2ec1.svg"
                          alt=""
                        />{" "}
                        <span className="jss170">Value</span>
                      </div>{" "}
                      <p>
                        TRS is required for transactions, powers dApps, and maintains value through token burn.
                      </p>
                    </div>
                  </div>{" "}
                  <a href="https://just.tronscan.org/#/home" target="_blank">
                    Generate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
