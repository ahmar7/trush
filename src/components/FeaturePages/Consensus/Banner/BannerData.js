import React from "react";
import Banner from "../../BuildDapps/Banner/Banner";
import bannerImg3 from "../../../../assets/img/banner-img-3.webp";
const BannerData = () => {
  let title = "Revolutionizing Consensus: The Trush Beacon Consensus";
  let description =
    "Dive into our groundbreaking protocol that harmonizes speed, security, scalability, and sustainability. Unleash the future of blockchain consensus for unparalleled performance.";
  let btnText = "Start Building Now";
  let btnLink = "https://trush-foundation.gitbook.io/trush-network/";
  let link1 = "Migrate from ETH";
  let link2 = " Get Help";
  let bannerImg = bannerImg3;
  return (
    <div>
      <Banner
        title={title}
        description={description}
        btnText={btnText}
        btnLink={btnLink}
        link1={link1}
        link2={link2}
        bannerImg={bannerImg}
      />
    </div>
  );
};

export default BannerData;
