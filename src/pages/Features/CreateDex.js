import React from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Breadcrumbs from "../../components/FeaturePages/BreadCrumbs";
import DexWhat from "../../components/FeaturePages/CeateDex/DexWhat/DexWhat";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";
import DappsDevelopers from "../../components/FeaturePages/BuildDapps/DappsDeveloper/DappsDevelopers";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";
import ProjectSwipe from "../../components/FeaturePages/BuildDapps/Projects/Projects";
import DexPowerContent from "../../components/FeaturePages/CeateDex/DexPower/DexPowerContent";
import BuildApps from "../../components/FeaturePages/BuildDeFi/BuildDapps/BuildApps";
import BannerData from "../../components/FeaturePages/CeateDex/Banner/BannerData";
import Top from "../../components/GoTop/GoTop";
const CreateDex = () => {
  return (
    <div>
      <Top />
      <Header />
      <main className="main-forsw   ">
        <Breadcrumbs parentlink="/" parent="Ecosystem" child="DEX" />
        <BannerData />
        <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <DexWhat />
          <CaseInfo />
          <CasesWhy />
          <CasesComparison />
          <DexPowerContent />
        </div>
        <BuildApps />
        <div className="main-nft"></div>

        <ProjectSwipe />
        <DappsDevelopers />
        <CasesBenefits />

        {/* 
          <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
            <CaseInfo />
          </div>

          <NftMint />
          <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
            <CasesMigrate />
            <DappsApps />
            <CasesBenefits />
          </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default CreateDex;
