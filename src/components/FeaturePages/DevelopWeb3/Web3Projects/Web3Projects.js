import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
const Projects = () => {
  let sliderData = [
    {
      img: "https://alephzero.org/storage/supply-chain-1668528260zzZku.svg",
      title: "Decentralized Web Services",
    },
    {
      img: "https://alephzero.org/storage/wallet-16685282612S46K.svg",
      title: "Decentralized Identity & Privacy",
    },
    {
      img: "https://alephzero.org/storage/database-1668528260aNWrV.svg",
      title: "P2P Transactions & Contracts",
    },
    {
      img: "https://alephzero.org/storage/asset-digitization-1668528260tTuhA.svg",
      title: "Decentralized Data Storage & Sharing",
    },
    {
      img: "https://alephzero.org/storage/notary-signatory-1668528260Ykb0A.svg",
      title: "EVM Compatibility",
    },
    {
      img: "https://alephzero.org/storage/public-documents-1668528260aop0X.svg",
      title: "Interoperability",
    },
  ];
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    delay: 0,
    vertical: true,
    slidesToShow: 5,
    centerMode: true,
    autoplay: true,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <section
      className="a0-mt--xxxxxxl a0-mt-md--xxxxxxxl web3-projects"
      data-scroll-id="web"
    >
      <div className="a0-container">
        <div className="a0-row | a0-align-items--center">
          <div
            className="a0-col-12 a0-col-md-6 a0-col-lg-5 aos-init aos-animate"
            data-aos="fade-right"
          >
            <h3 className="a0-headlines-1 | a0-line-title-bottom | a0-pb--m jss170">
              Shaping Web 3.0 with Trush
            </h3>
            <div className="a0-mt--m | a0-font-size--body-l">
              <p className="main__text opacity-tan">
                The Trush Network, a crucial pioneer in the Web 3.0 sphere, propels a safe, decentralized, and cross-chain digital landscape. Its Layer 1 blockchain protocol underpins numerous Web 3.0 solutions, stimulating innovation while preserving privacy and trust. From amplifying DApps and facilitating peer-to-peer transactions, to reimagining data storage and transfer, Trush reflects the transformative spirit of Web 3.0, fuelling its progress. By collaborating with a variety of blockchain platforms, Trush ensures uninterrupted data and asset flow, embodying Web 3.0's vision of an integrated digital realm.
              </p>
            </div>
             <a
              href="#"
              className="btn btn-line-white w-button" style={{ "margin-top": "12.5px" }}
             >
              Learn More
             </a>
            </div>
          <div
            className="a0-col-12 a0-col-md-6 | a0-offset-lg-1 a0-mt--xxxl a0-mt-md--none aos-init aos-animate"
            data-aos="fade-left"
          >
            <div>
              <Slider
                className="a0-use-cases-box | a0-px--none | slick-web3 | js-slick-web3 slick-initialized slick-slider slick-vertical"
                {...settings}
              >
                {sliderData.map((item, key) => (
                  <div key={key}>
                    <div className="a0-use-cases-box--item | js-slick-web3-item">
                      <img src={item.img} alt="" />
                      <h5>{item.title}</h5>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
