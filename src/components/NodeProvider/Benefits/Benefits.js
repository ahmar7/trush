import React, { useState } from "react";
import "./Benefits.css";
const Benefits = () => {
  const [ToggleOne, setToggleOne] = useState(false);
  const [ToggleTwo, setToggleTwo] = useState(false);
  const [ToggleThree, setToggleThree] = useState(false);
  const [ToggleFour, setToggleFour] = useState(false);
  let toggle1 = () => {
    if (ToggleOne === false) {
      setToggleOne(true);
    } else {
      setToggleOne(false);
    }
  };
  let toggle2 = () => {
    if (ToggleTwo === false) {
      setToggleTwo(true);
    } else {
      setToggleTwo(false);
    }
  };
  let toggle3 = () => {
    if (ToggleThree === false) {
      setToggleThree(true);
    } else {
      setToggleThree(false);
    }
  };
  let toggle4 = () => {
    if (ToggleFour === false) {
      setToggleFour(true);
    } else {
      setToggleFour(false);
    }
  };

  return (
    <section className="MuiPaper-root njss185 MuiPaper-elevation0">
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div className="njss186">
          <div className="njss187">
            <div className="njss190">
              <div className="njss189">Distinguishing Validator Nodes</div>
            </div>
            <div className="njss191">
              Validator Nodes stand apart from regular (delegator) nodes in the
              Trush network due to their augmented responsibilities and
              associated rewards. Tasked with the pivotal job of transaction
              validation and block creation, they act as gatekeepers, ensuring
              the authenticity and integrity of all transactions. These nodes
              also bear the responsibility of proposing these validated blocks
              to be added to the blockchain, thereby directly contributing to
              the network's growth. Given their heightened role, Validator Nodes
              receive increased rewards as compensation, making them a rewarding
              choice for participants in the network.
            </div>
            <img
              className="njss192"
              src="https://www.ankr.com/_next/static/images/image1-b69bdf326686bb4e89849839331c0bc4.png"
              alt=""
            />
          </div>
          <div
            className={ToggleOne ? "njss188 njss194" : "njss188"}
            onClick={toggle1}
          >
            <div
              className={ToggleOne ? "none njss190 jss170" : "njss190 jss170"}
            >
              The Crucial Role in Network Security
            </div>

            <span className={ToggleOne ? "njss191 block-display" : "njss191"}>
              Validator Nodes play a key role in maintaining the network's
              security. They continually verify transaction authenticity, making
              the network resistant to fraudulent activities and double-spending
              attempts. In Trush's Proof of Stake mechanism, Validator Nodes
              "stake" tokens, discouraging dishonest behavior, as misconduct
              could result in loss of these tokens, thereby strengthening the
              network's security.
            </span>

            <div className="njss193">
              <svg
                className="cross"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#356DF3"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                className="plus"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M12 19V5"
                  stroke="#356DF3"
                  strokeWidth={2}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className={ToggleTwo ? "njss188 njss194" : "njss188"}
            onClick={toggle2}
          >
            <div
              className={ToggleTwo ? "none njss190 jss170" : "njss190 jss170"}
            >
              Active Role in Network Governance
            </div>
            <span className={ToggleTwo ? "njss191 block-display" : "njss191"}>
              Validator Nodes actively contribute to Trush's network governance.
              They can propose changes or vote on network parameter proposals,
              making them instrumental in shaping the network's development and
              evolution. By staking Trush tokens and running a Validator Node,
              participants can engage actively within this dynamic ecosystem.
            </span>
            <div className="njss193">
              <svg
                className="cross"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#356DF3"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                className="plus"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M12 19V5"
                  stroke="#356DF3"
                  strokeWidth={2}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className={ToggleThree ? "njss188 njss194" : "njss188"}
            onClick={toggle3}
          >
            <div
              className={ToggleThree ? "none njss190 jss170" : "njss190 jss170"}
            >
              Claiming Rewards
            </div>
            <span className={ToggleThree ? "njss191 block-display" : "njss191"}>
              After distribution, node providers need to claim their rewards,
              typically through a dedicated interface such as a wallet or
              dashboard. For Trush providers, rewards are sent directly to their
              Web3 wallets, from which they can be reinvested, held for
              potential appreciation, or converted into other cryptocurrencies
              or fiat money.
            </span>
            <div className="njss193">
              <svg
                className="cross"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#356DF3"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                className="plus"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M12 19V5"
                  stroke="#356DF3"
                  strokeWidth={2}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className={ToggleFour ? "njss188 njss194" : "njss188"}
            onClick={toggle4}
          >
            <div
              className={ToggleFour ? "none njss190 jss170" : "njss190 jss170"}
            >
              Security Best Practices
            </div>
            <span className={ToggleFour ? "njss191 block-display" : "njss191"}>
              Ensuring node security is a continuous process involving regular
              maintenance, vigilance, and staying informed. Best practices
              include setting strong, unique passwords, using multi-factor
              authentication, securing data transmissions, using a hardware
              wallet for staking assets, maintaining regular backups, and
              keeping updated on the latest in blockchain and cybersecurity. By
              adhering to these measures, providers can protect their nodes,
              their assets, and the entire Trush network.
            </span>
            <div className="njss193">
              <svg
                className="cross"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#356DF3"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <svg
                className="plus"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12H5M12 19V5"
                  stroke="#356DF3"
                  strokeWidth={2}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="njss187">
            <div className="njss190">
              <div className="njss189">Earning and Rewards</div>
            </div>
            <div className="njss191">
              Node providers in the Trush network earn rewards primarily through
              transaction validation, receiving TRS tokens for validating blocks
              of transactions. They also collect fees from network users for
              consumed resources. Rewards are calculated and distributed after
              each block validation, and are sent directly to the provider's
              associated Web3 wallet, offering potential for reinvestment,
              holding, or conversion.
            </div>
            <img
              className="njss192"
              src="https://www.ankr.com/_next/static/images/image2-f4af0d0b2b447dd41ba0c0e6f4c3d41f.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
