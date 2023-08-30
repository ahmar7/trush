import React from "react";
import Banner from "./Banner";
import BannerImg2 from "../../../../assets/img/banner-img-2.webp";
const BannerData = () => {
  let title = "Empower Your dApps with Trush";
  let description =
    "Elevate your decentralized applications with our high-performance, secure, and interoperable Layer 1 solution. Transform your ideas into reality with Trush.";
  let btnText = "Start Building Now";
  let btnLink = "https://trush-foundation.gitbook.io/trush-network/";
  let link1 = "Migrate from ETH";
  let link2 = " Get Help";
  let bannerImg = BannerImg2;
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
