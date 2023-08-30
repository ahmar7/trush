import React from "react";
import Header from "../layout/Header/Header";
import Banner from "../components/HomeComponents/Banner/Banner";
import CaseWhat from "../components/HomeComponents/CaseWhat/CaseWhat";
import CaseInfo from "../components/FeaturePages/BuildDapps/CaseInfo/CaseInfo";

import BlockChain from "../components/HomeComponents/BlockChain/BlockChain";
import BuildingDev from "../components/HomeComponents/BuildingDev/BuildingDev";
import Benefits from "../components/HomeComponents/Benefits/Benefits";
import GetStarted from "../components/HomeComponents/GetStarted/GetStarted";
import FooterChain from "../components/Faq/FooterChain/FooterChain";
import Footer from "../layout/Footer/Footer";
import StartBuilding from "../components/HomeComponents/StartBuilding/StartBuilding";
import Blogs from "../components/HomeComponents/Blogs/Blogs";
import UseCaseSwiper from "../components/HomeComponents/UseCases/UseCaseSwiper";
import GettingStarted from "../components/HomeComponents/GettingStarted/GettingStarted.js";
import Evaluation from "../components/HomeComponents/Evaluation/Evaluation";
import Top from "../components/GoTop/GoTop";
const Home = () => {
  return (
    <div>
      <Top />
      <Header />
      <main className="jss6 jss7">
        <Banner />
        <CaseWhat />
        <CaseInfo />
        <BuildingDev />
        <GettingStarted />
        <Benefits />
        <Evaluation />
        <BlockChain />
        {/* <Adoption /> */}
        <StartBuilding />
        <UseCaseSwiper />
        <Blogs />
        <GetStarted />
      </main>
      <FooterChain />
      <Footer />
    </div>
  );
};

export default Home;
