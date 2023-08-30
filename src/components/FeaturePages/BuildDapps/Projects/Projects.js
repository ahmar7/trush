import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function ProjectSwipe() {
  return (
    <div className="project-sw">
      <div className="Usecases_section__idiY6" id="slider">
        <a
          className="Button_button__Wx62k Button_size-xs__ucLSX Button_color-white__WRROn Button_background-dark-cyan__BT+yU Usecases_buttonCategory__eixDl btn-leverage"
          href="https://trush-foundation.gitbook.io/trush-network/use-cases/introduction-to-use-cases" target="_blank"
        >
          <span>
            <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-600__xD5tQ Typography_line-height-150__1QAw-" style={{ "color": "white", "font-weight": "bold" }}>
              Future on Trush
            </div>
          </span>
        </a>
        <div className="Usecases_headTitle__bkrB-">
          <div className="Usecases_line__88Mr-" />
          <div
            className="Typography_font-size-xl__X+CRm Typography_color-white__0vcsJ Typography_weight-700__3PDWn Typography_line-height-120__+PGc9 Usecases_title__UBpIL"
            style={{ opacity: 1 }}
          >
            Elevate Your Experience with <span className="jss170">Trush-Enabled</span> Projects
          </div>
          <div className="Usecases_line__88Mr- Usecases_lineFlip__FnBpH" />
        </div>
      </div>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          1040: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 1.5,
          },
          200: {
            slidesPerView: 1.2,
          },
        }}
        effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        // loop={true}
        // slidesPerView={1.1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 2.5,
        }}
        spaceBetween={40}
        initialSlide={2}
        centeredSlides={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div className="slide-content with-shadow">
            <img
              src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0a4_guild-of-guardians%20.jpg"
              loading="lazy"
              alt="Guild of guardians"
              sizes="(max-width: 991px) 94vw, 100vw"
              srcSet="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0a4_guild-of-guardians%2520-p-500.jpeg 500w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0a4_guild-of-guardians%2520-p-800.jpeg 800w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0a4_guild-of-guardians%20.jpg 859w"
              className="slider-img"
            />
            <div className="lens-15" />
            <div className="powered-content">
              <div className="powerered-category">P2P Lending and Borrowing Platform</div>
              <div className="powered-logo-wrapper">
                <img
                  src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c02f_Guild_Logo_One-removebg-preview.png"
                  loading="lazy"
                  alt="Guild of guardians"
                  sizes="(max-width: 479px) 200px, 300px"
                  srcSet="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c02f_Guild_Logo_One-removebg-preview-p-500.png 500w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c02f_Guild_Logo_One-removebg-preview-p-800.png 800w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c02f_Guild_Logo_One-removebg-preview.png 1044w"
                  className="powered-logo"
                />
              </div>
              <div className="powered-btn-wrapper">
                <a
                  href="https://www.immutable.com/play/guild-of-guardians"
                  className="btn btn-line-white w-button"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content with-shadow">
            <img
              src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0b6_illuvium.jpg"
              loading="lazy"
              alt="Illuvium partner profile"
              sizes="(max-width: 991px) 94vw, 100vw"
              srcSet="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0b6_illuvium-p-500.jpeg 500w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0b6_illuvium-p-800.jpeg 800w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0b6_illuvium.jpg 859w"
              className="slider-img"
            />
            <div className="lens-15" />
            <div className="powered-content">
              <div className="powerered-category">Stablecoin & Synthetic Asset Platform</div>
              <div className="powered-logo-wrapper">
                <img
                  src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9bd7b_illuvium-white.svg"
                  loading="lazy"
                  alt="Illuvium partner profile"
                  className="powered-logo"
                />
              </div>
              <div className="powered-btn-wrapper">
                <a
                  href="https://www.immutable.com/play/illuvium"
                  className="btn btn-line-white w-button"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content with-shadow">
            <img
              src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0da_gods-unchained.jpg"
              loading="lazy"
              alt="Gods Unchained"
              sizes="(max-width: 991px) 94vw, 100vw"
              srcSet="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0da_gods-unchained-p-500.jpeg 500w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0da_gods-unchained-p-800.jpeg 800w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c0da_gods-unchained.jpg 859w"
              className="slider-img"
            />
            <div className="lens-15" />
            <div className="powered-content">
              <div className="powerered-category">Asset Tokenization Platform</div>
              <div className="powered-logo-wrapper">
                <img
                  src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/6493ca5469554ce772ddddfd_logo_gu_white.png"
                  loading="lazy"
                  alt="Gods Unchained"
                  sizes="(max-width: 479px) 200px, 300px"
                  srcSet="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/6493ca5469554ce772ddddfd_logo_gu_white-p-500.png 500w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/6493ca5469554ce772ddddfd_logo_gu_white-p-800.png 800w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/6493ca5469554ce772ddddfd_logo_gu_white-p-1080.png 1080w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/6493ca5469554ce772ddddfd_logo_gu_white-p-1600.png 1600w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/6493ca5469554ce772ddddfd_logo_gu_white-p-2000.png 2000w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/6493ca5469554ce772ddddfd_logo_gu_white-p-2600.png 2600w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/6493ca5469554ce772ddddfd_logo_gu_white-p-3200.png 3200w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/6493ca5469554ce772ddddfd_logo_gu_white.png 4159w"
                  className="powered-logo"
                />
              </div>
              <div className="powered-btn-wrapper">
                <a
                  href="https://www.immutable.com/play/gods-unchained"
                  className="btn btn-line-white w-button"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content with-shadow">
            <img
              src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e3_MC_IMX_Website_480x690.png"
              loading="lazy"
              alt=""
              className="slider-img"
            />
            <div className="lens-15" />
            <div className="powered-content">
              <div className="powerered-category">Cross-Chain Interoperability Platform</div>
              <div className="powered-logo-wrapper">
                <img
                  src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e1_MetalCore_LOGO_2_MAIN.png"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 200px, 300px"
                  srcSet="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e1_MetalCore_LOGO_2_MAIN-p-500.png 500w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e1_MetalCore_LOGO_2_MAIN-p-800.png 800w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e1_MetalCore_LOGO_2_MAIN-p-1080.png 1080w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e1_MetalCore_LOGO_2_MAIN-p-1600.png 1600w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e1_MetalCore_LOGO_2_MAIN-p-2000.png 2000w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e1_MetalCore_LOGO_2_MAIN-p-2600.png 2600w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e1_MetalCore_LOGO_2_MAIN-p-3200.png 3200w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c4e1_MetalCore_LOGO_2_MAIN.png 4414w"
                  className="powered-logo"
                />
              </div>
              <div className="powered-btn-wrapper">
                <a
                  href="https://www.immutable.com/play/metalcore"
                  className="btn btn-line-white w-button"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content with-shadow">
            <img
              src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c500_art-480x690.jpeg"
              loading="lazy"
              alt=""
              sizes="(max-width: 991px) 94vw, 100vw"
              srcSet="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c500_art-480x690-p-500.jpeg 500w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c500_art-480x690-p-800.jpeg 800w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c500_art-480x690-p-1080.jpeg 1080w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c500_art-480x690.jpeg 2000w"
              className="slider-img"
            />
            <div className="lens-15" />
            <div className="powered-content">
              <div className="powerered-category">Decentralized Insurance Platform</div>
              <div className="powered-logo-wrapper">
                <img
                  src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c505_Shardbound%20logo%20stack.png"
                  loading="lazy"
                  alt=""
                  className="powered-logo"
                />
              </div>
              <div className="powered-btn-wrapper">
                <a
                  href="https://www.immutable.com/play/shardbound"
                  className="btn btn-line-white w-button"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content with-shadow">
            <img
              src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c110_Carousel-wagmi%20(1).png"
              loading="lazy"
              alt="WAGMI Games"
              className="slider-img"
            />
            <div className="lens-15" />
            <div className="powered-content">
              <div className="powerered-category">IDO Launchpad</div>
              <div className="powered-logo-wrapper">
                <img
                  src="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c122_61a2783914defdcd0c1f136e_wagmi-logo-trans-w-gamelines.png"
                  loading="lazy"
                  alt="WAGMI Games"
                  sizes="(max-width: 479px) 200px, 300px"
                  srcSet="https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c122_61a2783914defdcd0c1f136e_wagmi-logo-trans-w-gamelines-p-500.png 500w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c122_61a2783914defdcd0c1f136e_wagmi-logo-trans-w-gamelines-p-800.png 800w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c122_61a2783914defdcd0c1f136e_wagmi-logo-trans-w-gamelines-p-1080.png 1080w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c122_61a2783914defdcd0c1f136e_wagmi-logo-trans-w-gamelines-p-1600.png 1600w, https://assets-global.website-files.com/646557ee455c3e16e4a9bcb9/646557ee455c3e16e4a9c122_61a2783914defdcd0c1f136e_wagmi-logo-trans-w-gamelines.png 1758w"
                  className="powered-logo"
                />
              </div>
              <div className="powered-btn-wrapper">
                <a
                  href="https://www.immutable.com/play/wagmi-games"
                  className="btn btn-line-white w-button"
                >
                  Coming Soon
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default ProjectSwipe;
