import React from "react";
import Banner from "../../BuildDapps/Banner/Banner";
import bannerImg4 from "../../../../assets/img/banner-img-4.webp";
const BannerData = () => {
  let title = "Unlocking Web 3.0 with Trush";
  let description =
    "Empower your vision with a scalable, user-friendly, and truly decentralized platform, perfectly designed for the next generation of the internet. Experience the future of Web 3.0 with Trush.";
  let btnText = "Start Building Now";
  let btnLink = "https://trush-foundation.gitbook.io/trush-network/";
  let link1 = "Migrate from ETH";
  let link2 = " Get Help";
  let bannerImg = bannerImg4;
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
