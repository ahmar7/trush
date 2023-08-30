import React from "react";
import DappsWhat from "../../BuildDapps/DappsWhat/DappsWhat";

const DexWhat = () => {
  let mainTitle = " tati";
  let Description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.  Perspiciatis porro nam iste! Dicta voluptate reprehenderit, sequi facere sapiente obcaecati quis aliquam ad iste utexpedita. Tenetur assumenda omnis libero?";
  let featureImg1 =
    "https://images.ctfassets.net/64upluvbiuck/5fokr8HYUoAmqdYm0WH3x9/190cde336050487e4611f27957082c5f/secure.svg";
  let featureTitle1 = "Next gen scalability";
  let featureText1 =
    " Low gas fees and low latency with high throughput backed by the  security of Ethereum.";
  let featureImg2 =
    "https://images.ctfassets.net/64upluvbiuck/1ft7QHVKSQlNFfPmoR35oz/e2dc87ffd7bc46bfe3dcc8e9d3736246/evm.svg";

  let featureTitle2 = "Developer ready";
  let featureText2 =
    "Fully compatible with popular tools, infrastructure, IDEs and wallets with MetaMask distribution and EVM equivalence";
  let featureImg3 =
    "https://images.ctfassets.net/64upluvbiuck/5PMtJxUoSHpjVTz2lOx3VL/2a9c35cd1b97490ab79e8c25adbde4ba/flash.svg";

  let featureTitle3 = "  Unrivalled performance";
  let featureText3 =
    " Award winning prover enables fast finality and trustless  withdrawals in minutes";
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

export default DexWhat;
