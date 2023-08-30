import React from "react";
import DappsWhat from "../../BuildDapps/DappsWhat/DappsWhat";

const WhatPropsData = () => {
  let mainTitle = "Next-Gen DeFi: A New Financial Paradigm";
  let Description =
    "In the rapidly evolving world of Decentralized Finance (DeFi), Trush is carving a niche with its developer-friendly, robust, and scalable platform. By leveraging the power of blockchain technology, Trush enables the creation of diverse DeFi applications, offering unparalleled speed, security, and interoperability. From decentralized exchanges and lending platforms to yield farming and stablecoins, Trush is the ideal choice for developers and innovators keen on shaping the future of finance.";
  let featureImg1 =
    "https://images.ctfassets.net/64upluvbiuck/5fokr8HYUoAmqdYm0WH3x9/190cde336050487e4611f27957082c5f/secure.svg";
  let featureTitle1 = "Unmatched Performance";
  let featureText1 =
    "Trush ensures high scalability with 50,000 TPS and rapid finality, perfect for seamless DeFi dApp operations.";
  let featureImg2 =
    "https://images.ctfassets.net/64upluvbiuck/1ft7QHVKSQlNFfPmoR35oz/e2dc87ffd7bc46bfe3dcc8e9d3736246/evm.svg";

  let featureTitle2 = "Affordability & Efficiency";
  let featureText2 =
    "With Trush, experience remarkably low transaction fees and secure, efficient smart contracts for complex DeFi applications.";
  let featureImg3 =
    "https://images.ctfassets.net/64upluvbiuck/5PMtJxUoSHpjVTz2lOx3VL/2a9c35cd1b97490ab79e8c25adbde4ba/flash.svg";

  let featureTitle3 = "Cross-Chain Compatibility";
  let featureText3 =
    "Trush fosters a vibrant DeFi ecosystem through seamless interaction with other blockchains, boosting your DeFi dApp's potential.";
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
