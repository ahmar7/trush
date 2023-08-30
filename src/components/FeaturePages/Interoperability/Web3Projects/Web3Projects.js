import React from "react";
import Slider from "react-slick";
import "./Web3Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Projects = () => {
  let sliderData = [
    {
      img: "https://alephzero.org/storage/supply-chain-1668528260zzZku.svg",
      title: "Increased Decentralization",
    },
    {
      img: "https://alephzero.org/storage/wallet-16685282612S46K.svg",
      title: "Enhanced Security",
    },
    {
      img: "https://alephzero.org/storage/database-1668528260aNWrV.svg",
      title: "Superior Scalability",
    },
    {
      img: "https://alephzero.org/storage/asset-digitization-1668528260tTuhA.svg",
      title: "Sustainable Efficiency",
    },
    {
      img: "https://alephzero.org/storage/notary-signatory-1668528260Ykb0A.svg",
      title: "Equitable Power Distribution",
    },
    {
      img: "https://alephzero.org/storage/public-documents-1668528260aop0X.svg",
      title: "Fosters Network Loyalty",
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
              TBC: New Consensus Era
            </h3>
            <div className="a0-mt--m | a0-font-size--body-l">
              <p className="main__text opacity-tan">
                Trush Beacon Consensus (TBC) redefines blockchain's consensus landscape with its innovative approach to Proof of Stake (PoS). By considering factors like stake duration and validator reputation along with stake size, TBC fosters a more egalitarian, secure network that incentivizes long-term commitment. TBC surpasses traditional PoS systems, effectively countering criticisms like security concerns, centralization risks, and scalability issues. It ensures secure, scalable, decentralized, and efficient blockchain performance, marking a major advancement in blockchain technology.
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
