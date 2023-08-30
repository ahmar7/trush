import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Breadcrumbs from "../../components/FeaturePages/BreadCrumbs";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import DappsDevelopers from "../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";

import ConsensusWhat from "../../components/FeaturePages/Consensus/ConsensusWhat/ConsensusWhat";

import ConsensusPowerContent from "../../components/FeaturePages/Consensus/MetaversePower/ConsensusPowerContent";
import BannerData from "../../components/FeaturePages/Consensus/Banner/BannerData";

import Web3Projects from "../../components/FeaturePages/Interoperability/Web3Projects/Web3Projects";
import FooterChain from "../../components/Faq/FooterChain/FooterChain";
import Top from "../../components/GoTop/GoTop";

const BuildMetaverse = () => {
  return (
    <div>
      <Top />
      <Header />
      <main className="main-forsw ">
        <BannerData />

        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <ConsensusWhat />
          <Web3Projects />
        </div>
        <CaseInfo />
        <CasesWhy />
        <CasesComparison />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <ConsensusPowerContent />
        </div>
        <div className="main-nft"></div>

        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <CasesMigrate />
          <DappsApps />
          <DappsDevelopers />
          <CasesBenefits />
        </div>
      </main>
      <FooterChain />
      <Footer />
    </div>
  );
};

export default BuildMetaverse;
