import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import BlogDetail from "../components/blogDetails/BlogDetails";
import Top from "../components/GoTop/GoTop";
const BlogDetails = () => {
  return (
    <div>
      <Top />
      <Header />
      <div className="jss6 jss7 desk-cl ">
        <BlogDetail />
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
