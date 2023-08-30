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

import Web3What from "../../components/FeaturePages/Interoperability/Web3What/Web3What";

import Web3PowerContent from "../../components/FeaturePages/Interoperability/Web3Power/Web3PowerContent";
import BannerData from "../../components/FeaturePages/Interoperability/Banner/BannerData";

import BuildApps from "../../components/FeaturePages/BuildDeFi/BuildDapps/BuildApps";
import FooterChain from "../../components/Faq/FooterChain/FooterChain";
import Top from "../../components/GoTop/GoTop";
const DevelopWeb3 = () => {
  return (
    <div>
      <Top />
      <Header />
      <main className="main-forsw ">
        <BannerData />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <Web3What />
        </div>
        <CaseInfo />
        <CasesWhy />
        <CasesComparison />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <Web3PowerContent />
        </div>

        <div className="botom-maan">
          <BuildApps />
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

export default DevelopWeb3;
