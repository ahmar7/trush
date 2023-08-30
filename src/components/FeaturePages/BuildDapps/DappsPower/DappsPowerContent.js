import React from "react";
import DappsPower from "./DappsPower";

const DappsPowerContent = () => {
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
    "  The complexity of DApps, including the understanding of wallets, gas fees, and private keys, along with scalability issues and high costs, creates a significant barrier for potential users. This intricacy can be intimidating, discouraging many from exploring the potential benefits of DApps.";
  let firstStepInnerStepTitle2 = " Interoperability Issues";
  let firstStepInnerStepDesc2 =
    "   The absence of uniformity across various blockchains often hampers seamless interaction between different DApps. This discordance leads to operational inefficiencies, curtailing the broad-spectrum applicability and performance of DApps within the blockchain ecosystem.";
  let firstStepInnerStepTitle3 = "  Limited Scalability and High Costs";
  let firstStepInnerStepDesc3 =
    "    The predominance of Ethereum as a platform for DApps, with its limited capacity of 15-20 transactions per second and high transaction fees, creates scaling difficulties. This limitation, coupled with elevated costs, obstructs the large-scale adoption and user affordability of DApps.";
  // Second Step
  let secondStepTitlePurple = "Simplifying";
  let secondStepTitleBlack = " with Trush";
  let secondStepDescription =
    " Embracing Simplicity: Trush's Pledge for an Intuitive and User-Friendly DApp Experience";
  let secondStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fshare-graphics.png&w=1080&q=75";
  // second Step Inner Steps
  let secondStepInnerStepTitle1 = "   Unleashing DApp Development with Trush";
  let secondStepInnerStepDesc1 =
    "Trush Network streamlines the development of decentralized applications (DApps) through scalable, cost-effective, and user-oriented solutions. Trush's Beacon Consensus (TBC) guarantees fast, secure transactions, while extensive learning resources make DApp creation and use accessible for all.";
  let secondStepInnerStepTitle2 = " Interoperability at the Core";
  let secondStepInnerStepDesc2 =
    "Trush enhances DApp interaction through its Trustless Interoperability Protocol (TIP) and Universal Gateway (TUG), ensuring smooth cross-chain communication. These features address existing interoperability issues, expanding the potential applications and efficiency of DApps.";
  let secondStepInnerStepTitle3 = "Addressing Scalability and Cost Issues";
  let secondStepInnerStepDesc3 =
    " Built to handle high volumes, Trush processes an impressive 50,000 transactions per second. This scalability, combined with lower transaction fees, makes Trush an optimal platform for DApps that need to scale without inflating costs for users. Furthermore, its Ethereum Virtual Machine (EVM) compatibility allows for easy migration of Ethereum-based DApps to Trush.";
  // Third Step
  let thirdStepTitlePurple = "Bridging";
  let thirdStepTitleBlack = " the Adoption Gap";
  let thirdStepDescription =
    " Sealing the Adoption Gap: Empowering User Engagement with Trush's Simplified DApp Ecosystem";

  // third Step Inner Steps
  let thirdStepInnerStepTitle1 = "Fostering Mass Adoption through User Experience";
  let thirdStepInnerStepDesc1 =
    "Trush network is steadfast in its commitment to bridge the gap between decentralized applications (DApps) and mainstream users. By focusing on enhancing user experience, Trush intends to simplify interaction with DApps and eliminate common issues like complex interfaces and high costs. This involves the refinement of wallet interfaces, the development of fee estimation tools to make gas fees more predictable, and educating users about essential concepts in a user-friendly manner.";
  let thirdStepInnerStepTitle2 = "Unleashing Interoperability and Scalability";
  let thirdStepInnerStepDesc2 =
    "As the digital landscape evolves, Trush aspires to bridge the existing gaps in DApps' scalability and interoperability. The incorporation of Layer 2 solutions and advancements in smart contract technology will enhance transaction speeds and data volumes, enabling a new wave of high-performance DApps. Trush also envisions an interconnected blockchain ecosystem, where DApps interact seamlessly across various networks, further broadening their utility and efficiency.";
  let thirdStepInnerStepTitle3 = " Accelerating DApp Adoption Across Traditional Industries";
  let thirdStepInnerStepDesc3 =
    "With an increasing number of traditional industries recognising the power of blockchain, Trush anticipates a rise in sector-specific DApps. From healthcare and finance to supply chain and beyond, DApps on Trush will aim to solve real-world problems, promoting wider blockchain adoption. Trush is committed to nurturing this trend, offering financial support, technical resources, and a vibrant community to drive innovation and progress across diverse sectors.";

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

export default DappsPowerContent;
