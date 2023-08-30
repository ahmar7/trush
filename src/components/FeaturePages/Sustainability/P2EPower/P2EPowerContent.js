import React from "react";
import DappsPower from "../../BuildDapps/DappsPower/DappsPower";

const P2EPowerContent = () => {
  // First Step
  let firstStepTitleBlack = "Energy-Efficient Scaling of";
  let firstStepTitlePurple = "Blockchain Networks";
  let firstStepDescription =
    " From Blockchain Expansion to Energy Explosion: Addressing the Sustainability Challenge";
  let firstStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fcreate-graphics.png&w=828&q=75";
  // First Step Inner Steps
  let firstStepInnerStepTitle1 = "  Energy Guzzlers: The PoW Dilemma";
  let firstStepInnerStepDesc1 =
    "  Proof of Work (PoW) blockchains are notorious energy consumers due to their computational demands. The extensive power requirements lead to considerable carbon emissions, tarnishing the environmental aspect of sustainability and casting doubts over blockchain's green potential.";
  let firstStepInnerStepTitle2 = " Sustainability vs. Performance";
  let firstStepInnerStepDesc2 =
    "   The quest for energy efficiency in blockchain often sparks concerns about reduced performance, specifically in transaction speed and security. Striking the right balance between efficiency and sustainability is crucial yet challenging, potentially slowing blockchain adoption.";
  let firstStepInnerStepTitle3 = "  Regulatory Hurdles and ESG Concerns";
  let firstStepInnerStepDesc3 =
    "    As environmental, social, and governance (ESG) issues gain traction, energy-hungry blockchains face increased regulatory scrutiny. This concern raises the stakes for blockchain networks to promote sustainability, not only for ethical reasons but also for their long-term viability and acceptance.";
  // Second Step
  let secondStepTitlePurple = "Trush's Sustainable";
  let secondStepTitleBlack = " Growth Strategy";
  let secondStepDescription =
    " Harmony of Growth and Sustainability: Trush’s Unique Blockchain Design";
  let secondStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fshare-graphics.png&w=1080&q=75";
  // second Step Inner Steps
  let secondStepInnerStepTitle1 = "   Addressing PoW Energy Concerns";
  let secondStepInnerStepDesc1 =
    "   The Trush Beacon Consensus (TBC) is a standout innovation for eco-friendly blockchain, combining PoS and PoH for energy efficiency. Its strategic use of validators, timekeeping, block processing, and incentives drastically cuts down on computational power, leading the way for green blockchain technology.";
  let secondStepInnerStepTitle2 = " Balancing Performance and Sustainability";
  let secondStepInnerStepDesc2 =
    "  Trush's optimized hash function and batch processing features ensure that increased sustainability doesn't compromise performance. These measures allow Trush to process transactions quickly and securely while maintaining a lower energy footprint.";
  let secondStepInnerStepTitle3 = "Meeting ESG Standards";
  let secondStepInnerStepDesc3 =
    "    Trush's commitment to sustainability aligns perfectly with evolving ESG concerns. The Green Validator Incentives and plans for renewable energy partnerships reinforce Trush's commitment to ESG guidelines, ensuring long-term viability and regulatory acceptance.";
  // Third Step
  let thirdStepTitlePurple = "Responsible Growth";
  let thirdStepTitleBlack = " and Expansion";
  let thirdStepDescription =
    " Future-Proofing Blockchain: Trush's Commitment to Responsible Expansion";

  // third Step Inner Steps
  let thirdStepInnerStepTitle1 = "Innovating Energy Efficiency";
  let thirdStepInnerStepDesc1 =
    "Trush constantly works towards better energy efficiency of its blockchain protocol. This includes refining the Trush Beacon Consensus, enhancing network communication protocols to minimize data transmission load, and improving batch processing mechanisms to optimize energy consumption.";
  let thirdStepInnerStepTitle2 = "Harnessing Renewable Energy";
  let thirdStepInnerStepDesc2 =
    "Trush seeks to source energy from renewable providers and incentivize its use within the network. Efforts are underway to partner with green energy providers and establish a rewarding program for validators and nodes using renewable energy.";
  let thirdStepInnerStepTitle3 = " Amplifying Carbon Offset Programs";
  let thirdStepInnerStepDesc3 =
    "Trush is expanding its carbon offset programs, including scaling the 'Blocks for Trees' initiative and seeking new partnerships with carbon offset organizations. The ultimate goal is to contribute positively to the environment and offset the carbon impact of operations.";

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

export default P2EPowerContent;
