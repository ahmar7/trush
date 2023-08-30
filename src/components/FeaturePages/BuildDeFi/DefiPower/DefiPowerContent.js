import React from "react";
import DappsPower from "../../BuildDapps/DappsPower/DappsPower";

const DefiPowerContent = () => {
  // First Step
  let firstStepTitleBlack = "The Scale Conundrum";
  let firstStepTitlePurple = "in DeFi";
  let firstStepDescription =
    "Overcoming DeFi's Speed Bumps: The Challenge of Scalability";
  let firstStepImg = 
    "https://ozonemetaverse.io/_next/image?url=%2Fcreate-graphics.png&w=828&q=75";
  // First Step Inner Steps
  let firstStepInnerStepTitle1 = "  The DeFi Scalability Crisis";
  let firstStepInnerStepDesc1 =
    "  Existing DeFi ecosystems suffer from inherent scaling issues, stifling their potential for mass adoption. Despite the promise of decentralization, high transaction costs, slow confirmation times, and limited transaction throughput turn many users and developers away.";
  let firstStepInnerStepTitle2 = " Unpredictable Performance";
  let firstStepInnerStepDesc2 =
    "DeFi's scalability suffers from erratic throughput and network instability, leading to inconsistent transaction speeds and occasional congestion. This lack of predictability compromises the user experience, especially when swift and reliable transactions are crucial. Such negative experiences can discourage potential users and investors, impeding wider adoption and growth of DeFi platforms.";
  let firstStepInnerStepTitle3 = " Network Security Challenges";
  let firstStepInnerStepDesc3 =
    "    As DeFi seeks to scale, it must also maintain robust security measures. The challenge lies in upscaling without compromising the security of the network. A surge in transaction volumes can expose vulnerabilities, potentially putting users' assets at risk. Therefore, the pressure to ensure secure scalability often limits the pace at which DeFi can grow.";
  // Second Step
  let secondStepTitlePurple = "The Power";
  let secondStepTitleBlack = "of Trush's Scalability";
  let secondStepDescription =
    "Accelerating Success: How Trush's Scalability Redefines DeFi";
  let secondStepImg =
    "https://ozonemetaverse.io/_next/image?url=%2Fshare-graphics.png&w=1080&q=75";
  // second Step Inner Steps
  let secondStepInnerStepTitle1 = "Superior Scalability with Trush";
  let secondStepInnerStepDesc1 =
    "Trush leverages its unique Trush Beacon Consensus to tackle DeFi scalability issues head-on. This novel mechanism accelerates transaction validation, facilitating more transactions per second. Users benefit from a fast, seamless experience, transforming their interaction with DeFi applications.";
  let secondStepInnerStepTitle2 = " Consistent Performance with Trush";
  let secondStepInnerStepDesc2 =
    "Trush's stability is the antidote to the unpredictable performance in DeFi. The platform ensures consistency in transaction speed, effectively eliminating network congestion issues. Users and developers enjoy a stable, reliable network, which significantly enhances the user experience and promotes wider adoption.";
  let secondStepInnerStepTitle3 = "Secure Scaling with Trush";
  let secondStepInnerStepDesc3 =
    "Trush tackles security challenges head-on, enabling secure scaling without compromises. It's designed to handle increased transaction volumes without exposing vulnerabilities, keeping users' assets safe while promoting the expansion of DeFi.";
  // Third Step
  let thirdStepTitlePurple = "A Scale-Free";
  let thirdStepTitleBlack = " Future with Trush";
  let thirdStepDescription =
    " Pioneering the Future: Trush's Vision of a Scalable DeFi Ecosystem";

  // third Step Inner Steps
  let thirdStepInnerStepTitle1 = "Trush's Future: Scaling Up, Scaling Out";
  let thirdStepInnerStepDesc1 =
    "As Trush continues to evolve, it's anticipated to achieve an impressive potential throughput of up to 710,000 TPS. By prioritizing constant optimization and innovative solutions, Trush will not only increase scalability but also maintain its unwavering focus on security and decentralization. This balanced strategy sets the stage for a future where Trush becomes an even more potent driving force in the DeFi sector.";
  let thirdStepInnerStepTitle2 = "Sustainable Scalability: Trush's Path";
  let thirdStepInnerStepDesc2 =
    "Trush's scalability approach aligns with environmental sustainability. Its Proof of Stake-based validator system and advanced Proof of History for timekeeping substantially reduce energy-intensive computations. In the future, this robust yet eco-friendly approach is expected to define new standards for blockchain platforms, making Trush the sustainable, scalable choice in the DeFi landscape.";
  let thirdStepInnerStepTitle3 = " Reinventing Finance: Trush's Vision";
  let thirdStepInnerStepDesc3 =
    "The future of Trush in DeFi is all about transformation. With its unique combination of performance, security, and scalability, Trush is poised to reshape traditional financial services and broaden the DeFi ecosystem. As Trush matures, it will unlock more possibilities for innovation, collaboration, and financial inclusion, setting the stage for DeFi to become a viable mainstream alternative to traditional finance.";

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

export default DefiPowerContent;
