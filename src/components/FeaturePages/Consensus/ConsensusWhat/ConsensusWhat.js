import React from "react";
import DappsWhat from "../../BuildDapps/DappsWhat/DappsWhat";

const WhatPropsData = () => {
  let mainTitle = "Modernizing Consensus in Blockchain";
  let Description =
    "Experience the Trush Beacon Consensus (TBC), a revolutionary consensus mechanism designed for the modern blockchain. This innovative combination of protocols optimizes performance and security for Layer 1 blockchain. With a focus on equity, security, and fail-safe measures, TBC achieves unprecedented transaction speed, scalability, and energy efficiency, making blockchain usage more affordable and scalable.";
  let featureImg1 =
    "https://images.ctfassets.net/64upluvbiuck/5fokr8HYUoAmqdYm0WH3x9/190cde336050487e4611f27957082c5f/secure.svg";
  let featureTitle1 = "Robust Security";
  let featureText1 =
    "TBC's unique validator selection and stringent measures against malicious actions ensure top-tier network security.";
  let featureImg2 =
    "https://images.ctfassets.net/64upluvbiuck/1ft7QHVKSQlNFfPmoR35oz/e2dc87ffd7bc46bfe3dcc8e9d3736246/evm.svg";

  let featureTitle2 = "Superior Speed & Scalability";
  let featureText2 =
    "Leveraging optimized transaction serialization and validation, TBC manages high transaction volumes for unmatched performance.";
  let featureImg3 =
    "https://images.ctfassets.net/64upluvbiuck/5PMtJxUoSHpjVTz2lOx3VL/2a9c35cd1b97490ab79e8c25adbde4ba/flash.svg";

  let featureTitle3 = "Democratized Efficiency";
  let featureText3 =
    "Combining multi-factor validator selection, decentralized timekeeping, and eco-friendly PoS optimization for a sustainable network.";
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
