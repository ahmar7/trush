import React from "react";
import "./Banner.css";
import { Build } from "../../../utils/allImg";
import AnimationsVideo from "../../../assets/img/Animation.mp4";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="MuiPaper-root-178 jss165 MuiPaper-elevation0-181">
      <div className="MuiBox-root-234 jss235 jss231">
        {/*

          <a
            className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-text-238 jss232 jss233 MuiButton-textPrimary-239 MuiButton-disableElevation-247"
            
            
            
            
            href="/app-chains/"
          >
            <span className="MuiButton-label-237">Ankr AppChains</span>
          </a>
          <button
            className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-text-238 jss232 MuiButton-disableElevation-247"
            
            type="button"
          >
            <span className="MuiButton-label-237">
              Official Partners
              <svg
                className="jss268"
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
          <a
            className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-text-238 jss232 MuiButton-textPrimary-239 MuiButton-disableElevation-247"
            
            
            
            
            href="/app-chains/configurator/"
          >
            <span className="MuiButton-label-237">AppChain Configurator</span>
          </a>

          */}
      </div>
      <div className="MuiContainer-root-271 jss166 MuiContainer-maxWidthLg-277">
        <div className="jss167 jss279 jss280">
          <h2 className="MuiTypography-root-281 jss168 MuiTypography-h2-287">
            <span className="jss170">Trush Network.</span>
          </h2>
          <h1 className="MuiTypography-root-281 jss169 MuiTypography-h1-286">
            The Future-Proof EVM Blockchain
          </h1>
          <p className="MuiTypography-root-281 jss171 MuiTypography-body1-283">
            Experience an EVM-compatible blockchain like no other, balancing
            high-speed performance with sustainable practices. Empowering users
            and developers with low fees, and an easy-to-use platform. Trush –
            where technology meets responsibility.
          </p>
          <div className="jss172">
            <Link
              to="/features/decentralized-applications-dapps-on-trush"
              className="njss175 button filled"
              href="#"
              style={{ width: 150 }}
            >
              Explore
            </Link>
            <a
              className="MuiButtonBase-root-263 MuiButton-contained-244 rm-mbl btn-transparent MuiButton-disableElevation-247"
              href="https://trush-foundation.gitbook.io/trush-network/node-provider/requirements-for-being-a-node-provider#use-your-own-hardware"
              target="_blank"
              style={{ height: 48 }}
            >
              Read Docs &nbsp;
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
            {/*
              <Link
                className="MuiButtonBase-root-263 MuiButton-root-236 MuiButton-contained-244 jss173 MuiButton-containedSecondary-246 MuiButton-disableElevation-247"
                 to=""
                
              >
                <span className="MuiButton-label-237">View All AppChains</span>
              </Link>
              */}
          </div>
        </div>
        <div className="jss176 jss279 jss280">
          <video
            muted
            loop
            className="jss177"
            autoPlay
            playsInline
            __idm_id__={974849}
          >
            <source src={AnimationsVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Banner;
