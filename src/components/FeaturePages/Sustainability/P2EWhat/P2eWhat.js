import React from "react";
import DappsWhat from "../../BuildDapps/DappsWhat/DappsWhat";

const WhatPropsData = () => {
  let mainTitle = "Balancing Blockchain and Sustainability";
  let Description =
    "Trush Network intertwines the advantages of blockchain technology with sustainable practices. We acknowledge the environmental implications of typical blockchain mechanisms, hence we've made sustainability our core pillar. Experience the potential of blockchain without jeopardizing our environment's health.";
  let featureImg1 =
    "https://images.ctfassets.net/64upluvbiuck/5fokr8HYUoAmqdYm0WH3x9/190cde336050487e4611f27957082c5f/secure.svg";
  let featureTitle1 = "Efficient Consensus";
  let featureText1 =
    "Trush Beacon Consensus blends PoS and PoH, drastically cutting energy consumption while maintaining a robust network.";
  let featureImg2 =
    "https://images.ctfassets.net/64upluvbiuck/1ft7QHVKSQlNFfPmoR35oz/e2dc87ffd7bc46bfe3dcc8e9d3736246/evm.svg";

  let featureTitle2 = "Green Rewards";
  let featureText2 =
    "Validators leveraging renewable energy are rewarded, promoting an eco-friendly blockchain network.";
  let featureImg3 =
    "https://images.ctfassets.net/64upluvbiuck/5PMtJxUoSHpjVTz2lOx3VL/2a9c35cd1b97490ab79e8c25adbde4ba/flash.svg";

  let featureTitle3 = "Continual Green Innovation";
  let featureText3 =
    "Exploring novel strategies to enhance energy efficiency and reduce environmental impact without sacrificing blockchain reliability.";
  return (
    <div>
      <DappsWhat
        Description={Description}
        mainTitle={mainTitle}
        featureImg1={featureImg1}
        featureTitle1={featureTitle1}
        featureText1={featureText1}
        featureImg2={featureImg2}
        featureTitle2={featureTitle2}
        featureText2={featureText2}
        featureImg3={featureImg3}
        featureTitle3={featureTitle3}
        featureText3={featureText3}
      />
    </div>
  );
};

export default WhatPropsData;
