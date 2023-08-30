import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BrandAssets from "../pages/BrandAssets";
import TrsToken from "../pages/TrsToken";
import BecomeAmbassador from "../pages/BecomeAmbassador";
import NodeProvider from "../pages/NodeProvider";
import AboutUs from "../pages/AboutUs";
import AboutNetwork from "../pages/AboutNetwork";
import Blog from "../pages/Blog";

import BlogDetails from "../pages/BlogDetails";
import Blog2Details from "../pages/Blog2Details";
import Blog3Details from "../pages/Blog3Details";
import Blog4Details from "../pages/Blog4Details";
import Blog5Details from "../pages/Blog5Details";

import BuildDapps from "../pages/Features/BuildDapps";
import Faq from "../pages/Faq";
import BuildDefi from "../pages/Features/BuildDefi";
import MakeNft from "../pages/Features/MakeNft";
import CreateDex from "../pages/Features/CreateDex";
import Consensus from "../pages/Features/Consensus";
import Sustainability from "../pages/Features/Sustainability";
import DevelopWeb3 from "../pages/Features/DevelopWeb3";
import Interoperability from "../pages/Features/Interoperability";
import Contact from "../pages/Contact";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="brand-assets" element={<BrandAssets />} />
        <Route path="trs-token" element={<TrsToken />} />
        <Route path="become-ambassador" element={<BecomeAmbassador />} />
        <Route path="node-provider" element={<NodeProvider />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="about-network" element={<AboutNetwork />} />
        <Route path="blog" element={<Blog />} />
        <Route
          path="/blog/high-speed-interoperable-and-sustainable-solutions-with-trush-network/"
          element={<BlogDetails />}
        />
        <Route
          path="/blog/how-trush-is-redefining-the-scalability-security-decentralization-trilemma/"
          element={<Blog2Details />}
        />
        <Route
          path="/blog/environmental-sustainability-and-blockchain-how-trush-is-leading-the-way/"
          element={<Blog3Details />}
        />

        <Route
          path="/blog/comparative-analysis-trush-network-vs-other-layer-1-blockchains/"
          element={<Blog4Details />}
        />

        <Route
          path="/blog/the-role-of-interoperability-in-trush-network-s-success/"
          element={<Blog5Details />}
        />

        <Route
          path="/features/trush-and-non-fungible-tokens-nfts"
          element={<MakeNft />}
        />
        <Route
          path="/features/decentralized-exchanges-dexs-on-trush"
          element={<CreateDex />}
        />


        <Route
          path="features/decentralized-applications-dapps-on-trush"
          element={<BuildDapps />}
        />
        <Route path="faq" element={<Faq />} />
        <Route
          path="/features/trush-in-decentralized-finance-defi"
          element={<BuildDefi />}
        />
        <Route
          path="/features/trush-beacon-consensus-redefining-blockchain-consensus"
          element={<Consensus />}
        />
        <Route path="/features/beyond-performance-the-sustainability-focus-of-trush-network" element={<Sustainability />} />

        <Route
          path="/features/trush-and-the-web-3.0-landscape"
          element={<DevelopWeb3 />}
        />
        
        <Route
          path="/features/cross-chain-interoperability-with-trush"
          element={<Interoperability />}
        />
        
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
