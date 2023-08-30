import React from "react";
import "./Banner.css";
import "./BannerNew.css";
import "./Page.css";
import Banner from "../../FeaturePages/BuildDapps/Banner/Banner";
import BannerImg1 from "../../../assets/img/home-banner.webp";
import { Link } from "react-router-dom";
const BannerData = () => {
  let title = "The TRS Token";
  let description =
    "TRS acts as the catalyst for Trush, steering operations, reinforcing security, and boosting network users. Its broad spectrum of use cases reinforces our commitment to a proficient and forward-thinking decentralized ecosystem.";
  let btnText = "Buy TRS Token";
  let btnLink = "https://trush-foundation.gitbook.io/trush-network/buy-usdtrs";
  let link1 = "Migrate from ETH";
  let link2 = " Get Help";
  let bannerImg = BannerImg1;
  return (
    <div>
      <div className="home-hero MuiPaper-root jss281 MuiPaper-elevation0">
        <div className="MuiContainer-root relate rel-mar MuiContainer-maxWidthLg for-biger">
          <div className="hero-image-anim">
            <img
              id="hero-image-coin"
              src="https://pivx.org/build/images/content/img_home_coin.png"
              alt="PIVX Private Instant Verified Transactions"
            />
            <img
              id="hero-image-lock"
              src="https://pivx.org/build/images/content/img_home_lock.png"
              alt="Private Transactions"
            />
            <img
              id="hero-image-bolt"
              src="https://pivx.org/build/images/content/img_home_bolt.png"
              alt="Instant Transactions"
            />
            <img
              id="hero-image-bars"
              src="https://pivx.org/build/images/content/img_home_bars.png"
              alt="Masternodes, Cold Staking and Proof of Stake"
            />
          </div>
          <div className="hero-content hero-slider-screen">
            <div className="hero-icons columns">
              <div className="hero-icon column-icon">
                <a
                  href="https://discord.pivx.org/"
                  target="_blank"
                  rel="noopener"
                  style={{ transform: "rotate(-360deg)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M20.636 21.06a2.763 2.763 0 102.53 2.753 2.643 2.643 0 00-2.528-2.753h-.002zm9.052 0a2.763 2.763 0 102.53 2.753 2.642 2.642 0 00-2.527-2.753h-.003zM41.742.25H8.507a5.098 5.098 0 00-5.085 5.109v33.534a5.096 5.096 0 005.084 5.109h28.126l-1.313-4.588 3.173 2.95 3.003 2.778 5.332 4.712V5.359A5.096 5.096 0 0041.742.25zm-9.574 32.393s-.892-1.066-1.635-2.009a7.826 7.826 0 004.488-2.951 14.215 14.215 0 01-2.854 1.463 16.295 16.295 0 01-3.596 1.067c-2.124.39-4.302.382-6.423-.025a20.811 20.811 0 01-3.646-1.066 14.528 14.528 0 01-1.811-.844c-.074-.05-.149-.075-.223-.124a.363.363 0 01-.099-.073c-.446-.249-.695-.422-.695-.422a7.731 7.731 0 004.341 2.927c-.744.942-1.662 2.058-1.662 2.058a8.99 8.99 0 01-7.564-3.77 33.199 33.199 0 013.572-14.461 12.266 12.266 0 016.969-2.604l.248.298a16.71 16.71 0 00-6.523 3.25s.546-.298 1.463-.719a18.612 18.612 0 015.63-1.563c.139-.028.28-.045.421-.049a20.994 20.994 0 015.01-.05 20.207 20.207 0 017.466 2.381 16.483 16.483 0 00-6.176-3.15l.349-.397a12.263 12.263 0 016.968 2.604 33.21 33.21 0 013.573 14.46 9.067 9.067 0 01-7.591 3.769z" />
                  </svg>
                </a>
              </div>
              <div className="hero-icon column-icon">
                <a
                  href="https://twitter.com/_PIVX/"
                  target="_blank"
                  rel="noopener"
                  style={{ transform: "rotate(-360deg)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                  </svg>
                </a>
              </div>
              <div className="hero-icon column-icon">
                <a
                  href="https://github.com/PIVX-Project/PIVX/"
                  target="_blank"
                  rel="noopener"
                  style={{ transform: "rotate(-360deg)" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path
                      d="M50,24.969c-0.001,10.742-6.872,20.279-17.061,23.683c-1.267,0.242-1.717-0.533-1.717-1.203
	c0-0.818,0.029-3.51,0.029-6.846c0.129-1.715-0.488-3.4-1.695-4.623c5.563-0.619,11.399-2.73,11.399-12.32
	c0.039-2.479-0.881-4.877-2.565-6.697c0.764-2.151,0.674-4.514-0.248-6.606c0,0-2.093-0.67-6.858,2.562
	c-4.093-1.119-8.41-1.119-12.502,0c-4.771-3.23-6.865-2.562-6.865-2.562c-0.919,2.093-1.007,4.455-0.246,6.606
	c-1.685,1.82-2.605,4.22-2.57,6.697c0,9.566,5.829,11.708,11.374,12.339c-0.91,0.887-1.472,2.072-1.586,3.338
	c-2.559,1.438-5.8,0.531-7.24-2.027c-0.009-0.018-0.018-0.031-0.025-0.049c-0.81-1.4-2.221-2.35-3.825-2.57
	c0,0-2.439-0.031-0.171,1.516c1.329,0.85,2.313,2.143,2.771,3.65c0,0,1.465,4.855,8.411,3.348c0.012,2.084,0.034,3.652,0.034,4.246
	c0,0.66-0.456,1.434-1.704,1.203C4.06,44.295-3.01,30.158,1.351,17.077C5.712,3.997,19.849-3.072,32.928,1.288
	C43.124,4.684,49.999,14.223,50,24.969z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="jss170">
              TRS Token<span>Trush. Shaping tomorrow, today.</span>
            </h1>
            <h2>
              TRS acts as the catalyst for Trush, steering operations, reinforcing security, and boosting network users. Its broad spectrum of use cases reinforces our commitment to a proficient and forward-thinking decentralized ecosystem.
            </h2>
            <div className="hero-actions columns">
              <a href="https://trush-foundation.gitbook.io/trush-network/buy-usdtrs"
              target="_blank"
              className="njss175 button filled hero-get-trs"
              style={{ "width": "180px" }}
            >
              Get TRS Token
            </a>
            <a
              className="MuiButtonBase-root-263 MuiButton-contained-244 btn-transparent MuiButton-disableElevation-247"
              href="https://trush-foundation.gitbook.io/trush-network/node-provider/requirements-for-being-a-node-provider#use-your-own-hardware"
              target="_blank"
              style={{ height: 48, "margin-left": "21.5px" }}
            >
              Join Community &nbsp;
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6953 3.93057L17.3203 9.55557C17.4358 9.67503 17.5004 9.8347 17.5004 10.0009C17.5004 10.1671 17.4358 10.3267 17.3203 10.4462L11.6953 16.0712C11.5739 16.1709 11.4197 16.2218 11.2628 16.2141C11.1059 16.2064 10.9575 16.1406 10.8464 16.0295C10.7353 15.9184 10.6695 15.77 10.6618 15.6131C10.6541 15.4562 10.705 15.302 10.8047 15.1806L15.3672 10.6259H3.125C2.95924 10.6259 2.80027 10.56 2.68306 10.4428C2.56585 10.3256 2.5 10.1666 2.5 10.0009C2.5 9.83512 2.56585 9.67615 2.68306 9.55894C2.80027 9.44173 2.95924 9.37588 3.125 9.37588H15.3672L10.8047 4.82119C10.705 4.69976 10.6541 4.54559 10.6618 4.38868C10.6695 4.23178 10.7353 4.08334 10.8464 3.97226C10.9575 3.86118 11.1059 3.79538 11.2628 3.78767C11.4197 3.77997 11.5739 3.8309 11.6953 3.93057V3.93057Z"
                  fill="#3060DF"
                />
              </svg>
            </a>
            </div>
          </div>
        </div>
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={3}
                fill="rgba(142, 172, 255, .3)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={0}
                fill="rgb(211, 225, 255)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(48, 96, 223, .5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={7}
                fill="rgba(32, 70, 182, .7)"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BannerData;
