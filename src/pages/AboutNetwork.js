import React from "react";
import Banner from "../components/AboutNetwork/Banner/Banner";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import Network from "../components/AboutNetwork/WhatIsNetwork/Network";
import Utilization from "../components/AboutNetwork/Utilization/Utilization";
import Top from "../components/GoTop/GoTop";

const AboutNetwork = () => {
  return (
    <div>
      <Top />
      <Header />
      <div className="">
        <Banner />
        <Network />
        <Utilization />
      </div>
      <Footer />
    </div>
  );
};

export default AboutNetwork;
