import React from "react";
import DappsWhat from "../../BuildDapps/DappsWhat/DappsWhat";

const WhatPropsData = () => {
  let mainTitle = "Bridging Blockchain Worlds with Trush";
  let Description =
    "The rise of blockchain technologies has been held back by isolation between networks. Trush tackles this challenge head-on, driving cross-chain interoperability for enhanced collaboration. This commitment to unified operations paves the way for greater blockchain uptake, offering increased liquidity, broader access, and reducing fragmentation in the digital realm.";
  let featureImg1 =
    "https://images.ctfassets.net/64upluvbiuck/5fokr8HYUoAmqdYm0WH3x9/190cde336050487e4611f27957082c5f/secure.svg";
  let featureTitle1 = "Trustless Protocol";
  let featureText1 =
    "Trush's Trustless Interoperability Protocol (TIP) enables safe and smooth cross-chain interactions.";
  let featureImg2 =
    "https://images.ctfassets.net/64upluvbiuck/1ft7QHVKSQlNFfPmoR35oz/e2dc87ffd7bc46bfe3dcc8e9d3736246/evm.svg";

  let featureTitle2 = "Universal Gateway";
  let featureText2 =
    "Trush Universal Gateway (TUG) facilitates seamless asset transfers across diverse blockchains.";
  let featureImg3 =
    "https://images.ctfassets.net/64upluvbiuck/5PMtJxUoSHpjVTz2lOx3VL/2a9c35cd1b97490ab79e8c25adbde4ba/flash.svg";

  let featureTitle3 = "Global Payments";
  let featureText3 =
    "Global Instant Payment (GIP) guarantees speedy and secure cross-chain transactions worldwide.";
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
