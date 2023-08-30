import React from "react";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Banner from "../components/Contact/Banner/Banner";
import ContactDetails from "../components/Contact/ContactDetails/ContactDetails";
import FooterChain from "../components/Faq/FooterChain/FooterChain";
import GetStarted from "../components/Contact/GetStarted/GetStarted";
import Top from "../components/GoTop/GoTop";
const Contact = () => {
  return (
    <div>
      <Top />
      <Header />
      <div className="jss6 jss7 desk-cl">
        <Banner />
        <ContactDetails />
      </div>
      <GetStarted />
      <FooterChain />
      <Footer />
    </div>
  );
};

export default Contact;
