import React from "react";
import DappsPower from "../../BuildDapps/DappsPower/DappsPower";

const ConsensusPowerContent = () => {
  // First Step
  let firstStepTitleBlack = "Limitations of Existing";
  let firstStepTitlePurple = "Consensus Mechanisms";
  let firstStepDescription =
    " Navigating the Challenges: Unraveling the Drawbacks of Traditional Consensus Protocols";
  let firstStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fcreate-graphics.png&w=828&q=75";
  // First Step Inner Steps
  let firstStepInnerStepTitle1 = "  Scalability Woes";
  let firstStepInnerStepDesc1 =
    "  Traditional consensus mechanisms, while secure, buckle under high transaction volumes, leading to network congestion and slow transaction speeds. This scalability issue hampers blockchain's potential for real-world, high-frequency applications, deterring users and developers alike.";
  let firstStepInnerStepTitle2 = " Energy Inefficiency";
  let firstStepInnerStepDesc2 =
    "   Existing mechanisms like Proof of Work demand substantial computational resources, translating to high energy consumption. This environmental cost is unsustainable and unattractive, making these mechanisms less ideal for environmentally conscious users and developers.";
  let firstStepInnerStepTitle3 = "  Centralization Risks";
  let firstStepInnerStepDesc3 =
    "    Paradoxically, some existing consensus mechanisms risk promoting centralization, contradicting blockchain's decentralization ethos. Wealth and computational power can consolidate among a few entities, introducing security vulnerabilities and limiting the technology's egalitarian promise.";
  // Second Step
  let secondStepTitlePurple = "Trush";
  let secondStepTitleBlack = " Beacon Consensus";
  let secondStepDescription =
    " Introducing the Revolution: Trush Beacon Consensus, a Pioneering Approach to Overcome Consensus Hurdles";
  let secondStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fshare-graphics.png&w=1080&q=75";
  // second Step Inner Steps
  let secondStepInnerStepTitle1 = "   Scalable & Swift Transactions";
  let secondStepInnerStepDesc1 =
    "   The Trush Beacon Consensus is designed to handle high transaction volumes, allowing for seamless scalability. Unlike traditional mechanisms, it ensures rapid transaction speeds regardless of network load, making it suitable for real-world, high-frequency applications.";
  let secondStepInnerStepTitle2 = " Eco-friendly Design";
  let secondStepInnerStepDesc2 =
    "  Trush Beacon Consensus employs an energy-efficient approach to reach consensus. By eliminating the need for substantial computational resources, it reduces energy consumption, making blockchain technology more sustainable and attractive for eco-conscious users and developers.";
  let secondStepInnerStepTitle3 = "Decentralization at its Core";
  let secondStepInnerStepDesc3 =
    "    Trush Beacon Consensus discourages centralization. It ensures that wealth and computational power can't consolidate among a few entities, thereby reducing security risks and reinforcing blockchain's true ethos of decentralization.";
  // Third Step
  let thirdStepTitlePurple = "A New Paradigm";
  let thirdStepTitleBlack = " in Blockchain";
  let thirdStepDescription =
    " Casting Forward: The Transformative Impact of Trush Beacon Consensus on the Blockchain Horizon";

  // third Step Inner Steps
  let thirdStepInnerStepTitle1 = "Trush's Role in Scalable Blockchains";
  let thirdStepInnerStepDesc1 =
    "Trush Beacon Consensus is engineered to solve the scalability issue, offering a robust framework for handling increased transaction loads. As blockchain adoption accelerates, Trush is well-positioned to meet the growing demands without sacrificing performance or security.";
  let thirdStepInnerStepTitle2 = "Empowering Decentralization with Trush";
  let thirdStepInnerStepDesc2 =
    "By addressing the miner centralization problem, Trush ensures that control of the network remains truly decentralized. Trush stands at the forefront of a more equitable blockchain era, allowing a diverse array of participants to validate transactions and maintain the network.";
  let thirdStepInnerStepTitle3 = " Energy Efficient Future with Trush";
  let thirdStepInnerStepDesc3 =
    "Trush's consensus mechanism is a crucial step toward an energy-efficient blockchain future. Its approach ensures the network's sustainability and affordability in the long term, marking a significant turning point in the industry’s push towards green blockchain solutions.";

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

export default ConsensusPowerContent;
