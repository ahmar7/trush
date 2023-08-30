import React, { useState } from "react";
import "./Network.css";
const Network = () => {
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

  return (
    <section className="pMuiPaper-root pjss185 pMuiPaper-elevation0">
      <div className="pMuiContainer-root pMuiContainer-maxWidthLg">
        <div className="pjss186">
          <div className="pjss187">What defines Trush Network?</div>
          <div className="pjss188 jss170">
            The Trush Network Advantage: A Closer Look
          </div>
          <div className="pjss189">
            The Trush Network represents a new era in decentralized technology,
            balancing scalability, security, user-friendliness, and
            cost-effectiveness. Amid a rapidly evolving blockchain landscape, we
            remain dedicated to continuous innovation, eagerly anticipating the
            future challenges and opportunities on this exciting journey.
          </div>
        </div>
        <div className="pjss190">
          <div
            className={ToggleOne ? "pjss191 njss194" : "pjss191"}
            onClick={toggle1}
          >
            <div
              className={
                ToggleOne
                  ? "none jss170 pjss192 text-center"
                  : "jss170 pjss192 text-center"
              }
            >
              Pioneering Consensus: Trush Beacon Consensus
            </div>

            <img
              src="https://www.ankr.com/_next/static/images/planet-01fe9a9ba028162b4f8742fdb823c3e4.png"
              alt=""
            />

            <span className={ToggleOne ? "pjss193 block-display" : "pjss193"}>
              The Trush Beacon Consensus forms the backbone of Trush Network,
              amalgamating Proof of Stake and Proof of History for a robust,
              efficient mechanism. Our system processes over 50,000 transactions
              per second and ensures speedy node synchronization, reflecting our
              commitment to a more secure and scalable blockchain.
            </span>
            <button type="button" className="pjss195">
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
            </button>
          </div>
          <div
            className={ToggleTwo ? "pjss191 njss194" : "pjss191"}
            onClick={toggle2}
          >
            <div
              className={
                ToggleTwo
                  ? "none jss170 pjss192 text-center"
                  : "pjss192 jss170 text-center"
              }
            >
              Groundbreaking Interoperability Features
            </div>

            <img
              src="https://www.ankr.com/_next/static/images/item2-c79b92b665a03fe429ef96a679234636.png"
              alt=""
            />

            <span className={ToggleTwo ? "pjss193 block-display" : "pjss193"}>
              The Trush Network leaps beyond standard frameworks, introducing
              Global Instant Payment (GIP) for swift cross-border transactions,
              Trustless Interoperability Protocol (TIP) for seamless
              communication between blockchains, and Trush Universal Gateway
              (TUG) for easy access to diverse DeFi applications. These tools
              drastically enhance user experience and system functionality.
            </span>
            <button type="button" className="pjss195">
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
            </button>
          </div>
          <div
            className={ToggleThree ? "pjss191 njss194" : "pjss191"}
            onClick={toggle3}
          >
            <div
              className={
                ToggleThree
                  ? "none jss170 pjss192 text-center "
                  : "pjss192 jss170 text-center"
              }
            >
              Prioritizing Accessibility: User-Friendly Design
            </div>

            <img
              src="https://www.ankr.com/_next/static/images/item3-f5c3442a2d3bc78ee64d0da49b1e5631.png"
              alt=""
            />

            <span className={ToggleThree ? "pjss193 block-display" : "pjss193"}>
              Our user-centric design approach simplifies the adoption and
              application of blockchain technology. With fast transactions, low
              fees, community-driven governance, and EVM compatibility, Trush
              Network offers a comprehensive, accessible experience for
              developers and end-users.
            </span>
            <button type="button" className="pjss195">
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
