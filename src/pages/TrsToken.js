import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Banner from "../components/TrsToken/Banner/Banner";
import Infrastructure from "../components/TrsToken/Infrastructure/Infrastructure";
import NetworkSlider from "../components/TrsToken/NetworkSlider/NetworkSlider.js";
import BridgeType from "../components/TrsToken/bridgeTypes/bridgeTypes";
import Tokens from "../components/TrsToken/Tokens/Tokens";
import Trade from "../components/TrsToken/Trade/Trade";
import Earning from "../components/TrsToken/StartEarning/Earning";
import FeaturesAdvantages from "../components/TrsToken/FeaturesAdvantages/FeaturesAdvantages";
import Faq from "../components/TrsToken/Faq/Faq";
import Choose from "../components/TrsToken/whyChoose/whyChoose";
import CuttingEdge from "../components/TrsToken/CuttingEdge/CuttingEdge.js";
import Top from "../components/GoTop/GoTop";
const TrsToken = () => {
  return (
    <div>
      <Top />
      <Header />

      <div className="main-forsw only-trs">
        <Banner />
      </div>
      <div className="jss6 jss7 desk-cl tpmn">
        <Choose />
        <NetworkSlider />
        <Infrastructure />
        <BridgeType />
        <Tokens />
        <FeaturesAdvantages />
        <Trade />
        <CuttingEdge />
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default TrsToken;
