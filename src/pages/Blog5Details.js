import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import Blog5Detail from "../components/blog5Details/Blog5Details";
import Top from "../components/GoTop/GoTop";
const Blog5Details = () => {
  return (
    <div>
      <Top />
      <Header />
      <div className="jss6 jss7 desk-cl ">
        <Blog5Detail />
      </div>
      <Footer />
    </div>
  );
};

export default Blog5Details;
