import React from "react";
import "./CaseInfo.css";
const CaseInfo = () => {
  return (
    <section className="cases-info">
      <div className="wrapper">
        <div className="main-info__items">
          <a
            href="https://trush-foundation.gitbook.io/trush-network/architecture/trush-beacon-consensus"
            target="_blank"
            className="main-info__item"
          >
            <img
              data-src="https://velas.com/assets/img/main/light/info-1@2x.webp"
              data-theme-src="https://velas.com/assets/img/main/dark/info-1.webp"
              data-rjs={2}
              alt="info"
              className="main-info__itemImg lozad"
              width={370}
              height={370}
              data-rjs-processed="true"
              src="https://velas.com/assets/img/main/light/info-1@2x.webp"
              data-loaded="true"
            />
            <h2 className="main__title medium jss170">
              Trush Beacon Consensus
            </h2>
            <p className="main__text small text-center">
              Discover the future with TBC – our blend of PoS and PoH offers
              high performance, sustainability, and robust security. Build
              efficiently and securely on Trush's network.
            </p>
            <a
              href="https://trush-foundation.gitbook.io/trush-network/programmes/trush-usd10-million-grant-programme"
              className="main-arrow-link"
              target="_blank"
            >
              Learn more
              <svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.644 12.144 10.794 5H5.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V5.706l-7.144 7.15a.507.507 0 0 1-.712-.712z"
                  fill="#0C0C0C"
                />
              </svg>
            </a>
          </a>
          <a
            href="https://trush-foundation.gitbook.io/trush-network/solutions-and-technology/unleashing-the-potential-with-trush-virtual-machine-tvm"
            className="main-info__item"
            target="_blank"
          >
            <img
              data-src="https://velas.com/assets/img/main/light/info-2@2x.webp"
              data-theme-src="https://velas.com/assets/img/main/dark/info-2.webp"
              data-rjs={2}
              alt="info"
              className="main-info__itemImg lozad"
              width={370}
              height={370}
              data-rjs-processed="true"
              src="https://velas.com/assets/img/main/light/info-2@2x.webp"
              data-loaded="true"
            />
            <h2 className="main__title medium jss170">Trush Virtual Machine</h2>
            <p className="main__text small text-center">
              Harness the power of TVM, offering top-tier performance, ironclad
              security, and Ethereum compatibility for seamless dApp migration.
              TVM is your key to efficient dApp development.
            </p>
            <a
              href="https://trush-foundation.gitbook.io/trush-network/programmes/trush-usd10-million-grant-programme"
              className="main-arrow-link"
              target="_blank"
            >
              Learn more
              <svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.644 12.144 10.794 5H5.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V5.706l-7.144 7.15a.507.507 0 0 1-.712-.712z"
                  fill="#0C0C0C"
                />
              </svg>
            </a>
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://trush-foundation.gitbook.io/trush-network/programmes/trush-usd10-million-grant-programme"
            className="main-info__item"
          >
            <img
              data-src="https://velas.com/assets/img/main/light/info-3@2x.webp"
              data-theme-src="https://velas.com/assets/img/main/dark/info-3.webp"
              data-rjs={2}
              alt="info"
              className="main-info__itemImg lozad"
              width={370}
              height={370}
              data-rjs-processed="true"
              src="https://velas.com/assets/img/main/light/info-3@2x.webp"
              data-loaded="true"
            />
            <h2 className="main__title medium jss170">Trush Green Vision</h2>
            {/* and Opportunities */}
            <p className="main__text small text-center">
              Thrive in a network that values green practices. From rewarding renewable energy use to pioneering tree-planting projects, Trush invites you to be a catalyst for a sustainable future.
            </p>
            <a
              href="https://trush-foundation.gitbook.io/trush-network/sustainability"
              className="main-arrow-link"
              target="_blank"
            >
              Learn more
              <svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.644 12.144 10.794 5H5.5a.5.5 0 1 1 0-1H12a.5.5 0 0 1 .5.5V11a.5.5 0 0 1-1 0V5.706l-7.144 7.15a.507.507 0 0 1-.712-.712z"
                  fill="#0C0C0C"
                />
              </svg>
            </a>
          </a>
        </div>{" "}
      </div>
    </section>
  );
};

export default CaseInfo;
