import React from "react";
import DappsPower from "../../BuildDapps/DappsPower/DappsPower";

const Web3PowerContent = () => {
  // First Step
  let firstStepTitleBlack = "Silos: Blockchains'";
  let firstStepTitlePurple = "Interoperability Dilemma";
  let firstStepDescription =
    " The inherent limitations of isolated blockchain networks and the pressing need for cross-chain communication.";
  let firstStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fcreate-graphics.png&w=828&q=75";
  // First Step Inner Steps
  let firstStepInnerStepTitle1 = "  Fragmented Ecosystems";
  let firstStepInnerStepDesc1 =
    "  The evolution of blockchain has led to numerous separate ecosystems. Each operates independently, leading to silos in the blockchain universe. Data and value transfers between systems are often complex and unreliable. This fragmentation dissuades users and developers, hampering widespread adoption.";
  let firstStepInnerStepTitle2 = " Interoperability Hurdles";
  let firstStepInnerStepDesc2 =
    "   Interoperability, or the seamless interaction and transaction between different blockchain networks, is a significant challenge. Existing methods for cross-chain transactions are typically complex, discouraging average users. For developers, crafting applications that function across various chains is daunting, limiting innovative solutions.";
  let firstStepInnerStepTitle3 = "  Security and Trust Issues";
  let firstStepInnerStepDesc3 =
    "    Bridging different blockchains brings about fundamental security concerns. Existing cross-chain solutions often depend on intermediaries, which can introduce vulnerabilities and shake the trustless nature of blockchain. This situation discourages users and developers due to potential risks, undermining blockchain's core principles of decentralization and security.";
  // Second Step
  let secondStepTitlePurple = "Trush: Bridging";
  let secondStepTitleBlack = " Blockchain Networks";
  let secondStepDescription =
    " Unveiling Trush's Trustless Interoperability Protocol and Universal Gateway to unify blockchains.";
  let secondStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fshare-graphics.png&w=1080&q=75";
  // second Step Inner Steps
  let secondStepInnerStepTitle1 = "   Consolidating Fragmented Ecosystems";
  let secondStepInnerStepDesc1 =
    "   The Trustless Interoperability Protocol (TIP) by Trush addresses blockchain fragmentation by facilitating seamless and secure cross-chain communication. TIP allows the transfer of data and transactions between Trush and other blockchains, thereby bridging the silos and fostering wider blockchain adoption";
  let secondStepInnerStepTitle2 = " Overcoming Interoperability Hurdles";
  let secondStepInnerStepDesc2 =
    "  Trush's Universal Gateway (TUG) simplifies cross-chain transactions, helping to overcome common interoperability challenges. TUG enables the transfer of any asset type between any blockchain and Trush, removing complexity and encouraging developers to create multi-chain applications.";
  let secondStepInnerStepTitle3 = "Ensuring Security and Trush";
  let secondStepInnerStepDesc3 =
    "    Trush addresses security concerns inherent in bridging different blockchains by reducing dependence on intermediaries. Through the implementation of advanced cryptographic protocols and decentralized mechanisms, Trush preserves the integrity of transactions and data transfers, thus enhancing trust and fostering adoption.";
  // Third Step
  let thirdStepTitlePurple = "Unified Blockchain:";
  let thirdStepTitleBlack = " Trush's Vision for the Future";
  let thirdStepDescription =
    " A future where Trush's interoperability solution transforms the blockchain ecosystem for better efficiency and accessibility.";

  // third Step Inner Steps
  let thirdStepInnerStepTitle1 = "Shaping Unified Blockchain Future";
  let thirdStepInnerStepDesc1 =
    "Advancements in interoperability, like Trush, hold the potential to shape a unified blockchain landscape. The continuous fragmentation and silo effect plaguing blockchain ecosystems could be a thing of the past, leading to a more integrated and seamless user experience across platforms.";
  let thirdStepInnerStepTitle2 = "Unleashing Innovative Versatility";
  let thirdStepInnerStepDesc2 =
    "Trush's capabilities can enable limitless innovation and versatility, particularly in burgeoning sectors like DeFi, NFTs, and digital identity verification. By seamlessly connecting diverse chains, developers are free to create transformative applications, driving an era of unprecedented functionality.";
  let thirdStepInnerStepTitle3 = " Raising Bar for Secure Interoperability";
  let thirdStepInnerStepDesc3 =
    "Trush can pave the way in establishing a high standard for security and trust in cross-chain interactions. As blockchain networks continue to diversify and grow, the need for secure, trustless transactions across these networks will become increasingly paramount, where Trush will play a critical role.";

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

export default Web3PowerContent;
