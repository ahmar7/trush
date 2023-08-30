import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import Breadcrumbs from "../../components/FeaturePages/BreadCrumbs";
import CasesWhy from "../../components/FeaturePages/BuildDapps/CasesWhy/CasesWhy";
import CaseInfo from "../../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";
import CasesComparison from "../../components/FeaturePages/BuildDapps/CasesComparison/CasesComparison";
import NftMint from "../../components/FeaturePages/MakeNft/NftMint/NftMint";
import CasesMigrate from "../../components/FeaturePages/BuildDapps/CasesMigrate/CasesMigrate";
import DappsApps from "../../components/FeaturePages/BuildDapps/DappsSpace/DappsApps";
import CasesBenefits from "../../components/FeaturePages/BuildDapps/Casesbenefits/CasesBenefits";
import ProjectSwipe from "../../components/FeaturePages/BuildDapps/Projects/Projects";
import NftPowerContent from "../../components/FeaturePages/MakeNft/NftPower/NftPowerContent";
import BannerData from "../../components/FeaturePages/MakeNft/Banner/BannerData";
import Top from "../../components/GoTop/GoTop";
const MakeNft = () => {
  return (
    <div>
      <Top />
      <Header />
      <main className="main-forsw  ">
        <Breadcrumbs parentlink="/" parent="Ecosystem" child="NFT" />
        <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <BannerData />
        </div>
        <CasesWhy />
        <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <CaseInfo />
        </div>
        <CasesComparison />
        <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <NftPowerContent />
        </div>
        <div className="main-nft"></div>
        <ProjectSwipe />
        <NftMint />
        <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <CasesMigrate />
          <DappsApps />
          <CasesBenefits />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MakeNft;
