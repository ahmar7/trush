import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";

import Projects from "../../components/FeaturePages/BuildDapps/Projects/Projects";
import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import DappsDevelopers from "../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";
import FooterChain from "../../components/Faq/FooterChain/FooterChain";

import WhatPropsData from "../../components/FeaturePages/BuildDapps/DappsWhat/WhatPropsData";

import DappsPowerContent from "../../components/FeaturePages/BuildDapps/DappsPower/DappsPowerContent";
import OnBoardingProcess from "../../components/FeaturePages/BuildDapps/OnBoardingProcess/OnBoardingProcess";
import GridCards from "../../components/FeaturePages/BuildDapps/GridCards/GridCards";
import BannerData from "../../components/FeaturePages/BuildDapps/Banner/BannerData";
import Top from "../../components/GoTop/GoTop";
 

// import DappsPower from "../../components/FeaturePages/BuildDapps/DappsPower/DappsPower";

const BuildDapps = () => {
  return (
    <div>
      <Top />

      <Header />
      <main className="main-forsw ">
        <BannerData />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <WhatPropsData />
        </div>
        <CaseInfo />
        <CasesWhy />
        <CasesComparison />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <DappsPowerContent />
        </div>
        <OnBoardingProcess />
        <Projects />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <CasesMigrate />
          <DappsApps />
          <GridCards />
          <CasesBenefits />
        </div>
      </main>
      <FooterChain />
      <Footer />
    </div>
  );
};

export default BuildDapps;
