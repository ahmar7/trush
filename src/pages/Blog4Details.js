import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import Blog4Detail from "../components/blog4Details/Blog4Details";
import Top from "../components/GoTop/GoTop";
const Blog4Details = () => {
  return (
    <div>
      <Top />
      <Header />
      <div className="jss6 jss7 desk-cl ">
        <Blog4Detail />
      </div>
      <Footer />
    </div>
  );
};

export default Blog4Details;
