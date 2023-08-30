import React, { useState, useEffect } from "react";
import "./NetworkSlider.css";
const NetworkSlider = () => {
  const [activeContainer1, setactiveContainer1] = useState(true);
  const [activeContainer2, setactiveContainer2] = useState(false);
  const [activeContainer3, setactiveContainer3] = useState(false);

  useEffect(() => {
    let myInter = setInterval(() => {
      if (
        activeContainer1 === true &&
        activeContainer2 === false &&
        activeContainer3 === false
      ) {
        setactiveContainer1(false);
        setactiveContainer2(true);
        setactiveContainer3(false);
      } else if (
        activeContainer1 === false &&
        activeContainer2 === true &&
        activeContainer3 === false
      ) {
        setactiveContainer1(false);
        setactiveContainer2(false);
        setactiveContainer3(true);
      } else if (
        activeContainer1 === false &&
        activeContainer2 === false &&
        activeContainer3 === true
      ) {
        setactiveContainer1(true);

        setactiveContainer2(false);
        setactiveContainer3(false);
      }
    }, 9000);
    return () => {
      clearInterval(myInter);
    };
  }, [activeContainer2, activeContainer1, activeContainer3]);
  let activeTog1 = () => {
    setactiveContainer1(true);
    setactiveContainer2(false);
    setactiveContainer3(false);
  };
  let activeTog2 = () => {
    setactiveContainer1(false);
    setactiveContainer2(true);
    setactiveContainer3(false);
  };
  let activeTog3 = () => {
    setactiveContainer1(false);
    setactiveContainer2(false);
    setactiveContainer3(true);
  };
  let activeNext = () => {
    if (activeContainer1 === true) {
      setactiveContainer1(false);
      setactiveContainer2(true);
      setactiveContainer3(false);
    } else if (activeContainer2 === true) {
      setactiveContainer1(false);
      setactiveContainer2(false);
      setactiveContainer3(true);
    } else {
      setactiveContainer1(true);
      setactiveContainer2(false);
      setactiveContainer3(false);
    }
  };
  let activePrev = () => {
    if (activeContainer2 === true) {
      setactiveContainer1(true);
      setactiveContainer2(false);
      setactiveContainer3(false);
    } else if (activeContainer3 === true) {
      setactiveContainer1(false);
      setactiveContainer2(true);
      setactiveContainer3(false);
    } else {
      setactiveContainer1(false);
      setactiveContainer2(false);
      setactiveContainer3(true);
    }
  };
  return (
    <div className="">
      <div className="home-section home-benefits-section">
        <div className="MuiContainer-root MuiContainer-maxWidthLg  ">
          <div className="slider-box">
            <div
              className={
                activeContainer1
                  ? "slider-content columns slider-content-1 showHidden"
                  : "slider-content columns slider-content-1 hideHidden"
              }
            >
              <div className="column-slider-image">
                <img
                  src="https://pivx.org/build/images/content/img_slider_lock.png"
                  alt="SHIELD Protocol"
                />
              </div>
              <div className="column-slider-text">
                <article
                // style={{ visibility: "hidden" }}
                >
                  <h2 className="jss170">
                    <span>Pushing the Limits in </span> Scalability Benchmark
                  </h2>
                  <p>
                    With Trush's unique consensus mechanism, we're setting new standards - over 50,000 TPS and even higher aspirations. Join us in the next-gen blockchain journey.
                  </p>
                </article>
              </div>
            </div>
            <div
              className={
                activeContainer2
                  ? "slider-content columns slider-content-2 showHidden"
                  : "slider-content columns slider-content-2 hideHidden"
              }
            >
              <div className="column-slider-image">
                <img
                  src="https://pivx.org/build/images/content/img_slider_bolt.png"
                  alt="Instant Transactions"
                />
              </div>
              <div className="column-slider-text">
                <article
                //   style={{ visibility: "inherit", opacity: 1, top: "80px" }}
                >
                  <h2 className="jss170">
                    <span>Seamless Transactions with </span>TRS Utility
                  </h2>
                  <p>
                    Whether it's DApps or smart contracts, TRS simplifies interactions in the Trush network. A universal medium ensuring consistency for every user.
                  </p>
                </article>
              </div>
            </div>
            <div
              className={
                activeContainer3
                  ? "slider-content columns slider-content-3 showHidden"
                  : "slider-content columns slider-content-3 hideHidden"
              }
            >
              <div className="column-slider-image">
                <img
                  src="https://pivx.org/build/images/content/img_slider_bars.png"
                  alt="Earn Rewards"
                />
              </div>
              <div className="column-slider-text">
                <article
                // style={{ visibility: "hidden" }}
                >
                  <h2 className="jss170">
                    <span>Fee Allocation Fuels </span>Growth & Value
                  </h2>
                  <p>
                    Transaction fees in TRS are strategically redistributed. From staking rewards to burning for value appreciation, TRS is at the core of Trush's sustainability.
                  </p>
                </article>
              </div>
            </div>
            <div className="slider-clicker">
              <a
                className="slider-clicker-up"
                onClick={activePrev}
                href="javascript:void(0)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M26.914 19.586l-2.828 2.828a.5.5 0 01-.707 0L16 15.036l-7.379 7.378a.5.5 0 01-.707 0l-2.828-2.828a.5.5 0 010-.707L15.293 8.672a1 1 0 011.414 0l10.207 10.207a.5.5 0 010 .707z" />
                </svg>
              </a>
              <a
                className={
                  activeContainer1 ? "slider-dot selected" : "slider-dot"
                }
                onClick={activeTog1}
                href="javascript:void(0)"
              />
              <a
                className={
                  activeContainer2 ? "slider-dot selected" : "slider-dot"
                }
                onClick={activeTog2}
                href="javascript:void(0)"
              />
              <a
                className={
                  activeContainer3 ? "slider-dot selected" : "slider-dot"
                }
                onClick={activeTog3}
                href="javascript:void(0)"
              />
              <a
                className="slider-clicker-down"
                href="javascript:void(0)"
                onClick={activeNext}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M26.914 13.121L16.707 23.328a1 1 0 01-1.414 0L5.086 13.121a.5.5 0 010-.707l2.828-2.828a.5.5 0 01.707 0L16 16.964l7.379-7.378a.5.5 0 01.707 0l2.828 2.828a.5.5 0 010 .707z" />
                </svg>
              </a>
            </div>
            <div className="slider-baseground">
              <img
                src="https://pivx.org/build/images/content/img_slider_base.png"
                alt="PIVX Home Slider Base"
              />
            </div>
            <div className="slider-background column-padded-around rounded-box purple-blue-bkg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSlider;
