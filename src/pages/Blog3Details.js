import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import Blog3Detail from "../components/blog3Details/Blog3Details";
import Top from "../components/GoTop/GoTop";
const Blog3Details = () => {
  return (
    <div>
      <Top />
      <Header />
      <div className="jss6 jss7 desk-cl ">
        <Blog3Detail />
      </div>
      <Footer />
    </div>
  );
};

export default Blog3Details;
