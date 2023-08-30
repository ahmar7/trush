import React from "react";
import Banner from "../../BuildDapps/Banner/Banner";
import BannerImg1 from "../../../../assets/img/banner-img-1.webp";
const BannerData = () => {
  let title = "Elevate Your DeFi Innovation with Trush";
  let description =
    "Leverage Trush's innovative blockchain architecture to develop secure, efficient, and scalable DeFi projects. Benefit from low costs, high throughput, and an interoperable ecosystem.";
  let btnText = "Start Building Now";
  let btnLink = "https://trush-foundation.gitbook.io/trush-network/";
  let link1 = "Migrate from ETH";
  let link2 = " Get Help";
  let bannerImg = BannerImg1;
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
