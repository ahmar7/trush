import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import Blog2Detail from "../components/blog2Details/Blog2Details";
import Top from "../components/GoTop/GoTop";
const Blog2Details = () => {
  return (
    <div>
      <Top />
      <Header />
      <div className="jss6 jss7 desk-cl ">
        <Blog2Detail />
      </div>
      <Footer />
    </div>
  );
};

export default Blog2Details;
