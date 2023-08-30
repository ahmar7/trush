import React from "react";
import TrushLogo from "../../../../assets/img/trush-logo-xs.png";
import EthLogo from "../../../../assets/img/ethereum-logo-landscape-black.png";
import PolkaLogo from "../../../../assets/img/Polkadot_Logo_Horizontal_Pink_Black.png";
import AdaLogo from "../../../../assets/img/Cardano-RGB_Logo-Full-Blue.png";
import "./CasesComparison.css";
const CasesComparison = () => {
  return (
    <section className="cases-comparison">
      <div className="wrapper">
        <div className="main-slider cases-page cases-page-slider">
          <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden swiper-pagination-disabled">
            <div
              className="custom-swiper-wrapper"
              id="swiper-wrapper-fbb1df212441a2f1"
              aria-live="polite"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 4"
                style={{ marginRight: "20px" }}
              >
                <div className="cases-comparison__item gradient-border velas">
                  <img
                    src={TrushLogo}
                    alt="logo"
                    className="cases-comparison__item-logo lozadz"
                    width={108}
                    height={30}
                    data-rjs-processed="true"
                    data-loaded="true"
                  />
                  <p className="cases-comparison__item-text">
                    Transaction Throughput:
                  </p>
                  <p className="cases-comparison__item-value">
                    Up to 75 000 TPS
                  </p>
                  <span className="cases-comparison__item-delimiter" />
                  <p className="cases-comparison__item-text">
                    Transaction Fee:
                  </p>
                  <p className="cases-comparison__item-value">$0.00001</p>
                  <span className="cases-comparison__item-delimiter" />
                  <p className="cases-comparison__item-text">
                    Transaction Finality:
                  </p>
                  <p className="cases-comparison__item-value">1.8 sec</p>
                </div>
              </div>
              <div
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="2 / 4"
                style={{ marginRight: "20px" }}
              >
                <div className="cases-comparison__item">
                  <img
                    src={EthLogo}
                    alt="logo"
                    className="cases-comparison__item-logo lozad"
                    width={189}
                    height={100}
                    data-rjs-processed="true"
                    data-loaded="true"
                  />
                  <p className="cases-comparison__item-text">
                    Transaction Throughput:
                  </p>
                  <p className="cases-comparison__item-value">25 TPS</p>
                  <span className="cases-comparison__item-delimiter" />
                  <p className="cases-comparison__item-text">
                    Transaction Fee:
                  </p>
                  <p className="cases-comparison__item-value" />
                  <p className="cases-comparison__item-value">$4.29</p>
                  <span className="cases-comparison__item-delimiter" />
                  <p className="cases-comparison__item-text">
                    Transaction Finality:
                  </p>
                  <p className="cases-comparison__item-value">15 mins</p>
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="3 / 4"
                style={{ marginRight: "20px" }}
              >
                <div className="cases-comparison__item">
                  <img
                    src={PolkaLogo}
                    alt="logo"
                    className="cases-comparison__item-logo lozad"
                    width={189}
                    height={100}
                    data-rjs-processed="true"
                    data-loaded="true"
                  />
                  <p className="cases-comparison__item-text">
                    Transaction Throughput:
                  </p>
                  <p className="cases-comparison__item-value">1000 TPS</p>
                  <span className="cases-comparison__item-delimiter" />
                  <p className="cases-comparison__item-text">
                    Transaction Fee:
                  </p>
                  <p className="cases-comparison__item-value">$0.10</p>
                  <span className="cases-comparison__item-delimiter" />
                  <p className="cases-comparison__item-text">
                    Transaction Finality:
                  </p>
                  <p className="cases-comparison__item-value">
                    12 secs to 1 minute
                  </p>
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="4 / 4"
                style={{ marginRight: "20px" }}
              >
                <div className="cases-comparison__item">
                  <img
                    src={AdaLogo}
                    alt="logo"
                    className="cases-comparison__item-logo lozad"
                    style={{ "width": "220px" }}
                    data-rjs-processed="true"
                    data-loaded="true"
                  />
                  <p className="cases-comparison__item-text">
                    Transaction Throughput:
                  </p>
                  <p className="cases-comparison__item-value">250 TPS</p>
                  <span className="cases-comparison__item-delimiter" />
                  <p className="cases-comparison__item-text">
                    Transaction Fee:
                  </p>
                  <p className="cases-comparison__item-value">$0.10</p>
                  <span className="cases-comparison__item-delimiter" />
                  <p className="cases-comparison__item-text">
                    Transaction Finality:
                  </p>
                  <p className="cases-comparison__item-value">5 to 10 mins</p>
                </div>
              </div>
            </div>
            <div className="swiper-pagination-custom" />
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesComparison;
