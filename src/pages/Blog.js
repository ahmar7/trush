import React from 'react';
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import TopHeader from '../components/Blog/Header/TopHeader';
import MainBlog from '../components/Blog/MainBlog/MainBlog';
import ExploreContent from '../components/Blog/ExploreContent/ExploreContent';
import OtherBlogs from '../components/Blog/OtherBlogs/OtherBlogs';
import Top from "../components/GoTop/GoTop";
const Blog = () => {
    return (
      <div>
<Top />
        <Header/>
        <div className="jss6 jss7 desk-cl ">
         <TopHeader/>
         <MainBlog/>
         <OtherBlogs />
        </div>
        <Footer />
      </div>
    );
}

export default Blog;
