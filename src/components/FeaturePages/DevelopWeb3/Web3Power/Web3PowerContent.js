import React from "react";
import DappsPower from "../../BuildDapps/DappsPower/DappsPower";

const Web3PowerContent = () => {
  // First Step
  let firstStepTitleBlack = "Centralization";
  let firstStepTitlePurple = "Concerns";
  let firstStepDescription =
    " The Prevailing Centralized Internet: Dominance and Data Monopolies";
  let firstStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fcreate-graphics.png&w=828&q=75";
  // First Step Inner Steps
  let firstStepInnerStepTitle1 = "  Web 2.0: Centralization and Control";
  let firstStepInnerStepDesc1 =
    "  The transition from Web 1.0 to 2.0 marked a shift towards user-generated content, controlled by a few tech giants. These entities' control over vast amounts of data introduced centralization issues, creating concerns about data privacy, security, and unequal power distribution.";
  let firstStepInnerStepTitle2 = " Privacy: A Casualty of Centralization";
  let firstStepInnerStepDesc2 =
    "   The Web 2.0 model placed user data under the control of platform providers. This led to numerous privacy breaches, with entities lacking transparency and misusing or mishandling personal information. The exploitation of users' privacy highlighted the need for a more secure, user-centric Internet.";
  let firstStepInnerStepTitle3 = "  User Exploitation in Web 2.0";
  let firstStepInnerStepDesc3 =
    "    In the Web 2.0 era, user data is owned by platform providers, not the users themselves. This situation resulted in user exploitation, compromising user privacy and control over their data. The need for a shift to a user-centric Internet ecosystem — Web 3.0, a decentralized Web — became increasingly crucial.";
  // Second Step
  let secondStepTitlePurple = "Decentralization";
  let secondStepTitleBlack = " with Trush";
  let secondStepDescription =
    " Power to the User: Trush’s Decentralized Network Promoting Equal Control";
  let secondStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fshare-graphics.png&w=1080&q=75";
  // second Step Inner Steps
  let secondStepInnerStepTitle1 = "   Trush: Championing Decentralization";
  let secondStepInnerStepDesc1 =
    "   As a leading Layer 1 blockchain protocol, Trush is designed to decentralize data control and management, responding to the issues of Web 2.0. By utilizing a decentralized node network, Trush ensures no single entity monopolizes the network, offering a transparent and secure digital ecosystem.";
  let secondStepInnerStepTitle2 = " Data Privacy with Trush";
  let secondStepInnerStepDesc2 =
    "  Embracing the ethos of Web 3.0, Trush places data control back in the hands of users. Advanced cryptographic techniques ensure secure transactions and data integrity, empowering users to manage their own data, select what to share, with whom, and for what purpose.";
  let secondStepInnerStepTitle3 = "User Empowerment via Trush";
  let secondStepInnerStepDesc3 =
    "    The Trush Network enhances user control and personalization, combating Web 2.0's issues of user exploitation. It enables a seamless exchange of information and value across multiple networks, promoting user-centric interactions and broadening potential use cases in the digital space.";
  // Third Step
  let thirdStepTitlePurple = "The Era";
  let thirdStepTitleBlack = " of Decentralization";
  let thirdStepDescription =
    " Powering the Web 3.0 Vision: Trush's Role in a Decentralized Internet";

  // third Step Inner Steps
  let thirdStepInnerStepTitle1 = "Trush & Web 3.0: A Vibrant Future";
  let thirdStepInnerStepDesc1 =
    "As the digital landscape continues to evolve, Trush's robust and adaptable features position it as a cornerstone in the Web 3.0 era. From enabling Decentralized Autonomous Organizations (DAOs) to fostering a cross-chain interoperable ecosystem, Trush is poised to shape the future of the internet.";
  let thirdStepInnerStepTitle2 = "Trush: Empowering DeFi & DApps";
  let thirdStepInnerStepDesc2 =
    "The Trush Network, with its high throughput and low latency, is set to invigorate DeFi, paving the way for sophisticated financial products and services. Its efficient, secure platform for DApps will likely spur adoption, leading to a more decentralized, user-centric web.";
  let thirdStepInnerStepTitle3 = " Creating an Inclusive Digital Landscape";
  let thirdStepInnerStepDesc3 =
    "Trush's emphasis on decentralized data storage, privacy, and interoperability will contribute to a transparent, user-controlled, and resilient Web 3.0. As we embark on this new digital era, Trush illuminates the path towards a decentralized, secure, interconnected world.";

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
