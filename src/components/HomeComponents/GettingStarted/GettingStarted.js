import React from "react";
import "./GettingStarted.css";
import { Link } from 'react-router-dom';
const GettingStarted = () => {
  return (
    <section className="dev-sec bg-color-background">
      <div className=" MuiContainer-root-81 MuiContainer-maxWidthLg-87 py-6">
        <div className="flex items-start justify-between pb-4 md:pb-10 undefined">
          <div>
            <h2 className="main__title jss170">
              Getting Started
            </h2>
          </div>
        </div>
        <div className="text-base">
          <div className='bg-color-primary px-4 py-4 md:p-8 flex items-center bg-no-repeat bg-right bg-auto md:bg-[url("/web3/images/argus_bg.webp")] bg-[url("/web3/images/argus_bg_md.webp")]'>
            <img
              alt="Guided_Onboarding"
              loading="lazy"
              width={120}
              height={120}
              decoding="async"
              data-nimg={1}
              className="hidden md:block mr-4 w-16"
              style={{ color: "transparent" }}
              src="https://www.cobo.com/web3/_next/image?url=%2Fweb3%2F_next%2Fstatic%2Fmedia%2FGuided-Onboarding.9d00ce94.png&w=256&q=75"
            />
            <div className="text-white grid gap-2">
              <p className="md:text-2xl flex items-center font-Gotham-SSm-Medium">
                Quick Start
                <span className="bg-[#38F2B9] text-color-text-primary text-xs md:text-sm px-1.5 py-0.5 ml-4 font-weight-bold">
                  Recommended
                </span>
              </p>
              <p className="font-Gotham-SSm-Book opacity-60 text-xs md:text-base leading-5">
                Unravel Trush swiftly. Browse, read, watch, and connect – your quickest path to understanding Trush.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-wrap">
            <div className="md:border-0 border-[#E9EBED] border-r border-b p-3 md:p-8 w-1/2 md:w-1/4  bg-no-repeat bg-left false">
              <div className="text-xs md:text-base text-[#28304D] mb-4 md:mb-14 opacity-20 font-Gotham-SSm-Medium">
                Step{" "}
                <p className="text-3xl md:text-[42px] mt-1 md:mt-2 font-bold font-Gotham-SSm-Bold">
                  01
                </p>
              </div>
              <span className="flex items-center text-sm md:text-xl font-semibold font-Gotham-SSm-Medium">
                Explore the Website
              </span>
              <a
                href="/m/contact?locale=en"
                target="_self"
                className="inline-block no-bgs md:hidden font-Gotham-SSm-Medium font-semibold text-color-primary text-sm md:text-xl"
              >
                Contact Us
                <img
                  alt="箭头"
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  data-nimg={1}
                  className="ml-2 w-4 md:w-atuo inline-block"
                  style={{ color: "transparent" }}
                  src="https://www.cobo.com/web3/_next/image?url=%2Fweb3%2F_next%2Fstatic%2Fmedia%2F%E5%9C%86%E5%BD%A2%E7%AE%AD%E5%A4%B4_blue.204667bc.png&w=96&q=75"
                />
              </a>
            </div>
            <div className='md:border-0 border-[#E9EBED] false border-b p-3 md:p-8 w-1/2 md:w-1/4  bg-no-repeat bg-left md:bg-[length:12px_260px] md:bg-[url("/web3/images/line.webp")]'>
              <div className="text-xs md:text-base text-[#28304D] mb-4 md:mb-14 opacity-20 font-Gotham-SSm-Medium">
                Step{" "}
                <p className="text-3xl md:text-[42px] mt-1 md:mt-2 font-bold font-Gotham-SSm-Bold">
                  02
                </p>
              </div>
              <span className="flex items-center text-sm md:text-xl font-semibold font-Gotham-SSm-Medium">
                Read the Litepaper
              </span>
            </div>
            <div className='md:border-0 border-[#E9EBED] border-r false p-3 md:p-8 w-1/2 md:w-1/4  bg-no-repeat bg-left md:bg-[length:12px_260px] md:bg-[url("/web3/images/line.webp")]'>
              <div className="text-xs md:text-base text-[#28304D] mb-4 md:mb-14 opacity-20 font-Gotham-SSm-Medium">
                Step{" "}
                <p className="text-3xl md:text-[42px] mt-1 md:mt-2 font-bold font-Gotham-SSm-Bold">
                  03
                </p>
              </div>
              <span className="flex items-center text-sm md:text-xl font-semibold font-Gotham-SSm-Medium">
                Watch Explainer Videos
              </span>
            </div>
            <div className='md:border-0 border-[#E9EBED] false false p-3 md:p-8 w-1/2 md:w-1/4  bg-no-repeat bg-left md:bg-[length:12px_260px] md:bg-[url("/web3/images/line.webp")]'>
              <div className="text-xs md:text-base text-[#28304D] mb-4 md:mb-14 opacity-20 font-Gotham-SSm-Medium">
                Step{" "}
                <p className="text-3xl md:text-[42px] mt-1 md:mt-2 font-bold font-Gotham-SSm-Bold">
                  04
                </p>
              </div>
              <span className="flex items-center text-sm md:text-xl font-semibold font-Gotham-SSm-Medium">
                Join the Community
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-base">
          <div className='bg-[#28304D] px-3 py-4 md:p-8 flex items-center bg-no-repeat bg-right bg-auto md:bg-[url("/web3/images/argus_bg.webp")] bg-[url("/web3/images/argus_bg_md.webp")]'>
            <img
              alt="Guided_Onboarding"
              loading="lazy"
              width={120}
              height={120}
              decoding="async"
              data-nimg={1}
              className="hidden md:block mr-4 w-16"
              style={{ color: "transparent" }}
              src="https://www.cobo.com/web3/_next/image?url=%2Fweb3%2F_next%2Fstatic%2Fmedia%2FSelf-Start_icon.17202cf5.png&w=256&q=75"
            />
            <div className="text-white grid gap-2">
              <p className="md:text-2xl font-Gotham-SSm-Medium">Beyond the Surface</p>
              <p className="font-Gotham-SSm-Book opacity-60 text-xs md:text-base">
                For Trush enthusiasts: Grasp our Whitepaper, unravel GitHub code, keep tabs via our blog, and experiment hands-on.
              </p>
            </div>
          </div>
          <div className="bg-white flex flex-wrap">
            <div className="md:border-0 border-[#E9EBED] border-r border-b p-3 md:p-8 w-1/2 md:w-1/4  bg-no-repeat bg-left false">
              <div className="text-xs md:text-base text-[#28304D] mb-4 md:mb-14 opacity-20 font-Gotham-SSm-Medium">
                Step{" "}
                <p className="text-3xl md:text-[42px] mt-1 md:mt-2 font-bold font-Gotham-SSm-Bold">
                  01
                </p>
              </div>
              <span className="flex items-center text-sm md:text-xl font-semibold font-Gotham-SSm-Medium">
                Read the Whitepaper
              </span>
              <button className="inline-block no-bgs md:hidden text-left font-Gotham-SSm-Medium font-semibold text-color-primary text-sm md:text-xl">
                Launch App &amp; Sign Up
                <img
                  alt="箭头"
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  data-nimg={1}
                  className="ml-2 w-4 md:w-atuo inline-block"
                  style={{ color: "transparent" }}
                  src="https://www.cobo.com/web3/_next/image?url=%2Fweb3%2F_next%2Fstatic%2Fmedia%2F%E5%9C%86%E5%BD%A2%E7%AE%AD%E5%A4%B4_blue.204667bc.png&w=96&q=75"
                />
              </button>
            </div>
            <div className='md:border-0 border-[#E9EBED] false border-b p-3 md:p-8 w-1/2 md:w-1/4  bg-no-repeat bg-left md:bg-[length:12px_260px] md:bg-[url("/web3/images/line.webp")]'>
              <div className="text-xs md:text-base text-[#28304D] mb-4 md:mb-14 opacity-20 font-Gotham-SSm-Medium">
                Step{" "}
                <p className="text-3xl md:text-[42px] mt-1 md:mt-2 font-bold font-Gotham-SSm-Bold">
                  02
                </p>
              </div>
              <span className="flex items-center text-sm md:text-xl font-semibold font-Gotham-SSm-Medium">
                Explore on GitHub
              </span>
            </div>
            <div className='md:border-0 border-[#E9EBED] border-r false p-3 md:p-8 w-1/2 md:w-1/4  bg-no-repeat bg-left md:bg-[length:12px_260px] md:bg-[url("/web3/images/line.webp")]'>
              <div className="text-xs md:text-base text-[#28304D] mb-4 md:mb-14 opacity-20 font-Gotham-SSm-Medium">
                Step{" "}
                <p className="text-3xl md:text-[42px] mt-1 md:mt-2 font-bold font-Gotham-SSm-Bold">
                  03
                </p>
              </div>
              <Link to="/blog" className="hidden no-bgs md:inline-block font-Gotham-SSm-Medium font-semibold text-color-primary text-sm md:text-xl text-left">
                Follow the Blog
                <img
                  alt="箭头"
                  loading="lazy"
                  width={40}
                  height={40}
                  decoding="async"
                  data-nimg={1}
                  className="ml-2 w-4 md:w-atuo inline-block"
                  style={{ color: "transparent" }}
                  src="https://www.cobo.com/web3/_next/image?url=%2Fweb3%2F_next%2Fstatic%2Fmedia%2F%E5%9C%86%E5%BD%A2%E7%AE%AD%E5%A4%B4_blue.204667bc.png&w=96&q=75"
                />
              </Link>
            </div>
            <div className='md:border-0 border-[#E9EBED] false false p-3 md:p-8 w-1/2 md:w-1/4  bg-no-repeat bg-left md:bg-[length:12px_260px] md:bg-[url("/web3/images/line.webp")]'>
              <div className="text-xs md:text-base text-[#28304D] mb-4 md:mb-14 opacity-20 font-Gotham-SSm-Medium">
                Step{" "}
                <p className="text-3xl md:text-[42px] mt-1 md:mt-2 font-bold font-Gotham-SSm-Bold">
                  04
                </p>
              </div>
              <span className="flex items-center text-sm md:text-xl font-semibold font-Gotham-SSm-Medium">
                Experiment on the Network
                <span className="bg-[#38F2B9] text-color-text-primary text-xs md:text-sm px-1.5 py-0.5 ml-4 font-weight-bold">
                  TBA
                </span>
              </span>
            </div>
          </div>
        </div>
        <p className="text-[#7E8394] mt-4 font-medium text-xs md:text-sm font-Gotham-SSm-Book">
          Please refer to the{" "}
          <a
            href="https://trush-foundation.gitbook.io/trush-network/"
            target="_blank"
            className="text-color-primary"
          >
            Trush Wiki
          </a>{" "}
          {/* */}to learn more or contact us at {/* */}{" "}
          <a href="mailto:info@trush.foundation" className="text-color-primary">
            info@trush.foundation
          </a>
          .
        </p>
      </div>
      <div className="hidden w-[300px] flex-col items-center shadow-lg border border-[#E9EBED] border-solid rounded-lg z-[1000] fixed bg-white top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-auto p-6">
        <div className="">
          <p className="font-Gotham-SSm-Medium flex flex-col items-center mb-4">
            Reminder
          </p>
          <p className="text-sm break-all">
            For the best user experience, we recommend that you visit the Argus
            official website on a PC at:{/* */}{" "}
            <span className="text-color-primary">
              https://argus.cobo.com/#/auth.
            </span>
          </p>
        </div>
        <button className="mt-4 py-2 px-5 md:py-4 md:px-8 font-medium text-center text-white rounded-lg bg-color-primary font-Gotham-SSm-Medium">
          OK
        </button>
      </div>
    </section>
  );
};

export default GettingStarted;
