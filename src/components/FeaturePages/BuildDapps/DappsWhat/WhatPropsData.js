import React from "react";
import DappsWhat from "./DappsWhat";

const WhatPropsData = () => {
  let mainTitle = "Your Gateway to Decentralized Success";
  let Description =
    "With Trush, you're not just developing applications - you're crafting the future of decentralized innovation. Leverage Trush's advanced blockchain technology, developer-friendly ecosystem, and commitment to scalability, to build high-performing DApps that redefine user experience.";
  let featureImg1 =
    "https://images.ctfassets.net/64upluvbiuck/5fokr8HYUoAmqdYm0WH3x9/190cde336050487e4611f27957082c5f/secure.svg";
  let featureTitle1 = "Fast, Affordable Transactions";
  let featureText1 =
    "Lower transaction costs and manage over 50k transactions/sec seamlessly for DApp operations, thanks to Trush.";
  let featureImg2 =
    "https://images.ctfassets.net/64upluvbiuck/1ft7QHVKSQlNFfPmoR35oz/e2dc87ffd7bc46bfe3dcc8e9d3736246/evm.svg";

  let featureTitle2 = "Seamless Cross-Blockchain Integration";
  let featureText2 =
    "Unleash your DApps' potential with Trush's cross-chain compatibility, enabling effortless multi-blockchain interaction.";
  let featureImg3 =
    "https://images.ctfassets.net/64upluvbiuck/5PMtJxUoSHpjVTz2lOx3VL/2a9c35cd1b97490ab79e8c25adbde4ba/flash.svg";

  let featureTitle3 = "Security and Trust";
  let featureText3 =
    "With Trush's Beacon Consensus and robust security, maintain top-tier protection and complete integrity of your DApps.";
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
