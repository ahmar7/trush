import React from 'react';
import './MainBlog.css' 
import { Link } from 'react-router-dom';
import TrushIcon from "../../../assets/img/trush-icon.png";

const MainBlog = () => {
    return (
      <section className="thMuiPaper-root-173 thjss264 thMuiPaper-elevation0-176">
        <div className="thMuiContainer-root-226 thMuiContainer-maxWidthLg-232">
          <div className="thMuiBox-root-269 thjss270 thjss265">
            <div className="thMuiBox-root-269 thjss271 thjss266">
              {/*<div className="thMuiBox-root-269 thjss272 thjss267 thjss268" />*/}
            </div>
            <section className="thMuiPaper-root-173 thjss273 thMuiPaper-elevation0-176">
              <Link
                className="thMuiButtonBase-root-310 thMuiButton-root-283 thMuiButton-text-285 thjss274 thMuiButton-disableElevation-294"
                tabIndex={0}
                aria-disabled="false"
                role="link"
                to="/blog/high-speed-interoperable-and-sustainable-solutions-with-trush-network/"
              >
                <span className="thMuiButton-label-284">
                  <div className="thMuiBox-root-269 thjss311 thjss275">
                    <div className="thMuiBox-root-269 thjss312 thjss276">
                      <img
                        className="thjss277"
                        src="https://s3-frontend-strapi.s3.us-west-1.amazonaws.com/Ankr_x_Microsoft_blog_a3fedea096.png"
                        alt="Ankr’s Enterprise RPC and AppChain Solutions Now Available On Microsoft Azure Marketplace"
                      />
                    </div>

                    <div className="thMuiBox-root-269 thjss313 thjss278">
                      <p className="thMuiTypography-root-234 thjss279 thMuiTypography-body1-236">
                        Interopability, Sustainability, Security, Speed
                      </p>
                      <h2 className="thMuiTypography-root-234 thjss280 thMuiTypography-h2-240 jss170">
                        High-Speed, Interoperable, and Sustainable Solutions with Trush Network
                      </h2>

                      <div className="thMuiBox-root-269 thjss314 thjss281">
                        <p>
                          <img
                            src="https://s3-frontend-strapi.s3.us-west-1.amazonaws.com/Ankr_x_Microsoft_blog_a3fedea096.png"
                            alt="Ankr x Microsoft blog.png"
                          />
                        </p>

                        <p>
                          Welcome aboard the Trush Network, an embodiment of the future of blockchain technology. Born amidst the global blockchain revolution of 2021, Trush Network sought to break the barriers limiting blockchain's growth and widespread adoption. With a vision of creating a user-friendly, scalable, and efficient blockchain platform, Trush stands out as a solution emphasizing sustainability and decentralization. Key to our unique offering is...
                        </p>
                      </div>
                      <section className="thMuiPaper-root-173 thjss315 thMuiPaper-elevation0-176">
                        <div className="thMuiBox-root-269 thjss321 thjss282 thjss316">
                          <img
                            className="blog-author-icon"
                            src={TrushIcon}
                            alt="Trush Team "
                          />
                          <p className="thMuiTypography-root-234 thjss318 thMuiTypography-body1-236 jss170">
                            Trush Team{" "}
                          </p>
                          <p className="thMuiTypography-root-234 thjss318 thjss320 thjss319 thMuiTypography-body1-236">
                            June 30, 2023
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </span>
              </Link>
            </section>
          </div>
        </div>
      </section>
    );
}

export default MainBlog;
