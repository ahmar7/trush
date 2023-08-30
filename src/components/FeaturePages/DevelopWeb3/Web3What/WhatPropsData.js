import React from "react";
import DappsWhat from "../../BuildDapps/DappsWhat/DappsWhat";

const WhatPropsData = () => {
  let mainTitle = "Web 3.0: A Paradigm Shift in Connectivity";
  let Description =
    "Embrace a transformative shift with Web 3.0, a user-centric digital paradigm that establishes a fully interconnected, transparent, and equitable online ecosystem. Trush facilitates this transition, leveraging blockchain technology, smart automation, and cryptocurrency transactions to create a more secure, inclusive digital future.";
  let featureImg1 =
    "https://images.ctfassets.net/64upluvbiuck/5fokr8HYUoAmqdYm0WH3x9/190cde336050487e4611f27957082c5f/secure.svg";
  let featureTitle1 = "Decentralization & Blockchain";
  let featureText1 =
    "Fostering an equitable, decentralized Web 3.0 ecosystem, enhanced by the trust, transparency, and security of blockchain technology.";
  let featureImg2 =
    "https://images.ctfassets.net/64upluvbiuck/1ft7QHVKSQlNFfPmoR35oz/e2dc87ffd7bc46bfe3dcc8e9d3736246/evm.svg";

  let featureTitle2 = "Efficient Transactions";
  let featureText2 =
    "Championing swift, secure, and affordable crypto transactions, Trush redefines financial interactions beyond traditional systems.";
  let featureImg3 =
    "https://images.ctfassets.net/64upluvbiuck/5PMtJxUoSHpjVTz2lOx3VL/2a9c35cd1b97490ab79e8c25adbde4ba/flash.svg";

  let featureTitle3 = "AI-Powered Autonomy";
  let featureText3 =
    "Leveraging smart automation and AI capabilities, Trush fast-tracks the creation of autonomous, efficient Web 3.0 applications.";
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
