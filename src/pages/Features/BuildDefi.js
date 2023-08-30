import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Breadcrumbs from "../../components/FeaturePages/BreadCrumbs";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";

import WhatPropsData from "../../components/FeaturePages/BuildDeFi/DefiWhat/WhatPropsData";

import DappsDevelopers from "../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";
import ProjectSwipe from "../../components/FeaturePages/BuildDapps/Projects/Projects";
import DappsPowerContent from "../../components/FeaturePages/BuildDeFi/DefiPower/DefiPowerContent";

import BannerData from "../../components/FeaturePages/BuildDeFi/Banner/BannerData";

import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import FooterChain from "../../components/Faq/FooterChain/FooterChain";
import Top from "../../components/GoTop/GoTop";
const BuildDefi = () => {
  return (
    <div>
      <Top />
      <Header />
      <main className="main-forsw  ">
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

        <ProjectSwipe />

        <CasesMigrate />
        <DappsApps />
        <DappsDevelopers />
        <CasesBenefits />
      </main>
      <FooterChain />
      <Footer />
    </div>
  );
};

export default BuildDefi;
