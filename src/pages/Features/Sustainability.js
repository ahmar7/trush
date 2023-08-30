import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";
import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import DappsDevelopers from "../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";

import P2eWhat from "../../components/FeaturePages/Sustainability/P2EWhat/P2eWhat";
import P2EPowerContent from "../../components/FeaturePages/Sustainability/P2EPower/P2EPowerContent";
import BuildApps from "../../components/FeaturePages/Sustainability/BuildApps/BuildApps";
import BannerData from "../../components/FeaturePages/Sustainability/Banner/BannerData";
import FooterChain from "../../components/Faq/FooterChain/FooterChain";
import Top from "../../components/GoTop/GoTop";
const P2eGames = () => {
  return (
    <div>
      <Top />
      <Header />
      <main className="main-forsw low-comp">
        <BannerData />

        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <P2eWhat />
        </div>
        <CaseInfo />
        <CasesWhy />
        <CasesComparison />

        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <P2EPowerContent />
        </div>
        <BuildApps />
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

export default P2eGames;
