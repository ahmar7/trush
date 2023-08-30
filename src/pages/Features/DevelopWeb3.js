import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Breadcrumbs from "../../components/FeaturePages/BreadCrumbs";

import WhatPropsData from "../../components/FeaturePages/DevelopWeb3/Web3What/WhatPropsData";

import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";
import Web3Projects from "../../components/FeaturePages/DevelopWeb3/Web3Projects/Web3Projects";
// import Projects from '../../components/FeaturePages/DevelopWeb3/Projects/Projects';
import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import DappsDevelopers from "../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";
import Projects from "../../components/FeaturePages/BuildDapps/Projects/Projects";
import ProjectSwipe from "../../components/FeaturePages/BuildDapps/Projects/Projects";
import Web3PowerContent from "../../components/FeaturePages/DevelopWeb3/Web3Power/Web3PowerContent";
import BannerData from "../../components/FeaturePages/DevelopWeb3/Banner/BannerData";
import FooterChain from "../../components/Faq/FooterChain/FooterChain";
import Top from "../../components/GoTop/GoTop";
const DevelopWeb3 = () => {
  return (
    <div>
<Top />
      <Header />
      <main className="main-forsw  ">
        <BannerData />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <WhatPropsData />
          <Web3Projects />
        </div>
        <CaseInfo />
        <CasesWhy />
        <CasesComparison />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <Web3PowerContent />
        </div>

        <div className="main-nft"></div>
        <ProjectSwipe />
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
