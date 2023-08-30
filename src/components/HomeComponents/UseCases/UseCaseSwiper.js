import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./UseCases.css";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/bundle";

import "swiper/css/navigation";
import "swiper/css/parallax";

SwiperCore.use([EffectCoverflow, Pagination]);
const UseCaseSwiper = () => {
  const [width, setWidth] = useState("");

  let changeWin = () => {
    setWidth(window.innerWidth + 1);

    setTimeout(() => {
      setWidth(window.innerWidth);
    }, 550);
  };
  let resizeWin = () => {
    setWidth("100%");
  };
  window.addEventListener("resize", resizeWin);

  return (
    <div className="use-case-s">
      <div className="Usecases_section__idiY6" id="slider">
        {/*
        <a
          className="Button_button__Wx62k Button_size-xs__ucLSX Button_color-white__WRROn Button_background-dark-cyan__BT+yU Usecases_buttonCategory__eixDl btn-leverage"
          href="https://trush-foundation.gitbook.io/trush-network/use-cases/introduction-to-use-cases"
          target="_blank"
        >
          <span>
            <div
              className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-600__xD5tQ Typography_line-height-150__1QAw-"
              style={{ color: "white", "font-weight": "bold" }}
            >
              How is Trush leveraged?
            </div>
          </span>
        </a>
        */}
        <div className="Usecases_headTitle__bkrB-">
          <div
            className="Typography_font-size-xl__X+CRm mbl-fer Typography_color-white__0vcsJ Typography_weight-700__3PDWn "
            style={{ opacity: 1 }}
          >
            Solutions to Drive Innovation
          </div>
        </div>
      </div>
      <div>
        <Swiper
          slideToClickedSlide={true}
          effect="slide"
          grabCursor={true}
          initialSlide={2}
          modules={[Pagination]}
          onSlideChangeTransitionEnd={changeWin}
          speed={800}
          slidesPerGroupAuto={true}
          freeMode={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={"auto"}
          style={{
            width: width,
          }}
        >
          <SwiperSlide>
            <div className="UsecaseSliderSlide_slide__9MGqY swpi">
              <img
                className="UsecaseSliderSlide_image__nYAMK"
                src="https://lightlink.io/static/media/1.c06db10eac2d1b36cf6f.png"
                alt="Enterprise"
              />
              <div className="Typography_font-size-sl__KU7W4 Typography_color-white__0vcsJ Typography_weight-700__3PDWn Typography_line-height-162__m4nqy UsecaseSliderSlide_name__0C6V4">
                DeFi Apps
              </div>
              <div className="UsecaseSliderSlide_learnMore__e36SN">
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy no-active">
                  Learn more
                </div>
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy active-swipe">
                  Unleash the power of decentralized finance with Trush. Our
                  scalable, efficient, and low-cost platform enables the
                  creation of diverse DeFi applications, from Decentralized
                  Exchanges to yield farming platforms. Experience faster, more
                  transparent, and accessible financial services, free from the
                  confines of traditional intermediaries.
                </div>

                <svg
                  className="UsecaseSliderSlide_arrowRight__2LdWa"
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.793 5.29303C12.9805 5.10556 13.2348 5.00024 13.5 5.00024C13.7652 5.00024 14.0195 5.10556 14.207 5.29303L18.207 9.29303C18.3945 9.48056 18.4998 9.73487 18.4998 10C18.4998 10.2652 18.3945 10.5195 18.207 10.707L14.207 14.707C14.0184 14.8892 13.7658 14.99 13.5036 14.9877C13.2414 14.9854 12.9906 14.8803 12.8052 14.6948C12.6198 14.5094 12.5146 14.2586 12.5123 13.9964C12.51 13.7342 12.6108 13.4816 12.793 13.293L15.086 11H3.5C3.23478 11 2.98043 10.8947 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10C2.5 9.73481 2.60536 9.48046 2.79289 9.29292C2.98043 9.10539 3.23478 9.00003 3.5 9.00003H15.086L12.793 6.70703C12.6055 6.5195 12.5002 6.26519 12.5002 6.00003C12.5002 5.73487 12.6055 5.48056 12.793 5.29303Z"
                    fill="var(--color-black)"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="UsecaseSliderSlide_slide__9MGqY">
              <img
                className="UsecaseSliderSlide_image__nYAMK"
                src="https://lightlink.io/static/media/2.b1dfaf246b2f57863e82.png"
                alt="Gaming"
              />
              <div className="Typography_font-size-sl__KU7W4 Typography_color-white__0vcsJ Typography_weight-700__3PDWn Typography_line-height-162__m4nqy UsecaseSliderSlide_name__0C6V4">
                Chain Aggregators
              </div>
              <div className="UsecaseSliderSlide_learnMore__e36SN">
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy no-active">
                  Learn more
                </div>
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy active-swipe">
                  Break the barriers of isolated blockchain networks with Trush.
                  Our platform fosters seamless cross-chain interoperability,
                  enabling various blockchain networks to communicate and
                  interact efficiently. Enjoy the freedom of cross-chain asset
                  transfers, data sharing, and smart contract operations, all
                  within a unified ecosystem.
                </div>
                <svg
                  className="UsecaseSliderSlide_arrowRight__2LdWa"
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.793 5.29303C12.9805 5.10556 13.2348 5.00024 13.5 5.00024C13.7652 5.00024 14.0195 5.10556 14.207 5.29303L18.207 9.29303C18.3945 9.48056 18.4998 9.73487 18.4998 10C18.4998 10.2652 18.3945 10.5195 18.207 10.707L14.207 14.707C14.0184 14.8892 13.7658 14.99 13.5036 14.9877C13.2414 14.9854 12.9906 14.8803 12.8052 14.6948C12.6198 14.5094 12.5146 14.2586 12.5123 13.9964C12.51 13.7342 12.6108 13.4816 12.793 13.293L15.086 11H3.5C3.23478 11 2.98043 10.8947 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10C2.5 9.73481 2.60536 9.48046 2.79289 9.29292C2.98043 9.10539 3.23478 9.00003 3.5 9.00003H15.086L12.793 6.70703C12.6055 6.5195 12.5002 6.26519 12.5002 6.00003C12.5002 5.73487 12.6055 5.48056 12.793 5.29303Z"
                    fill="var(--color-black)"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="UsecaseSliderSlide_slide__9MGqY">
              <img
                className="UsecaseSliderSlide_image__nYAMK"
                src="https://lightlink.io/static/media/3.cbb6aa90e9b933aa6037.png"
                alt="Gaming"
              />
              <div className="Typography_font-size-sl__KU7W4 Typography_color-white__0vcsJ Typography_weight-700__3PDWn Typography_line-height-162__m4nqy UsecaseSliderSlide_name__0C6V4">
                Govt. Services
              </div>
              <div className="UsecaseSliderSlide_learnMore__e36SN">
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy no-active">
                  Learn more
                </div>
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy active-swipe">
                  Revolutionize the public sector with Trush. Our blockchain
                  platform enhances transparency, efficiency, and security in
                  government services. From tamper-proof land registries to
                  transparent public voting systems, Trush can significantly
                  reduce bureaucracy and administrative costs while promoting
                  public trust.
                </div>
                <svg
                  className="UsecaseSliderSlide_arrowRight__2LdWa"
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.793 5.29303C12.9805 5.10556 13.2348 5.00024 13.5 5.00024C13.7652 5.00024 14.0195 5.10556 14.207 5.29303L18.207 9.29303C18.3945 9.48056 18.4998 9.73487 18.4998 10C18.4998 10.2652 18.3945 10.5195 18.207 10.707L14.207 14.707C14.0184 14.8892 13.7658 14.99 13.5036 14.9877C13.2414 14.9854 12.9906 14.8803 12.8052 14.6948C12.6198 14.5094 12.5146 14.2586 12.5123 13.9964C12.51 13.7342 12.6108 13.4816 12.793 13.293L15.086 11H3.5C3.23478 11 2.98043 10.8947 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10C2.5 9.73481 2.60536 9.48046 2.79289 9.29292C2.98043 9.10539 3.23478 9.00003 3.5 9.00003H15.086L12.793 6.70703C12.6055 6.5195 12.5002 6.26519 12.5002 6.00003C12.5002 5.73487 12.6055 5.48056 12.793 5.29303Z"
                    fill="var(--color-black)"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="UsecaseSliderSlide_slide__9MGqY">
              <img
                className="UsecaseSliderSlide_image__nYAMK"
                src="https://lightlink.io/static/media/4.7e2755c9ad50add8341f.png"
                alt="Gaming"
              />
              <div className="Typography_font-size-sl__KU7W4 Typography_color-white__0vcsJ Typography_weight-700__3PDWn Typography_line-height-162__m4nqy UsecaseSliderSlide_name__0C6V4">
                Supply Chains
              </div>
              <div className="UsecaseSliderSlide_learnMore__e36SN">
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy no-active">
                  Learn more
                </div>
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy active-swipe">
                  Transform traditional supply chain systems with Trush. By
                  leveraging our transparent and immutable ledger, every
                  transaction and movement can be accurately recorded and
                  traced, eliminating fraud and improving efficiency. Step into
                  a new era of supply chain management with enhanced visibility
                  and control.
                </div>
                <svg
                  className="UsecaseSliderSlide_arrowRight__2LdWa"
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.793 5.29303C12.9805 5.10556 13.2348 5.00024 13.5 5.00024C13.7652 5.00024 14.0195 5.10556 14.207 5.29303L18.207 9.29303C18.3945 9.48056 18.4998 9.73487 18.4998 10C18.4998 10.2652 18.3945 10.5195 18.207 10.707L14.207 14.707C14.0184 14.8892 13.7658 14.99 13.5036 14.9877C13.2414 14.9854 12.9906 14.8803 12.8052 14.6948C12.6198 14.5094 12.5146 14.2586 12.5123 13.9964C12.51 13.7342 12.6108 13.4816 12.793 13.293L15.086 11H3.5C3.23478 11 2.98043 10.8947 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10C2.5 9.73481 2.60536 9.48046 2.79289 9.29292C2.98043 9.10539 3.23478 9.00003 3.5 9.00003H15.086L12.793 6.70703C12.6055 6.5195 12.5002 6.26519 12.5002 6.00003C12.5002 5.73487 12.6055 5.48056 12.793 5.29303Z"
                    fill="var(--color-black)"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="UsecaseSliderSlide_slide__9MGqY">
              <img
                className="UsecaseSliderSlide_image__nYAMK"
                src="	https://lightlink.io/static/media/5.d67b7a3138470bfd49d7.png"
                alt="Gaming"
              />
              <div className="Typography_font-size-sl__KU7W4 Typography_color-white__0vcsJ Typography_weight-700__3PDWn Typography_line-height-162__m4nqy UsecaseSliderSlide_name__0C6V4">
                DAOs
              </div>
              <div className="UsecaseSliderSlide_learnMore__e36SN">
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy no-active">
                  Learn more
                </div>
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy active-swipe">
                  Pioneer a new paradigm of organizational management with
                  Trush. Our robust smart contract capabilities allow for the
                  creation and management of Decentralized Autonomous
                  Organizations (DAOs), enabling efficient, transparent, and
                  democratic decision-making processes without the need for a
                  central authority.
                </div>
                <svg
                  className="UsecaseSliderSlide_arrowRight__2LdWa"
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.793 5.29303C12.9805 5.10556 13.2348 5.00024 13.5 5.00024C13.7652 5.00024 14.0195 5.10556 14.207 5.29303L18.207 9.29303C18.3945 9.48056 18.4998 9.73487 18.4998 10C18.4998 10.2652 18.3945 10.5195 18.207 10.707L14.207 14.707C14.0184 14.8892 13.7658 14.99 13.5036 14.9877C13.2414 14.9854 12.9906 14.8803 12.8052 14.6948C12.6198 14.5094 12.5146 14.2586 12.5123 13.9964C12.51 13.7342 12.6108 13.4816 12.793 13.293L15.086 11H3.5C3.23478 11 2.98043 10.8947 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10C2.5 9.73481 2.60536 9.48046 2.79289 9.29292C2.98043 9.10539 3.23478 9.00003 3.5 9.00003H15.086L12.793 6.70703C12.6055 6.5195 12.5002 6.26519 12.5002 6.00003C12.5002 5.73487 12.6055 5.48056 12.793 5.29303Z"
                    fill="var(--color-black)"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="UsecaseSliderSlide_slide__9MGqY">
              <img
                className="UsecaseSliderSlide_image__nYAMK"
                src="https://lightlink.io/static/media/2.b1dfaf246b2f57863e82.png"
                alt="Gaming"
              />
              <div className="Typography_font-size-sl__KU7W4 Typography_color-white__0vcsJ Typography_weight-700__3PDWn Typography_line-height-162__m4nqy UsecaseSliderSlide_name__0C6V4">
                IoT Apps
              </div>
              <div className="UsecaseSliderSlide_learnMore__e36SN">
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy no-active">
                  Learn more
                </div>
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy active-swipe">
                  Elevate the potential of the Internet of Things (IoT) with
                  Trush. Our platform provides a secure, transparent, and
                  efficient network for managing IoT devices and data, ensuring
                  high data integrity and seamless device interactions. Welcome
                  to the next phase of device connectivity and data management.
                </div>
                <svg
                  className="UsecaseSliderSlide_arrowRight__2LdWa"
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.793 5.29303C12.9805 5.10556 13.2348 5.00024 13.5 5.00024C13.7652 5.00024 14.0195 5.10556 14.207 5.29303L18.207 9.29303C18.3945 9.48056 18.4998 9.73487 18.4998 10C18.4998 10.2652 18.3945 10.5195 18.207 10.707L14.207 14.707C14.0184 14.8892 13.7658 14.99 13.5036 14.9877C13.2414 14.9854 12.9906 14.8803 12.8052 14.6948C12.6198 14.5094 12.5146 14.2586 12.5123 13.9964C12.51 13.7342 12.6108 13.4816 12.793 13.293L15.086 11H3.5C3.23478 11 2.98043 10.8947 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10C2.5 9.73481 2.60536 9.48046 2.79289 9.29292C2.98043 9.10539 3.23478 9.00003 3.5 9.00003H15.086L12.793 6.70703C12.6055 6.5195 12.5002 6.26519 12.5002 6.00003C12.5002 5.73487 12.6055 5.48056 12.793 5.29303Z"
                    fill="var(--color-black)"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="UsecaseSliderSlide_slide__9MGqY">
              <img
                className="UsecaseSliderSlide_image__nYAMK"
                src="https://lightlink.io/static/media/2.b1dfaf246b2f57863e82.png"
                alt="Gaming"
              />
              <div className="Typography_font-size-sl__KU7W4 Typography_color-white__0vcsJ Typography_weight-700__3PDWn Typography_line-height-162__m4nqy UsecaseSliderSlide_name__0C6V4">
                Global Payments
              </div>
              <div className="UsecaseSliderSlide_learnMore__e36SN">
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy no-active">
                  Learn more
                </div>
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy active-swipe">
                  Make cross-border transactions faster, cheaper, and more
                  secure with Trush. Our high scalability and low transaction
                  costs make us the go-to platform for global payments.
                  Experience financial inclusion like never before as Trush
                  bridges the gap between traditional and decentralized
                  financial systems.
                </div>
                <svg
                  className="UsecaseSliderSlide_arrowRight__2LdWa"
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.793 5.29303C12.9805 5.10556 13.2348 5.00024 13.5 5.00024C13.7652 5.00024 14.0195 5.10556 14.207 5.29303L18.207 9.29303C18.3945 9.48056 18.4998 9.73487 18.4998 10C18.4998 10.2652 18.3945 10.5195 18.207 10.707L14.207 14.707C14.0184 14.8892 13.7658 14.99 13.5036 14.9877C13.2414 14.9854 12.9906 14.8803 12.8052 14.6948C12.6198 14.5094 12.5146 14.2586 12.5123 13.9964C12.51 13.7342 12.6108 13.4816 12.793 13.293L15.086 11H3.5C3.23478 11 2.98043 10.8947 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10C2.5 9.73481 2.60536 9.48046 2.79289 9.29292C2.98043 9.10539 3.23478 9.00003 3.5 9.00003H15.086L12.793 6.70703C12.6055 6.5195 12.5002 6.26519 12.5002 6.00003C12.5002 5.73487 12.6055 5.48056 12.793 5.29303Z"
                    fill="var(--color-black)"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="UsecaseSliderSlide_slide__9MGqY">
              <img
                className="UsecaseSliderSlide_image__nYAMK"
                src="https://lightlink.io/static/media/2.b1dfaf246b2f57863e82.png"
                alt="Gaming"
              />
              <div className="Typography_font-size-sl__KU7W4 Typography_color-white__0vcsJ Typography_weight-700__3PDWn Typography_line-height-162__m4nqy UsecaseSliderSlide_name__0C6V4">
                Health Data
              </div>
              <div className="UsecaseSliderSlide_learnMore__e36SN">
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy no-active">
                  Learn more
                </div>
                <div className="Typography_font-size-m__NA6mG Typography_color-light-cyan__8c+gR Typography_weight-500__FcutR Typography_line-height-162__m4nqy active-swipe">
                  Harness the power of Trush for improved healthcare data
                  management. With our secure, transparent, and interoperable
                  system, patient data can be managed more effectively and
                  ethically. Enhance privacy, increase data security, and
                  streamline data sharing for research, ultimately improving
                  patient outcomes and healthcare policies.
                </div>
                <svg
                  className="UsecaseSliderSlide_arrowRight__2LdWa"
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.793 5.29303C12.9805 5.10556 13.2348 5.00024 13.5 5.00024C13.7652 5.00024 14.0195 5.10556 14.207 5.29303L18.207 9.29303C18.3945 9.48056 18.4998 9.73487 18.4998 10C18.4998 10.2652 18.3945 10.5195 18.207 10.707L14.207 14.707C14.0184 14.8892 13.7658 14.99 13.5036 14.9877C13.2414 14.9854 12.9906 14.8803 12.8052 14.6948C12.6198 14.5094 12.5146 14.2586 12.5123 13.9964C12.51 13.7342 12.6108 13.4816 12.793 13.293L15.086 11H3.5C3.23478 11 2.98043 10.8947 2.79289 10.7071C2.60536 10.5196 2.5 10.2652 2.5 10C2.5 9.73481 2.60536 9.48046 2.79289 9.29292C2.98043 9.10539 3.23478 9.00003 3.5 9.00003H15.086L12.793 6.70703C12.6055 6.5195 12.5002 6.26519 12.5002 6.00003C12.5002 5.73487 12.6055 5.48056 12.793 5.29303Z"
                    fill="var(--color-black)"
                  />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default UseCaseSwiper;
