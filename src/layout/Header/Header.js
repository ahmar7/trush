import React, { useState } from "react";
import "./Header.css";

import TrushLogo from "../../assets/img/trush-logo.png";

import { Link } from "react-router-dom";
const Header = () => {
  const [toggleMobileMenu, settoggleMobileMenu] = useState(false);
  const [MenuName, setMenuName] = useState("Menu");

  const [sideToggle, setsideToggle] = useState(false);
  const [fullFloat, setfullFloat] = useState(false);
  const [fullFloat2, setfullFloat2] = useState(false);
  const [mobileMenu, setmobileMenu] = useState(false);
  const [mobileMenu2, setmobileMenu2] = useState(false);
  const [mobileMenu3, setmobileMenu3] = useState(false);
  const [mobileMenu4, setmobileMenu4] = useState(false);
  window.addEventListener("scroll", function () {
    let header = this.document.querySelector(".MuiAppBar-positionFixed-18");

    header.classList.toggle("active-header", window.scrollY > 0);
  });
  let toggleSide = () => {
    if (sideToggle === true) {
      setsideToggle(false);
    } else {
      setsideToggle(true);
    }
  };
  let toggleFalse = () => {
    if (mobileMenu === false) {
      setmobileMenu(true);
    } else {
      setmobileMenu(false);
    }
    setfullFloat(false);
    setfullFloat2(false);
    setmobileMenu2(false);
    setmobileMenu3(false);
    setmobileMenu4(false);
  };
  let toggleTrue = () => {
    setmobileMenu(true);
    setmobileMenu2(false);
    setmobileMenu4(false);
    setfullFloat(false);
    setfullFloat2(false);
    setmobileMenu3(false);
  };
  let toggleFalse2 = () => {
    if (mobileMenu2 === false) {
      setmobileMenu2(true);
    } else {
      setmobileMenu2(false);
    }
    setfullFloat2(false);
    setfullFloat(false);
    setmobileMenu(false);
    setmobileMenu3(false);
    setmobileMenu4(false);
  };
  let toggleTrue2 = () => {
    setmobileMenu4(false);
    setmobileMenu(false);
    setfullFloat(false);
    setfullFloat2(false);
    setmobileMenu3(false);
    setmobileMenu2(true);
  };
  let toggleFalse3 = () => {
    if (mobileMenu3 === false) {
      setmobileMenu3(true);
    } else {
      setmobileMenu3(false);
    }
    setfullFloat(false);
    setmobileMenu(false);
    setfullFloat2(false);
    setmobileMenu2(false);
    setmobileMenu4(false);
  };
  let toggleTrue3 = () => {
    setmobileMenu(false);
    setfullFloat(false);
    setfullFloat2(false);
    setmobileMenu2(false);
    setmobileMenu3(true);
    setmobileMenu4(false);
  };
  let toggleFalse4 = () => {
    if (mobileMenu4 === false) {
      setmobileMenu4(true);
    } else {
      setmobileMenu4(false);
    }
    setfullFloat(false);
    setmobileMenu(false);
    setfullFloat2(false);
    setmobileMenu2(false);
    setmobileMenu3(false);
  };
  let toggleTrue4 = () => {
    setmobileMenu(false);
    setmobileMenu2(false);
    setmobileMenu3(false);
    setfullFloat2(false);
    setmobileMenu4(true);
    setfullFloat(false);
  };
  let toggleFull = () => {
    // if (fullFloat === false) {
    setfullFloat(true);
    // } else {
    // setfullFloat(false);
    // }
    setmobileMenu(false);
    setmobileMenu2(false);
    setmobileMenu3(false);
    setfullFloat2(false);
    setmobileMenu4(false);
  };
  let toggleFull2 = () => {
    // if (fullFloat === false) {
    setfullFloat(false);
    // } else {
    // setfullFloat(false);
    // }
    setmobileMenu(false);
    setmobileMenu2(false);
    setmobileMenu3(false);
    setfullFloat2(true);
    setmobileMenu4(false);
  };

  let toggleMobile = () => {
    if (toggleMobileMenu === true) {
      settoggleMobileMenu(false);
      setMenuName("Menu");
      let body = document.querySelector("body");
      body.style.overflow = "auto";
    } else {
      settoggleMobileMenu(true);
      setMenuName("Close");
      let body = document.querySelector("body");
      body.style.overflow = "hidden";
    }
  };
  let toggleMobileCase = () => {
    if (fullFloat === false) {
      setfullFloat(true);
    } else {
      setfullFloat(false);
    }
    setmobileMenu(false);
    setmobileMenu2(false);
    setmobileMenu3(false);
    setmobileMenu4(false);
  };
  // let toggleFalseclick=()=>{
  // document.getElementById("about-sec").style.display="none";

  // }
  return (
    <>
      <div
        className={
          fullFloat ? "no-shadow" : "" || fullFloat2 ? "no-shadow" : ""
        }
      >
        <header className="MuiPaper-root-28 MuiAppBar-root-17 MuiAppBar-positionFixed-18 MuiAppBar-colorPrimary-24 jss8 jss11 mui-fixed MuiPaper-elevation4-35">
          <div className="MuiContainer-root-81 MuiContainer-maxWidthLg-87">
            <div className="jss89 jss16">
              <button
                className="__packageName__-MuiButtonBase-root __packageName__-MuiIconButton-root __packageName__-__packageName__-jss4 jss91 __packageName__-MuiIconButton-edgeStart"
                type="button"
              >
                {/*
                <span
                  onClick={toggleSide}
                  className="__packageName__-MuiIconButton-label"
                >
                  <svg
                    width={24}
                    height={24}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5.667c0-.62 0-.93.068-1.185a2 2 0 0 1 1.414-1.414C4.737 3 5.047 3 5.667 3c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707C7 3.868 7 4.023 7 4.333V5c0 .943 0 1.414-.293 1.707C6.414 7 5.943 7 5 7h-.667c-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C3 6.132 3 5.977 3 5.667Z"
                      fill="currentColor"
                    />
                    <rect
                      x={3}
                      y={10}
                      width={4}
                      height={4}
                      rx={1}
                      fill="currentColor"
                    />
                    <path
                      d="M3 18.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707C3.868 17 4.023 17 4.333 17H5c.943 0 1.414 0 1.707.293C7 17.586 7 18.057 7 19v.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707C6.132 21 5.977 21 5.667 21c-.62 0-.93 0-1.185-.068a2 2 0 0 1-1.414-1.414C3 19.263 3 18.953 3 18.333Z"
                      fill="currentColor"
                    />
                    <rect
                      x={10}
                      y={3}
                      width={4}
                      height={4}
                      rx={1}
                      fill="currentColor"
                    />
                    <rect
                      x={10}
                      y={10}
                      width={4}
                      height={4}
                      rx={1}
                      fill="currentColor"
                    />
                    <rect
                      x={10}
                      y={17}
                      width={4}
                      height={4}
                      rx={1}
                      fill="currentColor"
                    />
                    <path
                      d="M17 4.333c0-.31 0-.465.034-.592a1 1 0 0 1 .707-.707C17.868 3 18.023 3 18.333 3c.62 0 .93 0 1.185.068a2 2 0 0 1 1.414 1.414c.068.255.068.565.068 1.185 0 .31 0 .465-.034.592a1 1 0 0 1-.707.707C20.132 7 19.977 7 19.667 7H19c-.943 0-1.414 0-1.707-.293C17 6.414 17 5.943 17 5v-.667Z"
                      fill="currentColor"
                    />
                    <rect
                      x={17}
                      y={10}
                      width={4}
                      height={4}
                      rx={1}
                      fill="currentColor"
                    />
                    <path
                      d="M17 19c0-.943 0-1.414.293-1.707C17.586 17 18.057 17 19 17h.667c.31 0 .465 0 .592.034a1 1 0 0 1 .707.707c.034.127.034.282.034.592 0 .62 0 .93-.068 1.185a2 2 0 0 1-1.414 1.414c-.255.068-.565.068-1.185.068-.31 0-.465 0-.592-.034a1 1 0 0 1-.707-.707C17 20.132 17 19.977 17 19.667V19Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                */}
              </button>
              <Link
                className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss94 MuiButton-disableElevation-117"
                tabIndex={0}
                aria-disabled="false"
                aria-label="ANKR"
                to="/"
              >
                <span className="MuiButton-label-107">
                  <img src={TrushLogo} alt="Logo" className="header-logo" />
                </span>
              </Link>
              <button
                onClick={toggleMobile}
                className="MuiButtonBase-root-133 justifyend MuiButton-root-106 MuiButton-text-108 jss2029 jss105 MuiButton-disableElevation-117"
                tabIndex={0}
                type="button"
                aria-label="open/close"
              >
                <span className="MuiButton-label-107 mbltxt">{MenuName}</span>
              </button>
              <div
                className={
                  toggleMobileMenu ? "mbl-style show-mbl" : "  mbl-style "
                }
              >
                <ul
                  className={
                    fullFloat2 ? "jss1227 jss95 active-tp" : "jss1227 jss95"
                  }
                >
                  <li
                    className={
                      mobileMenu
                        ? "jss1229 static active-bar"
                        : "jss1229 static closeAn "
                    }
                  >
                    <button
                      onMouseEnter={toggleFull2}
                      onClick={toggleFalse}
                      className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117  desk-off"
                      tabIndex={0}
                      type="button"
                    >
                      <span className="MuiButton-label-107 fture">
                        Features
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      // onClick={toggleTrue}
                      onClick={toggleFalse}
                      className="MuiButtonBase-root-133 mbl-on MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117"
                      tabIndex={0}
                      type="button"
                    >
                      <span className="MuiButton-label-107">
                        Features
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="float-dv alters-section custom-float">
                      <div className="custom-cm custom-ft">
                        <div
                          className="jss2451 jss2454"
                          style={{ maxHeight: "480px" }}
                        >
                          <div className="MuiBox-root-2475 jss2476 jss2455 jss2470">
                            <Link
                              className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss2462 MuiButton-disableElevation-122"
                              tabIndex={0}
                              aria-disabled="false"
                              role="link"
                              to="/features/decentralized-applications-dapps-on-trush"
                            >
                              <span className="MuiButton-label-112">
                                <img
                                  src="https://www.ankr.com/_next/static/images/web3-api-4c4158fcf721744a9e49367c85c984e4.png"
                                  alt="header.sub-menus.products.rpc-service.title"
                                  className="jss2463"
                                />
                                <div className="MuiBox-root-2475 jss2477 jss2456">
                                  <div className="MuiBox-root-2475 jss2478 jss2457">
                                    <h4 className="MuiTypography-root-139 jss2458 MuiTypography-h4-147">
                                      dApps
                                    </h4>
                                    <svg
                                      className="jss2464"
                                      width={15}
                                      height={14}
                                      viewBox="0 0 15 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <p className="MuiTypography-root-139 jss2465 MuiTypography-body1-141">
                                    Build and interact with next-gen
                                    decentralized applications
                                  </p>
                                </div>
                              </span>
                            </Link>
                          </div>
                          <div className="MuiBox-root-2475 jss2479 jss2455 jss2470">
                            <Link
                              className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss2462 MuiButton-disableElevation-122"
                              tabIndex={0}
                              aria-disabled="false"
                              role="link"
                              to="/features/trush-beacon-consensus-redefining-blockchain-consensus"
                            >
                              <span className="MuiButton-label-112">
                                <img
                                  src="https://www.ankr.com/_next/static/images/staking-fb4d5233fb5f6dc09e4bc75da5837cdf.png"
                                  alt="header.sub-menus.products.liquid-staking.title"
                                  className="jss2463"
                                />
                                <div className="MuiBox-root-2475 jss2480 jss2456">
                                  <div className="MuiBox-root-2475 jss2481 jss2457">
                                    <h4 className="MuiTypography-root-139 jss2458 MuiTypography-h4-147">
                                      Consensus
                                    </h4>
                                    <svg
                                      className="jss2464"
                                      width={15}
                                      height={14}
                                      viewBox="0 0 15 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <p className="MuiTypography-root-139 jss2465 MuiTypography-body1-141">
                                    Robust security via unique consensus
                                  </p>
                                </div>
                              </span>
                            </Link>
                          </div>
                          <div className="MuiBox-root-2475 jss2482 jss2455 jss2470">
                            <Link
                              to="/features/trush-in-decentralized-finance-defi"
                              className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss2462 MuiButton-disableElevation-122"
                              tabIndex={0}
                              aria-disabled="false"
                              role="link"
                            >
                              <span className="MuiButton-label-112">
                                <img
                                  src="https://www.ankr.com/_next/static/images/appchains-b725c5e0d0f126c4d29a09f03a92c652.png"
                                  alt="header.sub-menus.products.app-chains.title"
                                  className="jss2463"
                                />
                                <div className="MuiBox-root-2475 jss2483 jss2456">
                                  <div className="MuiBox-root-2475 jss2484 jss2457">
                                    <h4 className="MuiTypography-root-139 jss2458 MuiTypography-h4-147">
                                      DeFi
                                    </h4>
                                    <svg
                                      className="jss2464"
                                      width={15}
                                      height={14}
                                      viewBox="0 0 15 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <p className="MuiTypography-root-139 jss2465 MuiTypography-body1-141">
                                    Unlock secure, high-performing DeFi
                                    possibilities
                                  </p>
                                </div>
                              </span>
                            </Link>
                          </div>
                          <div className="MuiBox-root-2475 jss2485 jss2455 jss2470">
                            <Link
                              to="/features/beyond-performance-the-sustainability-focus-of-trush-network"
                              className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss2462 MuiButton-disableElevation-122"
                              tabIndex={0}
                              aria-disabled="false"
                              role="link"
                            >
                              <span className="MuiButton-label-112">
                                <img
                                  src="https://www.ankr.com/_next/static/images/automate-be37a08c54266ecc82b8f911f0d69d7c.png"
                                  alt="header.sub-menus.products.automate.title"
                                  className="jss2463"
                                />
                                <div className="MuiBox-root-2475 jss2486 jss2456">
                                  <div className="MuiBox-root-2475 jss2487 jss2457">
                                    <h4 className="MuiTypography-root-139 jss2458 MuiTypography-h4-147">
                                      Sustainability
                                    </h4>
                                    <svg
                                      className="jss2464"
                                      width={15}
                                      height={14}
                                      viewBox="0 0 15 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <p className="MuiTypography-root-139 jss2465 MuiTypography-body1-141">
                                    Promoting a greener blockchain future
                                  </p>
                                </div>
                              </span>
                            </Link>
                          </div>
                          <div className="MuiBox-root-2475 jss2485 jss2455 jss2470">
                            <Link
                              to="/features/trush-and-the-web-3.0-landscape"
                              className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss2462 MuiButton-disableElevation-122"
                              tabIndex={0}
                              aria-disabled="false"
                              role="link"
                            >
                              <span className="MuiButton-label-112">
                                <img
                                  src="https://www.ankr.com/_next/static/images/automate-be37a08c54266ecc82b8f911f0d69d7c.png"
                                  alt="header.sub-menus.products.automate.title"
                                  className="jss2463"
                                />
                                <div className="MuiBox-root-2475 jss2486 jss2456">
                                  <div className="MuiBox-root-2475 jss2487 jss2457">
                                    <h4 className="MuiTypography-root-139 jss2458 MuiTypography-h4-147">
                                      Web 3.0
                                    </h4>
                                    <svg
                                      className="jss2464"
                                      width={15}
                                      height={14}
                                      viewBox="0 0 15 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <p className="MuiTypography-root-139 jss2465 MuiTypography-body1-141">
                                    Experience the internet's future today
                                  </p>
                                </div>
                              </span>
                            </Link>
                          </div>
                          <div className="MuiBox-root-2475 jss2485 jss2455 jss2470">
                            <Link
                              to="/features/cross-chain-interoperability-with-trush"
                              className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss2462 MuiButton-disableElevation-122"
                              tabIndex={0}
                              aria-disabled="false"
                              role="link"
                            >
                              <span className="MuiButton-label-112">
                                <img
                                  src="https://www.ankr.com/_next/static/images/automate-be37a08c54266ecc82b8f911f0d69d7c.png"
                                  alt="header.sub-menus.products.automate.title"
                                  className="jss2463"
                                />
                                <div className="MuiBox-root-2475 jss2486 jss2456">
                                  <div className="MuiBox-root-2475 jss2487 jss2457">
                                    <h4 className="MuiTypography-root-139 jss2458 MuiTypography-h4-147">
                                      Interoperability
                                    </h4>
                                    <svg
                                      className="jss2464"
                                      width={15}
                                      height={14}
                                      viewBox="0 0 15 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </div>
                                  <p className="MuiTypography-root-139 jss2465 MuiTypography-body1-141">
                                    Experience seamless cross-chain
                                    transactions.
                                  </p>
                                </div>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li
                    className={
                      mobileMenu2
                        ? "jss1229 static active-bar"
                        : "jss1229 static closeAn "
                    }
                  >
                    <button
                      className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117 desk-off"
                      tabIndex={0}
                      type="button"
                      onMouseEnter={toggleTrue2}
                      onClick={toggleFalse2}
                    >
                      <span className="MuiButton-label-107">
                        Develop
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117 mbl-on"
                      tabIndex={0}
                      type="button"
                      onClick={toggleFalse2}
                    >
                      <span className="MuiButton-label-107">
                        Develop
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="float-overlay"
                      onMouseEnter={toggleFalse2}
                    ></div>
                    <div id="test" className="float-dv  alters-section">
                      <a
                        href="https://trush-foundation.gitbook.io/trush-network/"
                        target="_blank"
                        className="flex-row flex-link flex-alter"
                      >
                        <div className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.377 10.713a.375.375 0 0 1 .375-.375h6a.375.375 0 1 1 0 .75h-6a.375.375 0 0 1-.375-.375zm6.375 3.375a.375.375 0 1 0 0-.75h-6a.375.375 0 1 0 0 .75h6zm5.625 4.875a2.634 2.634 0 0 1-2.625 2.625h-10.5a2.634 2.634 0 0 1-2.625-2.625v-12a1.875 1.875 0 0 0-3.75 0c-.002.46.169.905.478 1.247a.378.378 0 1 1-.563.506 2.625 2.625 0 0 1 1.96-4.378h12.75a2.634 2.634 0 0 1 2.625 2.625v10.125h1.303a.403.403 0 0 1 .281.122c.43.483.666 1.107.666 1.753zm-11.25 0a1.847 1.847 0 0 0-.478-1.247.393.393 0 0 1-.066-.403.375.375 0 0 1 .347-.225h8.447V6.963a1.884 1.884 0 0 0-1.875-1.875H5.589a2.616 2.616 0 0 1 .788 1.875v12a1.875 1.875 0 1 0 3.75 0zm10.5 0a1.847 1.847 0 0 0-.375-1.125h-9.628c.168.35.255.736.253 1.125a2.616 2.616 0 0 1-.788 1.875h8.663a1.885 1.885 0 0 0 1.875-1.875z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Documentation</h3>
                            <p>
                              Deep-dive into Trush's technology with
                              comprehensive guides
                            </p>
                          </div>
                        </div>
                        <div className="new-arrow">
                          <svg
                            className="arrow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </a>
                      <Link
                        to="/trs-token"
                        className="flex-row flex-link flex-alter menu-item-light"
                      >
                        <div className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.377 10.713a.375.375 0 0 1 .375-.375h6a.375.375 0 1 1 0 .75h-6a.375.375 0 0 1-.375-.375zm6.375 3.375a.375.375 0 1 0 0-.75h-6a.375.375 0 1 0 0 .75h6zm5.625 4.875a2.634 2.634 0 0 1-2.625 2.625h-10.5a2.634 2.634 0 0 1-2.625-2.625v-12a1.875 1.875 0 0 0-3.75 0c-.002.46.169.905.478 1.247a.378.378 0 1 1-.563.506 2.625 2.625 0 0 1 1.96-4.378h12.75a2.634 2.634 0 0 1 2.625 2.625v10.125h1.303a.403.403 0 0 1 .281.122c.43.483.666 1.107.666 1.753zm-11.25 0a1.847 1.847 0 0 0-.478-1.247.393.393 0 0 1-.066-.403.375.375 0 0 1 .347-.225h8.447V6.963a1.884 1.884 0 0 0-1.875-1.875H5.589a2.616 2.616 0 0 1 .788 1.875v12a1.875 1.875 0 1 0 3.75 0zm10.5 0a1.847 1.847 0 0 0-.375-1.125h-9.628c.168.35.255.736.253 1.125a2.616 2.616 0 0 1-.788 1.875h8.663a1.885 1.885 0 0 0 1.875-1.875z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>TRS Token</h3>
                            <p>
                              Explore our native TRS token and its utilities
                            </p>
                          </div>
                        </div>
                        <div className="new-arrow">
                          <svg
                            className="arrow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </Link>

                      <div className="flex-row">
                        <a
                          href="https://trush-foundation.gitbook.io/trush-network/programmes/trush-usd10-million-grant-programme"
                          target="_blank"
                          className="individual-link"
                        >
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m22.78 10.47-5.25-6a.347.347 0 0 0-.281-.132h-10.5a.347.347 0 0 0-.281.131l-5.25 6a.365.365 0 0 0 .01.497l10.5 11.25a.364.364 0 0 0 .543 0l10.5-11.25a.366.366 0 0 0 .01-.497zm-1.106-.132H16.79l-4.032-5.25h4.322l4.594 5.25zm-14.531.75 3.731 9.122-8.512-9.122h4.78zm8.897 0-4.041 9.881-4.04-9.881h8.08zm-7.885-.75L12 5.332l3.844 5.006H8.155zm8.7.75h4.782l-8.513 9.122 3.731-9.122zm-9.937-6h4.322l-4.032 5.25H2.324l4.594-5.25z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Grants Program</h3>
                            <p>
                              Funding for innovative projects on the ecosystem
                            </p>
                          </div>
                        </a>

                        <a
                          href="https://trush-foundation.gitbook.io/trush-network/staking/understanding-validators-and-delegators"
                          target="_blank"
                          className="individual-link"
                        >
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.397 10.45a.385.385 0 0 1-.01.535l-5.503 5.25a.404.404 0 0 1-.262.103.366.366 0 0 1-.253-.103L7.613 13.61a.379.379 0 0 1 .524-.544l2.485 2.381 5.24-5.006a.385.385 0 0 1 .535.01zm4.978 2.513A9.375 9.375 0 1 1 12 3.588a9.394 9.394 0 0 1 9.375 9.375zm-.75 0A8.624 8.624 0 1 0 12 21.588a8.635 8.635 0 0 0 8.625-8.625z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Validators</h3>
                            <p>Uphold the network integrity as a validator</p>
                          </div>
                        </a>
                      </div>

                      <Link
                        to="/node-provider"
                        className="flex-row flex-link flex-alter"
                      >
                        <div className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="m6.245 9.504-4.153 3.459 4.153 3.46a.384.384 0 0 1 .047.534.404.404 0 0 1-.29.13.403.403 0 0 1-.244-.084l-4.5-3.75a.385.385 0 0 1 0-.58l4.5-3.75a.38.38 0 1 1 .487.58zm16.5 3.168-4.5-3.75a.38.38 0 0 0-.487.582l4.162 3.459-4.162 3.46a.384.384 0 0 0-.047.534.405.405 0 0 0 .29.13c.089 0 .174-.03.244-.084l4.5-3.75a.386.386 0 0 0 0-.58zm-7.612-8.315a.394.394 0 0 0-.488.225l-6 16.5a.394.394 0 0 0 .225.487l.132.019a.384.384 0 0 0 .356-.244l6-16.5a.394.394 0 0 0-.225-.487z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Node Providers</h3>
                            <p>
                              Provide infrastructure for Trush's decentralized
                              network
                            </p>
                          </div>
                        </div>
                        <div className="new-arrow">
                          <svg
                            className="arrow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </li>

                  <li
                    className={
                      fullFloat
                        ? "jss1229 static active-bar"
                        : "jss1229 static closeAn "
                    }
                  >
                    <button
                      onMouseEnter={toggleFull}
                      onClick={toggleMobileCase}
                      className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117 desk-off"
                      tabIndex={0}
                      type="button"
                    >
                      <span className="MuiButton-label-107">
                        Blog
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      onClick={toggleMobileCase}
                      className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117 mbl-on"
                      tabIndex={0}
                      type="button"
                    >
                      <span className="MuiButton-label-107">
                        Blog
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <div className="float-dv alters-section custom-float">
                      <div className="custom-cm">
                        <div className="jss2929 jss2930">
                          <Link
                            to="/blog"
                            className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                            tabIndex={0}
                            aria-disabled="false"
                          >
                            <span className="MuiButton-label-107">
                              <img
                                src="https://www.ankr.com/_next/static/images/bnb-chain-e515a9b6939286a8f7e7114eca2dbdae.png"
                                alt="header.sub-menus.case-studies.bnb-chain.title"
                                className="jss2940"
                              />
                              <div className="MuiBox-root-2943 jss2959">
                                <div className="MuiBox-root-2943 jss2960 jss2933">
                                  <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142 font-weight-bold">
                                    Connecting Chains, Empowering Users
                                  </h4>
                                  <svg
                                    className="jss2941"
                                    width={15}
                                    height={14}
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <p className="MuiTypography-root-134 jss2942 MuiTypography-body1-136">
                                  High-Speed, Interoperable, and Sustainable
                                  Solutions with Trush Network
                                </p>
                              </div>
                            </span>
                          </Link>
                        </div>
                        <Link to="/blog" className="header-blg">
                          <div className="MuiBox-root-1769 jss1784 jss1751">
                            <h4 className="MuiTypography-root-139 jss1752 MuiTypography-h4-147">
                              See all blogs
                            </h4>
                            <svg
                              className="jss1758"
                              width={15}
                              height={14}
                              viewBox="0 0 15 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </Link>
                        <div className="jss2929 jss2931">
                          <Link
                            className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                            tabIndex={0}
                            aria-disabled="false"
                            to="/blog/how-trush-is-redefining-the-scalability-security-decentralization-trilemma/"
                          >
                            <span className="MuiButton-label-107">
                              <img
                                src="https://www.ankr.com/_next/static/images/sushi-swap-f9fdfea96a96d3c1319f0a5690d224fd.png"
                                alt="header.sub-menus.case-studies.sushi-swap.title"
                                className="jss1287"
                              />
                              <div className="MuiBox-root-2943 jss2961">
                                <div className="MuiBox-root-2943 jss2962 jss2933">
                                  <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142 font-weight-bold">
                                    Trilemma? Trush Transforms
                                  </h4>
                                  <svg
                                    className="jss2941"
                                    width={15}
                                    height={14}
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <p className="MuiTypography-root-134 jss2942 MuiTypography-body1-136">
                                  How Trush is Redefining the
                                  Scalability-Security-Decentralization Trilemma
                                </p>
                              </div>
                            </span>
                          </Link>
                        </div>

                        <div className="jss2929 jss2931">
                          <Link
                            className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                            tabIndex={0}
                            aria-disabled="false"
                            to="/blog/environmental-sustainability-and-blockchain-how-trush-is-leading-the-way/"
                          >
                            <span className="MuiButton-label-107">
                              <img
                                src="https://www.ankr.com/_next/static/images/meta-apes-a993da5e7e2b5fd22dfc4b1ed596a51e.png"
                                alt="header.sub-menus.case-studies.meta-apes.title"
                                className="jss2940"
                              />
                              <div className="MuiBox-root-2943 jss2965">
                                <div className="MuiBox-root-2943 jss2966 jss2933">
                                  <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142 font-weight-bold">
                                    Eco-Conscious, Trush-Centric
                                  </h4>
                                  <svg
                                    className="jss2941"
                                    width={15}
                                    height={14}
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <p className="MuiTypography-root-134 jss2942 MuiTypography-body1-136">
                                  Environmental Sustainability and Blockchain:
                                  How Trush is Leading the Way
                                </p>
                              </div>
                            </span>
                          </Link>
                        </div>

                        <div className="jss2929 jss2931">
                          <Link
                            className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                            tabIndex={0}
                            aria-disabled="false"
                            to="/blog/comparative-analysis-trush-network-vs-other-layer-1-blockchains/"
                          >
                            <span className="MuiButton-label-107">
                              <img
                                src="https://www.ankr.com/_next/static/images/sushi-swap-f9fdfea96a96d3c1319f0a5690d224fd.png"
                                alt="header.sub-menus.case-studies.bomb-money.title"
                                className="jss2940"
                              />
                              <div className="MuiBox-root-2943 jss2963">
                                <div className="MuiBox-root-2943 jss2964 jss2933">
                                  <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142 font-weight-bold">
                                    Trush Tops Competition
                                  </h4>
                                  <svg
                                    className="jss2941"
                                    width={15}
                                    height={14}
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <p className="MuiTypography-root-134 jss2942 MuiTypography-body1-136">
                                  Comparative Analysis: Trush Network Vs. Other
                                  Layer 1 Blockchains
                                </p>
                              </div>
                            </span>
                          </Link>
                        </div>

                        <div className="jss2929 jss2931">
                          <Link
                            className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                            tabIndex={0}
                            aria-disabled="false"
                            to="/blog/the-role-of-interoperability-in-trush-network-s-success/"
                          >
                            <span className="MuiButton-label-107">
                              <img
                                src="https://www.ankr.com/_next/static/images/meta-apes-a993da5e7e2b5fd22dfc4b1ed596a51e.png"
                                alt="header.sub-menus.case-studies.meta-apes.title"
                                className="jss2940"
                              />
                              <div className="MuiBox-root-2943 jss2965">
                                <div className="MuiBox-root-2943 jss2966 jss2933">
                                  <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142 font-weight-bold">
                                    Bridging Blockchain Barriers
                                  </h4>
                                  <svg
                                    className="jss2941"
                                    width={15}
                                    height={14}
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <p className="MuiTypography-root-134 jss2942 MuiTypography-body1-136">
                                  The Role of Interoperability in Trush
                                  Network's Success
                                </p>
                              </div>
                            </span>
                          </Link>
                        </div>

                        {/* 
                        <div className="jss2929 jss2932">
                          <a
                            className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss2938 jss2939 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                            tabIndex={0}
                            aria-disabled="false"
                            href="/app-chains/"
                          >
                            <span className="MuiButton-label-107">
                              <div className="MuiBox-root-2943 jss2967">
                                <div className="MuiBox-root-2943 jss2968 jss2933">
                                  <h4 className="MuiTypography-root-134 jss2934 MuiTypography-h4-142">
                                    More coming soon
                                  </h4>
                                  <svg
                                    className="jss2941"
                                    width={15}
                                    height={14}
                                    viewBox="0 0 15 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </span>
                          </a>
                        </div>
                        */}
                      </div>
                    </div>
                  </li>

                  <li
                    className={
                      mobileMenu3
                        ? "jss1229 static active-bar"
                        : "jss1229 static closeAn "
                    }
                  >
                    <button
                      className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117 desk-off"
                      tabIndex={0}
                      onMouseEnter={toggleTrue3}
                      onClick={toggleFalse3}
                      type="button"
                    >
                      <span className="MuiButton-label-107">
                        Engage
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117 mbl-on"
                      tabIndex={0}
                      onClick={toggleFalse3}
                      type="button"
                    >
                      <span className="MuiButton-label-107">
                        Engage
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="float-overlay"
                      onMouseEnter={toggleFalse3}
                    ></div>
                    <div className="float-dv alters-section">
                      <Link
                        to="/about-network"
                        className="flex-row flex-link flex-alter"
                      >
                        <div className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.926 12.963c.797-1.096 1.454-2.184 1.913-3.225.975-2.156 1.012-3.834.122-4.734-.89-.9-2.578-.853-4.735.122-1.04.46-2.128 1.115-3.225 1.912-1.096-.797-2.184-1.453-3.225-1.912-2.156-.975-3.834-1.013-4.734-.122-.9.89-.853 2.578.122 4.734.46 1.041 1.116 2.129 1.912 3.225-.796 1.097-1.453 2.185-1.912 3.225-.975 2.157-1.013 3.835-.122 4.735.431.422 1.04.637 1.8.637s1.819-.253 2.934-.76c1.116-.505 2.129-1.115 3.225-1.912 1.097.797 2.185 1.453 3.225 1.913 1.041.46 2.11.76 2.935.76.825 0 1.368-.216 1.8-.638.89-.9.853-2.578-.122-4.735-.46-1.04-1.116-2.128-1.913-3.225zm1.5-7.425c.647.657.554 2.072-.262 3.9a17.071 17.071 0 0 1-1.716 2.897 26.993 26.993 0 0 0-2.268-2.55 26.072 26.072 0 0 0-2.56-2.278c3.16-2.26 5.85-2.925 6.806-1.969zm-2.437 7.425c-.72.934-1.5 1.82-2.335 2.654a28.869 28.869 0 0 1-2.653 2.334 28.882 28.882 0 0 1-2.653-2.335 27.355 27.355 0 0 1-2.334-2.653c.72-.933 1.5-1.82 2.334-2.653a28.874 28.874 0 0 1 2.653-2.334 28.86 28.86 0 0 1 2.654 2.334 27.34 27.34 0 0 1 2.334 2.653zM4.839 9.438c-.816-1.828-.91-3.243-.263-3.9.282-.28.722-.422 1.275-.422 1.322 0 3.31.797 5.532 2.391a26.067 26.067 0 0 0-2.56 2.278 26.992 26.992 0 0 0-2.268 2.55 17.072 17.072 0 0 1-1.716-2.897zm-.263 10.95c-.646-.656-.553-2.072.263-3.9a17.07 17.07 0 0 1 1.716-2.896c.701.896 1.459 1.748 2.268 2.55a26.072 26.072 0 0 0 2.56 2.278c-3.16 2.259-5.85 2.925-6.807 1.968zm14.85 0c-.956.957-3.646.291-6.806-1.968a26.077 26.077 0 0 0 2.56-2.279 26.994 26.994 0 0 0 2.268-2.55 17.07 17.07 0 0 1 1.716 2.897c.816 1.829.91 3.244.262 3.9zm-6.675-7.425a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Trush Network</h3>
                            <p>
                              Discover the inner workings of the Trush Network
                            </p>
                          </div>
                        </div>
                        <div className="new-arrow">
                          <svg
                            className="arrow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                      <a href="" className="flex-row flex-link flex-alter">
                        <div className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M23.1 14.388a.403.403 0 0 1-.225.075.393.393 0 0 1-.3-.15 5.22 5.22 0 0 0-4.2-2.1.375.375 0 0 1 0-.75 2.625 2.625 0 1 0-2.578-3.122.379.379 0 0 1-.44.3.377.377 0 0 1-.3-.44 3.375 3.375 0 1 1 5.071 3.524 5.906 5.906 0 0 1 3.047 2.138.375.375 0 0 1-.075.525zm-5.363 6.656a.384.384 0 0 1-.178.506.376.376 0 0 1-.497-.169 5.625 5.625 0 0 0-10.124 0 .366.366 0 0 1-.497.17.384.384 0 0 1-.178-.507 6.404 6.404 0 0 1 3.834-3.3 4.125 4.125 0 1 1 3.806 0 6.403 6.403 0 0 1 3.835 3.3zM12 17.463a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75zm-6.375-6A2.625 2.625 0 1 1 8.203 8.34a.377.377 0 1 0 .74-.14 3.375 3.375 0 1 0-5.071 3.524 5.906 5.906 0 0 0-3.047 2.138.375.375 0 0 0 .3.6.393.393 0 0 0 .3-.15 5.22 5.22 0 0 1 4.2-2.1.375.375 0 1 0 0-.75z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Community</h3>
                            <p>
                              Join our global community of blockchain
                              enthusiasts
                            </p>
                          </div>
                        </div>
                        <div className="new-arrow">
                          <svg
                            className="arrow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </a>

                      <div className="flex-row">
                        <Link
                          to="/become-ambassador"
                          className="individual-link"
                        >
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.625 9.963A.375.375 0 0 1 9 9.588h6a.375.375 0 0 1 0 .75H9a.375.375 0 0 1-.375-.375zM9 13.338h6a.375.375 0 0 0 0-.75H9a.375.375 0 1 0 0 .75zm3 2.25H9a.375.375 0 1 0 0 .75h3a.375.375 0 0 0 0-.75zm8.625-10.125v10.19a1.116 1.116 0 0 1-.328.797l-4.81 4.81a1.116 1.116 0 0 1-.796.328H4.5a1.125 1.125 0 0 1-1.125-1.125v-15A1.125 1.125 0 0 1 4.5 4.338h15a1.125 1.125 0 0 1 1.125 1.125zM4.5 20.838h10.125v-4.875a.375.375 0 0 1 .375-.375h4.875V5.463a.375.375 0 0 0-.375-.375h-15a.375.375 0 0 0-.375.375v15a.375.375 0 0 0 .375.375zm14.85-4.5h-3.975v3.965l3.975-3.965z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Ambassador Programme</h3>
                            <p>
                              Represent Trush and spread our mission globally
                            </p>
                          </div>
                        </Link>
                        <a href="#" className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.5 4.338h-15a1.125 1.125 0 0 0-1.125 1.125v15A1.125 1.125 0 0 0 4.5 21.588h10.19a1.116 1.116 0 0 0 .798-.328l4.809-4.81a1.115 1.115 0 0 0 .328-.796V5.462A1.125 1.125 0 0 0 19.5 4.338zm-4.125 15.965v-3.965h3.975l-3.975 3.965zm4.5-4.715H15a.375.375 0 0 0-.375.375v4.875H4.5a.375.375 0 0 1-.375-.375v-15a.375.375 0 0 1 .375-.375h15a.375.375 0 0 1 .375.375v10.125z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Litepaper</h3>
                            <p>
                              Explore Trush's core concepts in this simplified
                              paper
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="flex-row no-margin">
                        <Link to="/faq" className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 3.588a9.375 9.375 0 1 0 9.375 9.375A9.394 9.394 0 0 0 12 3.588zm0 18a8.625 8.625 0 1 1 8.625-8.625A8.634 8.634 0 0 1 12 21.588zm.75-3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm2.25-6.75a3.009 3.009 0 0 1-2.625 2.981v.394a.375.375 0 0 1-.75 0v-.75a.375.375 0 0 1 .375-.375 2.25 2.25 0 1 0-2.25-2.25.375.375 0 0 1-.75 0 3 3 0 1 1 6 0z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>FAQ</h3>
                            <p>Get answers to common queries about Trush</p>
                          </div>
                        </Link>
                        <a href="#" className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19.5 4.338h-15a1.125 1.125 0 0 0-1.125 1.125v15A1.125 1.125 0 0 0 4.5 21.588h10.19a1.116 1.116 0 0 0 .798-.328l4.809-4.81a1.115 1.115 0 0 0 .328-.796V5.462A1.125 1.125 0 0 0 19.5 4.338zm-4.125 15.965v-3.965h3.975l-3.975 3.965zm4.5-4.715H15a.375.375 0 0 0-.375.375v4.875H4.5a.375.375 0 0 1-.375-.375v-15a.375.375 0 0 1 .375-.375h15a.375.375 0 0 1 .375.375v10.125z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Whitepaper</h3>
                            <p>
                              Delve into the technological foundation of Trush
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      mobileMenu4
                        ? "jss1229 static active-bar"
                        : "jss1229 static closeAn "
                    }
                  >
                    <button
                      onMouseEnter={toggleTrue4}
                      onClick={toggleFalse4}
                      className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117 desk-off"
                      tabIndex={0}
                      type="button"
                    >
                      <span className="MuiButton-label-107">
                        Company
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <button
                      onClick={toggleFalse4}
                      className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1230 MuiButton-disableElevation-117 mbl-on"
                      tabIndex={0}
                      type="button"
                    >
                      <span className="MuiButton-label-107">
                        Company
                        <svg
                          className="jss1233"
                          width={10}
                          height={6}
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="float-overlay"
                      onMouseEnter={toggleFalse4}
                    ></div>
                    <div id="about-sec" className="float-dv alters-section">
                      <Link
                        to="/about-us"
                        className="flex-row flex-link flex-alter"
                      >
                        <div className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 5.838H3a1.125 1.125 0 0 0-1.125 1.125v12A1.125 1.125 0 0 0 3 20.088h18a1.125 1.125 0 0 0 1.125-1.125v-12A1.125 1.125 0 0 0 21 5.838zm-18 .75h18a.375.375 0 0 1 .375.375v2.71H2.625v-2.71A.375.375 0 0 1 3 6.588zm18 12.75H3a.375.375 0 0 1-.375-.375v-8.54h18.75v8.54a.375.375 0 0 1-.375.375zm-1.875-2.625a.375.375 0 0 1-.375.375h-3a.375.375 0 0 1 0-.75h3a.375.375 0 0 1 .375.375zm-6 0a.375.375 0 0 1-.375.375h-1.5a.375.375 0 0 1 0-.75h1.5a.375.375 0 0 1 .375.375z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>About Us</h3>
                            <p>
                              Discover the vision, team, and story behind Trush
                            </p>
                          </div>
                        </div>
                        <div className="new-arrow">
                          <svg
                            className="arrow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </Link>

                      <Link
                        to="/brand-assets"
                        className="flex-row flex-link flex-alter"
                      >
                        <div className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <mask
                                id="a8"
                                maskUnits="userSpaceOnUse"
                                x="1"
                                y="1.963"
                                width="22"
                                height="22"
                                fill="#000"
                              >
                                {" "}
                                <path fill="#fff" d="M1 1.963h22v22H1z"></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M11.997 2.963a9.973 9.973 0 0 1 7.061 2.92V4.662c0-.375.565-.375.565 0v1.894a.28.28 0 0 1-.282.282h-1.9c-.374 0-.374-.564 0-.564h1.232A9.41 9.41 0 0 0 11.997 3.5c-5.21 0-9.433 4.239-9.433 9.46 0 1.428.315 2.779.88 3.995.163.353-.31.63-.516.222A10.031 10.031 0 0 1 2 12.96c0-5.52 4.478-9.997 9.997-9.997zm-7.06 18.773v-1.894a.28.28 0 0 1 .281-.282h1.9c.375 0 .375.564 0 .564h-1.28a9.366 9.366 0 0 0 6.16 2.302c5.215 0 9.438-4.24 9.438-9.466a9.508 9.508 0 0 0-.798-3.815c-.201-.456.38-.614.51-.223A9.93 9.93 0 0 1 22 12.96c0 5.525-4.478 10.003-10.003 10.003a9.973 9.973 0 0 1-6.496-2.399v1.172c0 .375-.565.375-.565 0z"
                                ></path>
                              </mask>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11.997 2.963a9.973 9.973 0 0 1 7.061 2.92V4.662c0-.375.565-.375.565 0v1.894a.28.28 0 0 1-.282.282h-1.9c-.374 0-.374-.564 0-.564h1.232A9.41 9.41 0 0 0 11.997 3.5c-5.21 0-9.433 4.239-9.433 9.46 0 1.428.315 2.779.88 3.995.163.353-.31.63-.516.222A10.031 10.031 0 0 1 2 12.96c0-5.52 4.478-9.997 9.997-9.997zm-7.06 18.773v-1.894a.28.28 0 0 1 .281-.282h1.9c.375 0 .375.564 0 .564h-1.28a9.366 9.366 0 0 0 6.16 2.302c5.215 0 9.438-4.24 9.438-9.466a9.508 9.508 0 0 0-.798-3.815c-.201-.456.38-.614.51-.223A9.93 9.93 0 0 1 22 12.96c0 5.525-4.478 10.003-10.003 10.003a9.973 9.973 0 0 1-6.496-2.399v1.172c0 .375-.565.375-.565 0z"
                                fill="#000"
                              ></path>
                              <path
                                clipRule="evenodd"
                                d="M11.997 2.963a9.973 9.973 0 0 1 7.061 2.92V4.662c0-.375.565-.375.565 0v1.894a.28.28 0 0 1-.282.282h-1.9c-.374 0-.374-.564 0-.564h1.232A9.41 9.41 0 0 0 11.997 3.5c-5.21 0-9.433 4.239-9.433 9.46 0 1.428.315 2.779.88 3.995.163.353-.31.63-.516.222A10.031 10.031 0 0 1 2 12.96c0-5.52 4.478-9.997 9.997-9.997zm-7.06 18.773v-1.894a.28.28 0 0 1 .281-.282h1.9c.375 0 .375.564 0 .564h-1.28a9.366 9.366 0 0 0 6.16 2.302c5.215 0 9.438-4.24 9.438-9.466a9.508 9.508 0 0 0-.798-3.815c-.201-.456.38-.614.51-.223A9.93 9.93 0 0 1 22 12.96c0 5.525-4.478 10.003-10.003 10.003a9.973 9.973 0 0 1-6.496-2.399v1.172c0 .375-.565.375-.565 0z"
                                stroke="#000"
                                strokeWidth=".2"
                                mask="url(#a)"
                              ></path>
                              <mask
                                id="b8"
                                maskUnits="userSpaceOnUse"
                                x="5.652"
                                y="8.443"
                                width="12"
                                height="11"
                                fill="#000"
                              >
                                <path
                                  fill="#fff"
                                  d="M5.652 8.443h12v11h-12z"
                                ></path>
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.652 9.443H17.35l-.337.565H6.99l-.337-.565zm9.542 1.938-4.196 7.04-4.19-7.04h8.386zm-1.227.971-2.969 4.983-3.202-5.406h6.426l-.255.423z"
                                ></path>
                              </mask>
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.652 9.443H17.35l-.337.565H6.99l-.337-.565zm9.542 1.938-4.196 7.04-4.19-7.04h8.386zm-1.227.971-2.969 4.983-3.202-5.406h6.426l-.255.423z"
                                fill="#000"
                              ></path>
                              <path
                                clipRule="evenodd"
                                d="M6.652 9.443H17.35l-.337.565H6.99l-.337-.565zm9.542 1.938-4.196 7.04-4.19-7.04h8.386zm-1.227.971-2.969 4.983-3.202-5.406h6.426l-.255.423z"
                                stroke="#000"
                                strokeWidth=".2"
                                mask="url(#b)"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Brand Assets</h3>
                            <p>Official Trush logos and branding guidelines</p>
                          </div>
                        </div>
                        <div className="new-arrow">
                          <svg
                            className="arrow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                      <a href="" className="flex-row flex-link flex-alter">
                        <div className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 9.691v-.853c0-2.1-3.46-3.75-7.875-3.75-4.416 0-7.875 1.65-7.875 3.75v3.75c0 1.79 2.522 3.253 6 3.647v.853c0 2.1 3.46 3.75 7.875 3.75 4.416 0 7.875-1.65 7.875-3.75v-3.75c0-1.772-2.447-3.244-6-3.647zm5.25 3.647c0 1.453-2.86 3-7.125 3-.88.001-1.758-.071-2.625-.216v-.131c2.681-.59 4.5-1.875 4.5-3.403V10.45c3.019.357 5.25 1.566 5.25 2.888zM7.528 15.522H7.5a13.087 13.087 0 0 1-1.125-.15v-2.99c.868.138 1.746.207 2.625.206.88 0 1.757-.068 2.625-.206v2.99A15.18 15.18 0 0 1 9 15.588c-.516 0-1.003-.019-1.472-.066zm8.597-5.062v2.128c0 1.022-1.425 2.09-3.75 2.634v-2.981c1.65-.366 2.981-.994 3.75-1.781zM9 5.838c4.266 0 7.125 1.547 7.125 3s-2.86 3-7.125 3c-4.266 0-7.125-1.547-7.125-3s2.86-3 7.125-3zm-7.125 6.75V10.46c.769.787 2.1 1.415 3.75 1.781v2.981c-2.325-.543-3.75-1.612-3.75-2.634zm6 4.5V16.3c.366.028.74.038 1.125.038.384 0 .76-.01 1.125-.038.489.18.99.324 1.5.432v2.99c-2.325-.544-3.75-1.612-3.75-2.634zm4.5 2.784v-2.99c.868.136 1.746.205 2.625.206.88 0 1.757-.068 2.625-.206v2.99a16.092 16.092 0 0 1-5.25 0zm9.75-2.784c0 1.022-1.425 2.09-3.75 2.634v-2.981c1.65-.366 2.981-.994 3.75-1.781v2.128z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Careers</h3>
                            <p>Join the Trush team and shape the future</p>
                          </div>
                        </div>
                        <div className="new-arrow">
                          <svg
                            className="arrow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </a>
                      <Link
                        to="/contact"
                        className="flex-row flex-link flex-alter"
                      >
                        <div className="individual-link">
                          <div className="icon">
                            <svg
                              width="24"
                              height="24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 9.691v-.853c0-2.1-3.46-3.75-7.875-3.75-4.416 0-7.875 1.65-7.875 3.75v3.75c0 1.79 2.522 3.253 6 3.647v.853c0 2.1 3.46 3.75 7.875 3.75 4.416 0 7.875-1.65 7.875-3.75v-3.75c0-1.772-2.447-3.244-6-3.647zm5.25 3.647c0 1.453-2.86 3-7.125 3-.88.001-1.758-.071-2.625-.216v-.131c2.681-.59 4.5-1.875 4.5-3.403V10.45c3.019.357 5.25 1.566 5.25 2.888zM7.528 15.522H7.5a13.087 13.087 0 0 1-1.125-.15v-2.99c.868.138 1.746.207 2.625.206.88 0 1.757-.068 2.625-.206v2.99A15.18 15.18 0 0 1 9 15.588c-.516 0-1.003-.019-1.472-.066zm8.597-5.062v2.128c0 1.022-1.425 2.09-3.75 2.634v-2.981c1.65-.366 2.981-.994 3.75-1.781zM9 5.838c4.266 0 7.125 1.547 7.125 3s-2.86 3-7.125 3c-4.266 0-7.125-1.547-7.125-3s2.86-3 7.125-3zm-7.125 6.75V10.46c.769.787 2.1 1.415 3.75 1.781v2.981c-2.325-.543-3.75-1.612-3.75-2.634zm6 4.5V16.3c.366.028.74.038 1.125.038.384 0 .76-.01 1.125-.038.489.18.99.324 1.5.432v2.99c-2.325-.544-3.75-1.612-3.75-2.634zm4.5 2.784v-2.99c.868.136 1.746.205 2.625.206.88 0 1.757-.068 2.625-.206v2.99a16.092 16.092 0 0 1-5.25 0zm9.75-2.784c0 1.022-1.425 2.09-3.75 2.634v-2.981c1.65-.366 2.981-.994 3.75-1.781v2.128z"
                                fill="#000"
                              ></path>
                            </svg>
                          </div>
                          <div className="link-txt">
                            <h3>Contact</h3>
                            <p>
                              Connect, inquire, engage - we're here to listen
                            </p>
                          </div>
                        </div>
                        <div className="new-arrow">
                          <svg
                            className="arrow"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.2497 12C17.247 12.1988 17.1701 12.3894 17.0341 12.5344L9.5341 20.0344C9.38838 20.154 9.20338 20.2151 9.01509 20.2059C8.8268 20.1966 8.64869 20.1177 8.51539 19.9844C8.38208 19.8511 8.30313 19.673 8.29388 19.4847C8.28464 19.2964 8.34576 19.1114 8.46535 18.9657L15.4404 12L8.46535 5.0344C8.34576 4.88868 8.28464 4.70368 8.29388 4.5154C8.30313 4.32711 8.38208 4.14899 8.51539 4.01569C8.64869 3.88239 8.8268 3.80343 9.01509 3.79418C9.20338 3.78494 9.38838 3.84606 9.5341 3.96565L17.0341 11.4657C17.1701 11.6106 17.247 11.8012 17.2497 12Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                to="/trs-token"
                className="MuiButtonBase-root-263 MuiButton-contained-244 btn-transparent MuiButton-disableElevation-247"
              >
                <span className="MuiButton-label-237">Get TRS</span>
              </Link>
            </div>
          </div>
        </header>
      </div>
      {/* Popup */}
      {sideToggle && (
        <div
          onClick={toggleSide}
          className="__packageName__-MuiPopover-root"
          style={{ position: "fixed", zIndex: 99999, inset: "0px" }}
        >
          <div
            aria-hidden="true"
            style={{
              zIndex: -1,
              position: "fixed",
              inset: "0px",
              backgroundColor: "transparent",
              WebkitTapHighlightColor: "transparent",
            }}
          />
          <div tabIndex={0} data-test="sentinelStart" />
          <div
            className="__packageName__-MuiPaper-root __packageName__-MuiPopover-paper __packageName__-__packageName__-jss2 __packageName__-__packageName__-jss3 __packageName__-__packageName__-jss6 __packageName__-MuiPaper-elevation8 __packageName__-MuiPaper-rounded"
            tabIndex={-1}
            style={{
              opacity: 1,
              transform: "none",
              top: "75px",
              left: "68px",
              transition:
                "opacity 125ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 83ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
              transformOrigin: "0px 0px",
            }}
          >
            <div className="__packageName__-__packageName__-jss111 __packageName__-__packageName__-jss123">
              <a
                href="/"
                className="__packageName__-__packageName__-jss115"
                target="_self"
              >
                <span>
                  Ankr Main Page
                  <svg
                    className="__packageName__-__packageName__-jss120"
                    width={15}
                    height={14}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
              <div className="__packageName__-__packageName__-jss112">
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "0px",
                      overflow: "scroll",
                      marginRight: "-17px",
                      marginBottom: "-17px",
                    }}
                  >
                    <div className="__packageName__-__packageName__-jss121">
                      <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss122 __packageName__-MuiTypography-body1">
                        Build
                      </p>
                      <a
                        rel="noopener noreferrer"
                        href="/rpc/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Public RPC Endpoints
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/rpc/account/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Premium API’s
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="https://ankrscan.io"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Ankr Scan
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a href="/build/nodes/" className target="_self">
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Node Service
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a href="/enterprise/" className target="_self">
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Enterprise
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                    <div className="__packageName__-__packageName__-jss121">
                      <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss122 __packageName__-MuiTypography-body1">
                        Staking
                      </p>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/dashboard/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Dashboard
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/stake/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Liquid Staking
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/defi/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                DeFi
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/bridge/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Bridge
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/switch/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Switch
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                      <a
                        rel="noopener noreferrer"
                        href="/staking/liquid-crowdloan/dot/"
                        className
                        target="_self"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Liquid Crowdloan
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                    <div className="__packageName__-__packageName__-jss121">
                      <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss122 __packageName__-MuiTypography-body1">
                        Gaming
                      </p>
                      <a href="/gaming/" className target="_self">
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Ankr Gaming
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                    <div className="__packageName__-__packageName__-jss121">
                      <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss122 __packageName__-MuiTypography-body1">
                        Docs
                      </p>
                      <a
                        rel="noopener noreferrer"
                        href="/docs/"
                        className
                        target="_blank"
                      >
                        <span>
                          <div className="__packageName__-__packageName__-jss116">
                            <div className="__packageName__-__packageName__-jss118">
                              <p className="__packageName__-MuiTypography-root __packageName__-__packageName__-jss119 __packageName__-MuiTypography-body1 __packageName__-MuiTypography-colorInherit">
                                Ankr Docs
                                <svg
                                  className="__packageName__-__packageName__-jss120"
                                  width={15}
                                  height={14}
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </p>
                            </div>
                          </div>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      height: "6px",
                      right: "2px",
                      bottom: "2px",
                      left: "2px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "block",
                        height: "100%",
                        cursor: "pointer",
                        borderRadius: "inherit",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        width: "0px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div tabIndex={0} data-test="sentinelEnd" />
        </div>
      )}
      {/* {fullFloat && ( */}
      {fullFloat && (
        <div
          className="float-overlay block"
          onMouseEnter={() => setfullFloat(false)}
        ></div>
      )}
      <div className={fullFloat ? "full-float" : "hide-it full-float"}>
        <div className="MuiContainer-root-1268 jss768 jss769 MuiContainer-maxWidthLg-1274">
          <div className="jss753 case-studies">
            <div className="jss1276 jss1277">
              <Link
                className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                tabIndex={0}
                aria-disabled="false"
                to="/blog"
              >
                <span className="MuiButton-label-107">
                  <img
                    src="https://www.ankr.com/_next/static/images/bnb-chain-e515a9b6939286a8f7e7114eca2dbdae.png"
                    alt="header.sub-menus.case-studies.bnb-chain.title"
                    className="jss1287"
                  />
                  <div className="MuiBox-root-1290 jss1291">
                    <div className="MuiBox-root-1290 jss1292 jss1280">
                      <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142 font-weight-bold">
                        Connecting Chains, Empowering Users
                      </h4>
                      <svg
                        className="jss1288"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-134 jss1289 MuiTypography-body1-136">
                      High-Speed, Interoperable, and Sustainable Solutions with
                      Trush
                    </p>
                  </div>
                </span>
              </Link>
              <Link to="/blog" className="header-blg">
                <div className="MuiBox-root-1769 jss1784 jss1751">
                  <h4 className="MuiTypography-root-139 jss1752 MuiTypography-h4-147">
                    See all blogs
                  </h4>
                  <svg
                    className="jss1758"
                    width={15}
                    height={14}
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </Link>
            </div>
            <div className="jss1276 jss1278">
              <Link
                to="/blog/how-trush-is-redefining-the-scalability-security-decentralization-trilemma/"
                className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                tabIndex={0}
                aria-disabled="false"
                href="#"
              >
                <span className="MuiButton-label-107">
                  <img
                    src="https://www.ankr.com/_next/static/images/sushi-swap-f9fdfea96a96d3c1319f0a5690d224fd.png"
                    alt="header.sub-menus.case-studies.sushi-swap.title"
                    className="jss1287"
                  />
                  <div className="MuiBox-root-1290 jss1293">
                    <div className="MuiBox-root-1290 jss1294 jss1280">
                      <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142 font-weight-bold">
                        Trilemma? Trush Transforms
                      </h4>
                      <svg
                        className="jss1288"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-134 jss1289 MuiTypography-body1-136">
                      How Trush is Redefining the
                      Scalability-Security-Decentralization Trilemma
                    </p>
                  </div>
                </span>
              </Link>
            </div>

            <div className="jss1276 jss1278">
              <Link
                to="/blog/environmental-sustainability-and-blockchain-how-trush-is-leading-the-way/"
                className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                tabIndex={0}
                aria-disabled="false"
                href="/case-studies/meta-apes/"
              >
                <span className="MuiButton-label-107">
                  <img
                    src="https://www.ankr.com/_next/static/images/meta-apes-a993da5e7e2b5fd22dfc4b1ed596a51e.png"
                    alt="header.sub-menus.case-studies.meta-apes.title"
                    className="jss1287"
                  />
                  <div className="MuiBox-root-1290 jss1297">
                    <div className="MuiBox-root-1290 jss1298 jss1280">
                      <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142 font-weight-bold">
                        Eco-Conscious, Trush-Centric
                      </h4>
                      <svg
                        className="jss1288"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-134 jss1289 MuiTypography-body1-136">
                      Environmental Sustainability and Blockchain: How Trush is
                      Leading the Way
                    </p>
                  </div>
                </span>
              </Link>
            </div>

            <div className="jss1276 jss1278">
              <Link
                className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                tabIndex={0}
                aria-disabled="false"
                to="/blog/comparative-analysis-trush-network-vs-other-layer-1-blockchains/"
              >
                <span className="MuiButton-label-107">
                  <img
                    src="https://www.ankr.com/_next/static/images/sushi-swap-f9fdfea96a96d3c1319f0a5690d224fd.png"
                    alt="header.sub-menus.case-studies.bomb-money.title"
                    className="jss1287"
                  />
                  <div className="MuiBox-root-1290 jss1295">
                    <div className="MuiBox-root-1290 jss1296 jss1280">
                      <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142 font-weight-bold">
                        Trush Tops Competition
                      </h4>
                      <svg
                        className="jss1288"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-134 jss1289 MuiTypography-body1-136">
                      Comparative Analysis: Trush Network Vs. Other Layer 1
                      Blockchains
                    </p>
                  </div>
                </span>
              </Link>
            </div>

            <div className="jss1276 jss1278">
              <Link
                to="/blog/the-role-of-interoperability-in-trush-network-s-success/"
                className="MuiButtonBase-root-133 MuiButton-root-106 MuiButton-text-108 jss1285 MuiButton-textPrimary-109 MuiButton-disableElevation-117"
                tabIndex={0}
                aria-disabled="false"
                href="/case-studies/meta-apes/"
              >
                <span className="MuiButton-label-107">
                  <img
                    src="https://www.ankr.com/_next/static/images/meta-apes-a993da5e7e2b5fd22dfc4b1ed596a51e.png"
                    alt="header.sub-menus.case-studies.meta-apes.title"
                    className="jss1287"
                  />
                  <div className="MuiBox-root-1290 jss1297">
                    <div className="MuiBox-root-1290 jss1298 jss1280">
                      <h4 className="MuiTypography-root-134 jss1281 MuiTypography-h4-142 font-weight-bold">
                        Bridging Blockchain Barriers
                      </h4>
                      <svg
                        className="jss1288"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-134 jss1289 MuiTypography-body1-136">
                      The Role of Interoperability in Trush Network's Success
                    </p>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
      {fullFloat2 && (
        <div
          className="float-overlay block"
          onMouseEnter={() => setfullFloat2(false)}
        ></div>
      )}
      <div className={fullFloat2 ? "full-float" : "hide-it full-float"}>
        <div className="MuiContainer-root-1268 feture jss768 jss769 MuiContainer-maxWidthLg-1274">
          <div className="jss1601 products-menu">
            <div className="MuiBox-root-1758 jss1759 jss1738 jss1753">
              <Link
                className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss1745 MuiButton-disableElevation-122"
                tabIndex={0}
                aria-disabled="false"
                role="link"
                to="/features/decentralized-applications-dapps-on-trush"
              >
                <span className="MuiButton-label-112">
                  <img
                    src="https://www.ankr.com/_next/static/images/web3-api-4c4158fcf721744a9e49367c85c984e4.png"
                    alt="header.sub-menus.products.rpc-service.title"
                    className="jss1746"
                  />
                  <div className="MuiBox-root-1758 jss1760 jss1739">
                    <div className="MuiBox-root-1758 jss1761 jss1740">
                      <h4 className="MuiTypography-root-139 jss1741 MuiTypography-h4-147">
                        dApps
                      </h4>
                      <svg
                        className="jss1747"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-139 jss1748 MuiTypography-body1-141">
                      Build and interact with next-gen decentralized
                      applications
                    </p>
                  </div>
                </span>
              </Link>
            </div>
            <div className="MuiBox-root-1758 jss1762 jss1738 jss1753">
              <Link
                className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss1745 MuiButton-disableElevation-122"
                tabIndex={0}
                aria-disabled="false"
                role="link"
                to="/features/trush-beacon-consensus-redefining-blockchain-consensus"
              >
                <span className="MuiButton-label-112">
                  <img
                    src="https://www.ankr.com/_next/static/images/staking-fb4d5233fb5f6dc09e4bc75da5837cdf.png"
                    alt="header.sub-menus.products.liquid-staking.title"
                    className="jss1746"
                  />
                  <div className="MuiBox-root-1758 jss1763 jss1739">
                    <div className="MuiBox-root-1758 jss1764 jss1740">
                      <h4 className="MuiTypography-root-139 jss1741 MuiTypography-h4-147">
                        Consensus
                      </h4>
                      <svg
                        className="jss1747"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-139 jss1748 MuiTypography-body1-141">
                      Robust security via unique consensus
                    </p>
                  </div>
                </span>
              </Link>
            </div>
            <div className="MuiBox-root-1758 jss1765 jss1738 jss1753">
              <Link
                to="/features/trush-in-decentralized-finance-defi"
                className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss1745 MuiButton-disableElevation-122"
                tabIndex={0}
                aria-disabled="false"
                role="link"
              >
                <span className="MuiButton-label-112">
                  <img
                    src="https://www.ankr.com/_next/static/images/appchains-b725c5e0d0f126c4d29a09f03a92c652.png"
                    alt="header.sub-menus.products.app-chains.title"
                    className="jss1746"
                  />
                  <div className="MuiBox-root-1758 jss1766 jss1739">
                    <div className="MuiBox-root-1758 jss1767 jss1740">
                      <h4 className="MuiTypography-root-139 jss1741 MuiTypography-h4-147">
                        DeFi
                      </h4>
                      <svg
                        className="jss1747"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-139 jss1748 MuiTypography-body1-141">
                      Unlock secure, high-performing DeFi possibilities
                    </p>
                  </div>
                </span>
              </Link>
            </div>
            <div className="MuiBox-root-1758 jss1768 jss1738 jss1753">
              <Link
                to="/features/beyond-performance-the-sustainability-focus-of-trush-network"
                className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss1745 MuiButton-disableElevation-122"
                tabIndex={0}
                aria-disabled="false"
                role="link"
              >
                <span className="MuiButton-label-112">
                  <img
                    src="https://www.ankr.com/_next/static/images/automate-be37a08c54266ecc82b8f911f0d69d7c.png"
                    alt="header.sub-menus.products.automate.title"
                    className="jss1746"
                  />
                  <div className="MuiBox-root-1758 jss1769 jss1739">
                    <div className="MuiBox-root-1758 jss1770 jss1740">
                      <h4 className="MuiTypography-root-139 jss1741 MuiTypography-h4-147">
                        Sustainability
                      </h4>
                      <svg
                        className="jss1747"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-139 jss1748 MuiTypography-body1-141">
                      Promoting a greener blockchain future
                    </p>
                  </div>
                </span>
              </Link>
            </div>
            <div className="MuiBox-root-1758 jss1768 jss1738 jss1753">
              <Link
                to="/features/trush-and-the-web-3.0-landscape"
                className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss1745 MuiButton-disableElevation-122"
                tabIndex={0}
                aria-disabled="false"
                role="link"
              >
                <span className="MuiButton-label-112">
                  <img
                    src="https://www.ankr.com/_next/static/images/automate-be37a08c54266ecc82b8f911f0d69d7c.png"
                    alt="header.sub-menus.products.automate.title"
                    className="jss1746"
                  />
                  <div className="MuiBox-root-1758 jss1769 jss1739">
                    <div className="MuiBox-root-1758 jss1770 jss1740">
                      <h4 className="MuiTypography-root-139 jss1741 MuiTypography-h4-147">
                        Web 3.0{" "}
                      </h4>
                      <svg
                        className="jss1747"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-139 jss1748 MuiTypography-body1-141">
                      Experience the internet's future today
                    </p>
                  </div>
                </span>
              </Link>
            </div>
            <div className="MuiBox-root-1758 jss1768 jss1738 jss1753">
              <Link
                to="/features/cross-chain-interoperability-with-trush"
                className="MuiButtonBase-root-138 MuiButton-root-111 MuiButton-text-113 jss1745 MuiButton-disableElevation-122"
                tabIndex={0}
                aria-disabled="false"
                role="link"
              >
                <span className="MuiButton-label-112">
                  <img
                    src="https://www.ankr.com/_next/static/images/automate-be37a08c54266ecc82b8f911f0d69d7c.png"
                    alt="header.sub-menus.products.automate.title"
                    className="jss1746"
                  />
                  <div className="MuiBox-root-1758 jss1769 jss1739">
                    <div className="MuiBox-root-1758 jss1770 jss1740">
                      <h4 className="MuiTypography-root-139 jss1741 MuiTypography-h4-147">
                        Interoperability
                      </h4>
                      <svg
                        className="jss1747"
                        width={15}
                        height={14}
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 6h10.586L6.293 1.707 7.707.293 14.414 7l-6.707 6.707-1.414-1.414L10.586 8H0V6z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <p className="MuiTypography-root-139 jss1748 MuiTypography-body1-141">
                      Experience seamless cross-chain transactions
                    </p>
                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
