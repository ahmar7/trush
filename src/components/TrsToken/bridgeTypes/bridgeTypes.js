import React from "react";
import "./bridgeTypes.css";
import T1 from "../../../assets/img/t1.webp";
import T2 from "../../../assets/img/t2.webp";
import T3 from "../../../assets/img/t3.webp";
const Protocol = () => {
  return (
    <section className="MuiPaper-root jss281 MuiPaper-elevation0 bridge-bg">
      <div className="MuiContainer-root MuiContainer-maxWidthLg text-center">
        <h2 className="jss170 header-title bridge-heading">
          Unveiling the Essence of TRS
        </h2>
        <div className="flex-bridge">
          <div className="single-bridge">
            <div className="bridge-ico">
              <img src={T1} alt="" />
            </div>
            <h1 className="sec-trs jss170">Trade & Pay</h1>
            <p className="bridge-para">
              In the dynamic world of DApps on the Trush network, TRS emerges as the keystone for transactions. Whether on a decentralized exchange, an NFT marketplace, or a lending protocol, the omnipresence of TRS ensures that users indulge in a smooth, integrated experience. Dive in!
            </p>
          </div>
          <div className="single-bridge">
            <div className="bridge-ico">
              <img src={T2} alt="" />
            </div>
            <h1 className="sec-trs jss170">Earn & Stake</h1>
            <p className="bridge-para">
              Beyond mere transactions, TRS thrives as the lifeblood of rewards & staking in the DApps ecosystem. From earning enticing rewards in prediction markets to staking in yield farming scenarios, TRS doesn't just sit in your wallet; it empowers, rewards, and multiplies.
            </p>
          </div>
          <div className="single-bridge">
            <div className="bridge-ico">
              <img src={T3} alt="" />
            </div>
            <h1 className="sec-trs jss170">Voice & Build</h1>
            <p className="bridge-para">
              The essence of TRS extends to the heart of decentralized governance. As a key player in the Trush universe, wield your TRS to influence decisions, shape the future of DApps, and be an integral part of a forward-thinking community. Your token, your voice, our shared journey.
            </p>
          </div>
        </div>
        <div className="cnct-btn">
          <a
            href="https://trush-foundation.gitbook.io/trush-network/"
            target="_blank"
            className="button brand"
          >
            <span className="font-weight-bold" style={{ color: "white" }}>
              Get TRS Token
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Protocol;
