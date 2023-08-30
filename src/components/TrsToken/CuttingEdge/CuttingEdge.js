import React from "react";
import "./CuttingEdge.css";
import { Link } from "react-router-dom";
const CuttingEdge = () => {
  return (
    <section className="MuiPaper-root jss281 MuiPaper-elevation0" style={{ "padding-bottom": "100px" }}>
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div className="home-section home-features-section">
          <div className="containerr">
            <div className="title-row t-center">
              <h2 className="jss170">Explore Beyond TRS</h2>{" "}
            </div>
            <div className="columns">
              <div className="column-50">
                <Link to="/features/decentralized-applications-dapps-on-trush" className="feature-box">
                  <a
                    className="feature-content column-padded-around slightly-rounded-box"
                    href="/privacy-protocol"
                  >
                    <article>
                      <span
                        className="feature-icon feature-icon-1"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <img
                          className="tala"
                          src="https://pivx.org/build/images/content/img_privacy.png"
                          alt="Zero Knowledge Privacy"
                        />
                      </span>
                      <span
                        className="feature-text"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <span className="feature-text-title jss170">
                          Unleashing dApp Power
                        </span>
                        <span className="feature-text-paragraph t-white">
                          Dive into the world of dApps with Trush! Unlock powerful decentralized applications, shaping the future of online interactions.
                        </span>
                        <span className="purple-icon-link jss170">
                          Learn more
                          <span className="link-icon link-icon-suffix">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path d="M23.328 16.707L13.121 26.914a.5.5 0 01-.707 0l-2.828-2.828a.5.5 0 010-.707L16.964 16 9.586 8.621a.5.5 0 010-.707l2.828-2.828a.5.5 0 01.707 0l10.207 10.207a1 1 0 010 1.414z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </article>
                  </a>
                </Link>
              </div>
              <div className="column-50">
                <Link to="/features/trush-beacon-consensus-redefining-blockchain-consensus" className="feature-box">
                  <a
                    className="feature-content column-padded-around slightly-rounded-box"
                    href="/proof-of-stake"
                  >
                    <article>
                      <span
                        className="feature-icon feature-icon-2"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <img
                          src="https://pivx.org/build/images/content/img_pos.png"
                          alt="Advanced Proof of Stake"
                        />
                      </span>
                      <span
                        className="feature-text"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <span className="feature-text-title t-white jss170">
                          Trust in Trush Consensus
                        </span>
                        <span className="feature-text-paragraph t-white">
                          A harmonious blend of speed, security, and sustainability. Say hello to the future of decentralized consensus!
                        </span>
                        <span className="purple-icon-link jss170">
                          Learn more
                          <span className="link-icon link-icon-suffix">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path d="M23.328 16.707L13.121 26.914a.5.5 0 01-.707 0l-2.828-2.828a.5.5 0 010-.707L16.964 16 9.586 8.621a.5.5 0 010-.707l2.828-2.828a.5.5 0 01.707 0l10.207 10.207a1 1 0 010 1.414z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </article>
                  </a>
                </Link>
              </div>
              <div className="column-50">
                <Link to="/features/trush-in-decentralized-finance-defi" className="feature-box">
                  <a
                    className="feature-content column-padded-around slightly-rounded-box"
                    href="/masternodes"
                  >
                    <article>
                      <span
                        className="feature-icon feature-icon-3"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <img
                          src="https://pivx.org/build/images/content/img_masternodes.png"
                          alt="Masternodes"
                        />
                      </span>
                      <span
                        className="feature-text"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <span className="feature-text-title t-white jss170">
                          Revolutionizing DeFi
                        </span>
                        <span className="feature-text-paragraph t-white">
                          Unlock the potential of DeFi on Trush! Empower your finances with decentralized, trustless, and borderless financial services.
                        </span>
                        <span className="purple-icon-link jss170">
                          Learn more
                          <span className="link-icon link-icon-suffix">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path d="M23.328 16.707L13.121 26.914a.5.5 0 01-.707 0l-2.828-2.828a.5.5 0 010-.707L16.964 16 9.586 8.621a.5.5 0 010-.707l2.828-2.828a.5.5 0 01.707 0l10.207 10.207a1 1 0 010 1.414z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </article>
                  </a>
                </Link>
              </div>
              <div className="column-50">
                <Link to="/features/beyond-performance-the-sustainability-focus-of-trush-network" className="feature-box">
                  <a
                    className="feature-content column-padded-around slightly-rounded-box"
                    href="/cold-staking"
                  >
                    <article>
                      <span
                        className="feature-icon feature-icon-4"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <img
                          src="https://pivx.org/build/images/content/img_cold_staking.png"
                          alt="Cold Staking"
                        />
                      </span>
                      <span
                        className="feature-text"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <span className="feature-text-title t-white jss170">
                          Eco-Friendly Blockchain
                        </span>
                        <span className="feature-text-paragraph t-white">
                          Greening the blockchain! Trush commits to a sustainable future, optimizing energy and championing renewable sources.
                        </span>
                        <span className="purple-icon-link jss170">
                          Learn more
                          <span className="link-icon link-icon-suffix">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path d="M23.328 16.707L13.121 26.914a.5.5 0 01-.707 0l-2.828-2.828a.5.5 0 010-.707L16.964 16 9.586 8.621a.5.5 0 010-.707l2.828-2.828a.5.5 0 01.707 0l10.207 10.207a1 1 0 010 1.414z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </article>
                  </a>
                </Link>
              </div>
              <div className="column-50">
                <Link to="/features/trush-and-the-web-3.0-landscape" className="feature-box">
                  <a
                    className="feature-content column-padded-around slightly-rounded-box"
                    href="/governance"
                  >
                    <article>
                      <span
                        className="feature-icon feature-icon-5"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <img
                          src="https://pivx.org/build/images/content/img_governance.png"
                          alt="Decentralized Governance"
                        />
                      </span>
                      <span
                        className="feature-text"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <span className="feature-text-title t-white jss170">
                          Pioneering Web 3.0 Era
                        </span>
                        <span className="feature-text-paragraph t-white">
                          Step into Web3.0 with Trush. Revolutionizing online experiences, ensuring data privacy and user control like never before.
                        </span>
                        <span className="purple-icon-link jss170">
                          Learn more
                          <span className="link-icon link-icon-suffix">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path d="M23.328 16.707L13.121 26.914a.5.5 0 01-.707 0l-2.828-2.828a.5.5 0 010-.707L16.964 16 9.586 8.621a.5.5 0 010-.707l2.828-2.828a.5.5 0 01.707 0l10.207 10.207a1 1 0 010 1.414z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </article>
                  </a>
                </Link>
              </div>
              <div className="column-50">
                <Link to="/features/cross-chain-interoperability-with-trush" className="feature-box">
                  <a
                    className="feature-content column-padded-around slightly-rounded-box"
                    href="/economics"
                  >
                    <article>
                      <span
                        className="feature-icon feature-icon-6"
                        style={{
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <img
                          src="https://pivx.org/build/images/content/img_economics.png"
                          alt="Sustainable Economics"
                        />
                      </span>
                      <span
                        className="feature-text"
                        style={{ opacity: 1, visibility: "inherit" }}
                      >
                        <span className="feature-text-title t-white jss170">
                          Seamless Cross-Chain Ops
                        </span>
                        <span className="feature-text-paragraph t-white">
                          Redefining boundaries with Trush's cross-chain capabilities! Craft seamless experiences across diverse blockchain ecosystems.
                        </span>
                        <span className="purple-icon-link jss170">
                          Learn more
                          <span className="link-icon link-icon-suffix">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path d="M23.328 16.707L13.121 26.914a.5.5 0 01-.707 0l-2.828-2.828a.5.5 0 010-.707L16.964 16 9.586 8.621a.5.5 0 010-.707l2.828-2.828a.5.5 0 01.707 0l10.207 10.207a1 1 0 010 1.414z" />
                            </svg>
                          </span>
                        </span>
                      </span>
                    </article>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuttingEdge;
