import React from "react";
import "./Utilization.css";
const Utilization = () => {
  return (
    <section
      className="pMuiPaper-root pjss196 pMuiPaper-elevation0"
      id="utilization"
    >
      <div className="pMuiContainer-root pMuiContainer-maxWidthLg">
        <div className="pjss198">Utilization</div>
        <div className="pjss197 jss170">Who Benefits From Trush Network?</div>
        <div className="pjss200">
          <div className="pjss203">
            <div className="pjss201 jss170">Stakeholders</div>
            <div className="pjss202">
              Trush Network is a versatile blockchain platform offering a myriad
              of solutions aimed at improving the blockchain ecosystem. The
              network's revolutionary technology and unique features are poised
              to bring value to a broad range of stakeholders.
            </div>
          </div>
          <div className="pjss206">How will you use Ankr Protocol?</div>
          <div className="pjss204">
            <div className="pjss205">
              Decentralized Finance (DeFi) <br /> {/* */}Protocols{/* */}{" "}
              <img
                src="https://www.ankr.com/_next/static/images/item1-28583fe46cb96a5b7e113c14e7f1e74e.png"
                alt=""
              />
            </div>
            <div className="pjss205">
              Cross-Chain
              <br /> {/* */}Aggregators{/* */}{" "}
              <img
                src="https://www.ankr.com/_next/static/images/item2-4632cfb17571d4ad11cff0149e9e7a2a.png"
                alt=""
              />
            </div>
            <div className="pjss205">
              Government and Public Sector
              <br /> {/* */}Organizations{/* */}{" "}
              <img
                src="https://www.ankr.com/_next/static/images/item3-23f1d9a08d50cdf7f7ed6f95358f7065.png"
                alt=""
              />
            </div>
            <div className="pjss205">
              Supply Chain
              <br /> {/* */}Management Systems{/* */}{" "}
              <img
                src="https://www.ankr.com/_next/static/images/item4-3426b06007310cf3ed5c7f81829b1755.png"
                alt=""
              />
            </div>
            <div className="pjss205">
              Decentralized Autonomous <br /> {/* */}Organizations (DAOs)
              {/* */}{" "}
              <img
                src="https://www.ankr.com/_next/static/images/item5-a022dc3b80fb8e9a0e4b8d1fb617ed61.png"
                alt=""
              />
            </div>
            <div className="pjss205">
              Internet of Things <br /> {/* */}(IoT) Applications{/* */}{" "}
              <img
                src="https://www.ankr.com/_next/static/images/item6-8123fbb0db7899ea515f7fa762454cf6.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pjss199">
          <div className="pjss207">
            <button className="pjss211">Coming Soon</button>
            <div className="pjss208 jss170">Node Providers</div>
            <div className="pjss209">
              Node Providers are the linchpin of Trush, running the nodes that
              uphold the blockchain network. Serving as Validators in Trush's
              Proof of Stake consensus model, they stake Trush tokens to
              validate transactions, incentivized by potential losses for
              dishonest actions. They secure the network by verifying legitimate
              activities and promote decentralization by operating
              independently, making them key players in driving the blockchain
              revolution and Trush's future.
            </div>
            <img
              className="pjss210"
              src="https://www.ankr.com/_next/static/images/nodes-161e5167cfeafdc297a66f9f97d059e5.png"
              alt="nodes"
            />
          </div>
          <div className="pjss212">
            <button className="pjss211">Coming Soon</button>
            <div className="pjss213 jss170">Stakers</div>
            <div className="pjss214">
              Staking in Trush involves committing Trush tokens as collateral to
              support the network and potentially earn rewards. Participants
              need Trush tokens, a compatible wallet, and a stable internet
              connection. The process includes transferring tokens to the
              wallet, initiating staking, and locking tokens for a specified
              period. Rewards are proportionate to the stake and contingent on
              the honesty and effectiveness of validators. Staking offers an
              opportunity to contribute actively to the network's operations,
              security, and rewards.
            </div>
            {/*
              <a
                className="pMuiButtonBase-root pMuiButton-root pMuiButton-contained pjss215 pMuiButton-containedPrimary pMuiButton-disableElevation"
                tabIndex={0}
                aria-disabled="false"
                href="https://www.ankr.com/staking/ankr-stake/stake/"
                role="link"
                target="_blank"
                rel="noreferrer"
              >
                <span className="pMuiButton-label">Stake Now</span>
              </a>
              */}
            <img
              className="pjss216"
              src="https://www.ankr.com/_next/static/images/stakers-ac67cf551a9eb16cf1864cd4f4638fac.png"
              alt="stakers.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Utilization;
