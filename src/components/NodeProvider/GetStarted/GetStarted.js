import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="MuiPaper-root MuiPaper-elevation0">
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div className="njss223">
          <div>
            <div className="njss226 jss170">Get Started</div>
            <div className="njss224">
              Ready to amplify your blockchain journey and reap rewards as a node provider?
            </div>
          </div>
          <div className="njss227">
            <div className="njss228">
              <div className="njss229">1</div>
              <div>
                <b className="jss170">Submit Your Application:</b> Begin your journey by applying to join our Node Provider waitlist through the <a href="#">Apply Now</a> button. Our dedicated team will promptly review your application.
              </div>
            </div>
            <div className="njss228">
              <div className="njss229">2</div>
              <div>
                <b className="jss170">Meet the Technical Requirements:</b> If you plan on running a node using your hardware, it needs to comply with Trush's performance benchmarks. Once you apply, we will assess your eligibility within two business days. If you choose to use our servers, you can proceed to the next step.
              </div>
            </div>
            <div className="njss228">
              <div className="njss229">3</div>
              <div>
                <b className="jss170">Provide Collateral:</b> Upon application approval, you'll be required to deposit a predetermined amount of TRS tokens to your Web3 wallet as collateral. This deposit ensures optimal performance and responsible conduct among Node Providers. We will inform you of the exact collateral amount upon your application approval.
              </div>
            </div>
            <div className="njss228">
              <div className="njss229">4</div>
              <div>
                <b className="jss170">Set Up Your Nodes:</b> Once the collateral is in place, you are ready to deploy your nodes. Download and install the Trush node software, synchronize it with the Trush network, and configure your node settings accordingly.
              </div>
            </div>
            <div className="njss228">
              <div className="njss229">5</div>
              <div>
                <b className="jss170">Manage Your Nodes and Reap Rewards:</b> The final stage involves independently managing your nodes. You may opt to process network requests via Trush's RPC load balancer, which will allow you to earn token rewards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
