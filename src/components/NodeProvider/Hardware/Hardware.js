import React from "react";
import "./Hardware.css";
const Hardware = () => {
  return (
    <section
      className="MuiPaper-root njss212 MuiPaper-elevation0"
      id="hardware"
    >
      <div className="MuiContainer-root MuiContainer-maxWidthLg">
        <div className="njss213">
          <div>
            <div className="njss202">
              <span>Use Your Hardware</span>
            </div>
            
            <div className="njss203">
              Should your current hardware meet the designated specifications of Trush, you can initiate nodes, manage network traffic, and accrue TRS tokens, optimizing your benefits by employing idle server capacity.
            </div>

            <div className="njss205">
              <svg
                width={13}
                height={12}
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.757 6.765l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.692l-.537.844 1.687 1.074zM1.508 8.327l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                  fill="black"
                />
              </svg>
              Maximized Earnings: Leverage idle server capacity for increased rewards.
            </div>
            <div className="njss205">
              <svg
                width={13}
                height={12}
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.757 6.765l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.692l-.537.844 1.687 1.074zM1.508 8.327l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                  fill="black"
                />
              </svg>
              Full Control: Enjoy complete autonomy over your node operations.
            </div>
            <div className="njss205">
              <svg
                width={13}
                height={12}
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.757 6.765l-.78-.625-1.25 1.562.78.625 1.25-1.562zm3.285 3.908l-.625.781a1 1 0 0 0 1.468-.244l-.843-.537zm6.316-8.063l.537-.844L11.208.692l-.537.844 1.687 1.074zM1.508 8.327l3.91 3.127 1.248-1.562-3.909-3.127-1.25 1.562zm5.377 2.883l5.473-8.6-1.687-1.074-5.473 8.6 1.687 1.074z"
                  fill="black"
                />
              </svg>
              Optimized Resources: Make the most out of your existing infrastructure.
            </div>
          </div>
          <div className="njss222">
            <div className="njss218">Node Types</div>
            <div className="njss218">Recommended Requirements</div>
            <div className="njss219" />
            <div className="njss220">RPC Full Node</div>
            <div className="njss221">
              <div>Quad-core CPU</div>
              <div>16GB RAM</div>
              <div>500GB SSD</div>
              <div>100Mbps Internet</div>
            </div>
            <div className="njss219" />
            <div className="njss220">Archive Node</div>
            <div className="njss221">
              <div>8-core CPU</div>
              <div>32GB RAM</div>
              <div>2TB SSD</div>
              <div>200Mbps Internet</div>
            </div>
          </div>
          <a className="njss175 button filled btn-node" href="#">
            Coming Soon
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hardware;
