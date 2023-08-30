import React from "react";
import DappsPower from "../../BuildDapps/DappsPower/DappsPower";

const DexPowerContent = () => {
  // First Step
  let firstStepTitleBlack = "The Challenge of";
  let firstStepTitlePurple = "Complexity";
  let firstStepDescription =
    " Navigating the Complexity Maze: Unraveling the Barriers in Traditional DApp Environments";
  let firstStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fcreate-graphics.png&w=828&q=75";
  // First Step Inner Steps
  let firstStepInnerStepTitle1 = "  High Barrier to Entry";
  let firstStepInnerStepDesc1 =
    "  DApps face challenges of scalability, high costs, and complex interfaces. The need for understanding intricate concepts like  wallets, gas fees, and private keys can deter many users.";
  let firstStepInnerStepTitle2 = " Interoperability Issues";
  let firstStepInnerStepDesc2 =
    "   The lack of standardization across blockchains can limit interoperability between different DApps, creating inefficiencies and confining the potential applications of DApps.";
  let firstStepInnerStepTitle3 = "  Limited Scalability and High Costs";
  let firstStepInnerStepDesc3 =
    "    Most DApps are built on Ethereum, which can handle only 15-20  transactions per second. Combined with high transaction fees, this makes it difficult for DApps to scale and becomes expensive for users.";
  // Second Step
  let secondStepTitlePurple = "Simplifying";
  let secondStepTitleBlack = " with Trush";
  let secondStepDescription =
    " Embracing Simplicity: Trush's Pledge for an Intuitive and User-Friendly DApp Experience";
  let secondStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fshare-graphics.png&w=1080&q=75";
  // second Step Inner Steps
  let secondStepInnerStepTitle1 = "   Increased Speed and Scalability";
  let secondStepInnerStepDesc1 =
    "   Trush offers superior scalability, bypassing the typical transaction processing speed limitations found in many blockchain networks, enabling quick and efficient DApp operations.";
  let secondStepInnerStepTitle2 = " Affordable Transaction Costs";
  let secondStepInnerStepDesc2 =
    "  Trush significantly reduces transaction costs, making DApp usage feasible for all, irrespective of the transaction size. This affordability enhances the overall user experience.";
  let secondStepInnerStepTitle3 = "User-Friendly and Intuitive Design";
  let secondStepInnerStepDesc3 =
    "    Trush acknowledges the steep learning curve of DApps, offering an intuitive, accessible user experience. Its focus on simplicity fosters wider adoption of blockchain technology.";
  // Third Step
  let thirdStepTitlePurple = "Bridging";
  let thirdStepTitleBlack = " the Adoption Gap";
  let thirdStepDescription =
    " Sealing the Adoption Gap: Empowering User Engagement with Trush's Simplified DApp Ecosystem{";

  // third Step Inner Steps
  let thirdStepInnerStepTitle1 = "Promoting Interoperability";
  let thirdStepInnerStepDesc1 =
    "Trush's design ensures interoperability across various blockchain platforms, enabling seamless interactions and broadening DApps' application scope, thus stimulating adoption.";
  let thirdStepInnerStepTitle2 = "Aiding Widespread Adoption";
  let thirdStepInnerStepDesc2 =
    "By overcoming barriers such as complexity, high costs, and  scalability, Trush aims to make blockchain technology more accessible, encouraging more users to adopt DApps.";
  let thirdStepInnerStepTitle3 = " Creating an Inclusive Digital Landscape";
  let thirdStepInnerStepDesc3 =
    "Trush's mission is to simplify the blockchain experience, promoting a more accessible and inclusive digital landscape, fueling widespread adoption and utilization of DApps.";

  return (
    <div>
      <DappsPower
        firstStepTitleBlack={firstStepTitleBlack}
        firstStepTitlePurple={firstStepTitlePurple}
        firstStepDescription={firstStepDescription}
        firstStepImg={firstStepImg}
        firstStepInnerStepTitle1={firstStepInnerStepTitle1}
        firstStepInnerStepDesc1={firstStepInnerStepDesc1}
        firstStepInnerStepTitle2={firstStepInnerStepTitle2}
        firstStepInnerStepDesc2={firstStepInnerStepDesc2}
        firstStepInnerStepTitle3={firstStepInnerStepTitle3}
        firstStepInnerStepDesc3={firstStepInnerStepDesc3}
        secondStepTitleBlack={secondStepTitleBlack}
        secondStepTitlePurple={secondStepTitlePurple}
        secondStepDescription={secondStepDescription}
        secondStepImg={secondStepImg}
        secondStepInnerStepTitle1={secondStepInnerStepTitle1}
        secondStepInnerStepDesc1={secondStepInnerStepDesc1}
        secondStepInnerStepTitle2={secondStepInnerStepTitle2}
        secondStepInnerStepDesc2={secondStepInnerStepDesc2}
        secondStepInnerStepTitle3={secondStepInnerStepTitle3}
        secondStepInnerStepDesc3={secondStepInnerStepDesc3}
        thirdStepTitleBlack={thirdStepTitleBlack}
        thirdStepTitlePurple={thirdStepTitlePurple}
        thirdStepDescription={thirdStepDescription}
        thirdStepInnerStepTitle1={thirdStepInnerStepTitle1}
        thirdStepInnerStepDesc1={thirdStepInnerStepDesc1}
        thirdStepInnerStepTitle2={thirdStepInnerStepTitle2}
        thirdStepInnerStepDesc2={thirdStepInnerStepDesc2}
        thirdStepInnerStepTitle3={thirdStepInnerStepTitle3}
        thirdStepInnerStepDesc3={thirdStepInnerStepDesc3}
      />
    </div>
  );
};

export default DexPowerContent;
