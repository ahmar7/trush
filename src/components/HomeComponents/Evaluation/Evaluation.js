import React, { useEffect, useState } from "react";
import "./Evaluation.css";
const Evaluation = () => {
  const [activeContainer1, setactiveContainer1] = useState(true);
  const [activeContainer2, setactiveContainer2] = useState(false);
  const [activeContainer3, setactiveContainer3] = useState(false);
  const [activeToggle, setactiveToggle] = useState(true);

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

        setactiveToggle(false);
        setTimeout(() => {
          setactiveToggle(true);
        }, 200);
      }

      return clearInterval(myInter);
    }, 8100);
    console.log("change");
  }, [activeContainer2, activeContainer1, activeContainer3]);
  return (
    <div className="style__Container-fyg5vl-0 ghLbDN">
      <div className="style__Header-fyg5vl-1 hUSrKw">
        <h1 className="MuiTypography-root-281 jss373 MuiTypography-h1-286">
          Safety First: {/* */}
          <span className="jss374"> Trush Design</span>
        </h1>
        <div className="style__ItemContainer-fyg5vl-4 fFiHgz MuiContainer-root-81 MuiContainer-maxWidthLg-87">
          <div
            className="progress-br"
            style={{
              position: "absolute",

              height: "3px",
              top: "130px",
            }}
          >
            <div className="style__BackLine-fyg5vl-13 fQHfRX" />
            <div
              id="daas_evolution_bg_line"
              className={
                activeToggle
                  ? "style__BgLine-fyg5vl-12 jjcvev"
                  : "style__BgLine-fyg5vl-12 "
              }
            />
          </div>
          <div className="style__Item-fyg5vl-5 zRIGw">
            <div
              id="evolution-itemTitle-1"
              className={
                activeContainer1
                  ? "style__ItemTitle-fyg5vl-6 TPjzn active-boxs"
                  : "style__ItemTitle-fyg5vl-6 TPjzn"
              }
            >
              Security-First
              <br />
              Design
            </div>
            <div
              id="evolution-line-1"
              className="style__Line-fyg5vl-7 gXQHOr"
            />
            <div
              id="evolution-info-container-1 "
              className={
                activeContainer1
                  ? "style__Info-fyg5vl-8 ioiuNB  active-boxs-f"
                  : "style__Info-fyg5vl-8 ioiuNB  "
              }
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABOCAMAAACuVkDmAAAAbFBMVEUAAAAAhv8AhP8Ahv8Ag/8Ahv8AgP8Ahf8Ahv8Ahf8Ahf8Ahv8Ahv8Ahf8Ahf8Ahv8Ag/8Ahv8Ahv8glf/7/f/c7v8Qjv/N5/9es/9uuv9+wv8/o//r9v+93/+d0P9Pq/+Nyf8/pP8Qjf+s2P+yukV/AAAAEnRSTlMAvyCgQN8QkO9ggHCwzzDQUFDj8NgwAAACdElEQVR4Xu2Y3W7rIAyAgRAgkK6dIf9pu+28/zseLUupUyfqFC62i31XlYo+YsvEJuwJBTdwKFgKisPEQSVINMzw/Q4BEblb4iCid0ssRLKffRIJkVe2Gw4zOduPyGHCCJaAyKYqESwJQYrkT/Ly3SKRuiyLdYczU5W4VYFyGdcSvzNysWK/F9vKJtLAJ5lijB1ho6BECYiM/I3eNQXcKBlGWQNLtFg/EiDRb6OQ4zUHDI1JANodLX4hySAatATJscTeItGwSSao5MDwnuW04iEZwwAzeCvBkZjJh41kvlQ0IVRXkhpnYJEGDtv4f2Hi4gFz4ICw9wzwjCjqfgw3eiDkUx2ZuZqF007OLyDEUAVE1cKSTDHhbEF64wnlw5/DAw2OyWz35xhS/RYIODX0pFFJOwYMjYmz55IKR9FgTf19SUC8D1jid0l6/9FWiZIOag/XREkN53CpkiVtlZyTNwDfJye2GgDaFEl8mETJpQpNqmQE8DV0ieFUnf+4JCc2tD6kS5pmp2QMmJ2nuNty9LHVbBNbuL+sKc7DsqVKmzlBJ4k712opoO3HfS3Xah5yONeCNM/lyRv7Gtbh6FJjAEFiOnvYpIiO2ZRDBPWN5h0wuSzwOo7njCm+IicxjR1gjFXLa4zBD3KUcRLHmq5+7HzzWBnB/dyRYY3C5bxI4fmkpBK2jGmjeXKUWEvHLTTpkGTQawwcGVOGXoxoauKFhVr4p9mhOZYuwlknnHSmJU4A3oemxjj2jJN1kq2hbKyf5FvG6Vdemv4kKoszf/I1P0+xlPfTnvrpIy0t9ld+DvrZT2RMJ0QTUSVMHBVLoeAA3D4R/Adw2ZxRYbyfPQAAAABJRU5ErkJggg=="
                alt="All-In-One Centralized Custody"
                className="style__Img-fyg5vl-9 kVAVax"
              />
              <div className="style__Main-fyg5vl-10 gNunOz jss170">
                Robust Protection Priority
              </div>
              <div className="style__Sub-fyg5vl-11 rAyIF">
                Decentralization & Validator Selection
              </div>
              <div className="style__Sub-fyg5vl-11 rAyIF">
                Security Protocols & Cryptography
              </div>
              <div className="style__Sub-fyg5vl-11 rAyIF">
                Intrusion Detection & Monitoring
              </div>
            </div>
          </div>
          <div className="style__Item-fyg5vl-5 zRIGw">
            <div
              id="evolution-itemTitle-2"
              className={
                activeContainer2
                  ? "style__ItemTitle-fyg5vl-6 TPjzn active-boxs"
                  : "style__ItemTitle-fyg5vl-6 TPjzn"
              }
            >
              Unique Security
              <br />
              Measures
            </div>
            <div
              id="evolution-line-2"
              className="style__Line-fyg5vl-7 gXQHOr"
            />
            <div
              id="evolution-info-container-2"
              style={{
                margin: "0px auto",
              }}
              className={
                activeContainer2
                  ? "style__Info-fyg5vl-8 ioiuNB  active-boxs-f"
                  : "style__Info-fyg5vl-8 ioiuNB  "
              }
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABFCAMAAADEkbAlAAAAdVBMVEUAAAAAhv8Ahf8Ag/8Ag/8Ahf8Ahv8AgP8Ahf8Ahf8Ahf8Ah/8Ahv8Ahv8Ahv8Ahv8Ahv8Ag/8Ahv8AiP8Ahv8glf/f8P9gs/9ApP+Awv+/4f8Qjv/v+P8wnf9wu//////P6P+f0v+Qyv/v9/9QrP/Q6P+v2f9d/h9XAAAAFHRSTlMAv4BAIGDfEM+QMJ9w76Cvj1BQb8f7J/wAAANbSURBVHherdfpgqI6EAXgJGRlVeeEHbfuue//iNcICLagGWbO/3wUVBECWQw3hpOFsASRIn4J9D6QYsEAAOqJUE6IkgOgRDAiEi7cE3GS7o1fmqW7AUn+CAkI4T3CpSLExLPbkcQvnBojwzuyZ+4ZRT2iUoBy4huTDU0I3a0JM/IHRvwj2MilURBrPiJiG0JEYhTZjkwN34bstVpEMkH+IELyV0Rpn0K4SeATKt4YEr6JVxEK7yRqrRAAf11KAP+AvUeKy9tc7RKi1BNSnT4kf0UU1TpSM+R8+hQ7IUEUuW6nMSFsN0PylevX51fkMHQ7caBkt4RvkQrlK6KHbkuH6OAWGa0hbXdpv2HzvMwfSKoppeN+yRhRuzursjWkApquKNGgfCAIx+l0ZTAtY/LhmXzj4tpi7VSJebwnB9LnE2L7vtdof3SHi1gRL6TsRrnrynxChvghAEYO2IpUR9Q90hRVuwlxKcteszdiBVGCBQuIW1DfS8gtbJ2fj2jOawiXTGTsJ1Lfr97B3tZdYS3crOD4hBwSyH2PxG5MqHpGvhrgerkA1onX/HREefqqnsaewyW4I2l4HzlK9bySCn3KlXcnEyLDY+oIc5VJPlYyIWVVlUDVVtfe+YmkM0TJnaBPzyTvLkfYfHimDZp2cT/hT8eVn925Ar3hlAbAZREhe4lErM1JOV9XoatXdzb1ZthqO+2SZxyfCP+J/Z5mLkexESlQj0iNpjhvQH6XmC5fADh+QkJjwh5hI3IBMJZydfCnSg5yH9D4bugR+WqaAnBvfVvB5vVxoTuyb4zIonB2embprDvt6T8LdHaoYgnZOWPXvz3UefQW82Mr6AA0DVAtI8zshBBwobPT8zNyBqxrDboVRDHGDFzkDYiM5q9IXljXoPLavvkWq8QhkVu7V8vbY/v5gy4ASO61x64jhAuhyCty/GT89jkplcX7NB6IV9YRte30uP0cC/4PTtSCrEfQITqhYxJNh0DSPib0+wsMF35VBN0T/4SakwWEhBHxDxNkEeEbkVBTybYh8WgoV0cWbEB+TUeGwMx+rgMqd8rTEMM5eULMMEaBiqknks7nWsePXqXurmjojUwzyVM9rsuclQV+SIBpv5pH7NwU+v8UY7FqJiMdkr+N4ovA/4yN1MpQsw77AAAAAElFTkSuQmCC"
                alt="Smart Contract Based Custody"
                className="style__Img-fyg5vl-9 kVAVax"
              />
              <div className="style__Main-fyg5vl-10 gNunOz jss170">
                PoS & Refined PoH Blend
              </div>
              <div className="style__Sub-fyg5vl-11 rAyIF">
                Layered Security Framework
              </div>
              <div className="style__Sub-fyg5vl-11 rAyIF">
                Audits & Bug Bounties
              </div>
              <div className="style__Sub-fyg5vl-11 rAyIF">
                Finality & Slashing Rule
              </div>
            </div>
          </div>
          <div className="style__Item-fyg5vl-5 zRIGw">
            <div
              id="evolution-itemTitle-3"
              className={
                activeContainer3
                  ? "style__ItemTitle-fyg5vl-6 TPjzn active-boxs"
                  : "style__ItemTitle-fyg5vl-6 TPjzn"
              }
            >
              Future-Proof
              <br />
              Innovation
            </div>
            <div
              id="evolution-line-3"
              className="style__Line-fyg5vl-7 gXQHOr"
            />
            <div
              id="evolution-info-container-3"
              style={{
                marginLeft: "auto",
              }}
              className={
                activeContainer3
                  ? "style__Info-fyg5vl-8 ioiuNB  active-boxs-f"
                  : "style__Info-fyg5vl-8 ioiuNB  "
              }
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABOCAMAAACuVkDmAAAA3lBMVEUAAAAAgP8Ahf8Ahv8Ag//f7/vf7vsAhv8Ah/8AgP8Ahv8Ahf/e7/wAhf/f7//e7/ve7/sAhv8Ah/8Ah//e7vsAh//c7vre7/wAhv8Ahf8Ahf8Ahf8Ahv/d7/vd7/rf7/rf7/pjtv7e7/tvvP5Lqv/d7/uo1fuUzPwQjf8Ahv+Cw/wtm/16v/2t2P3f7/s4n/84of+93fpKqvyGxv9Zr/9wu/uVxfoAhv8clP/e7/vC4vyLyP3Q6PxTrv44oP6m1fxvu/0Ojf9htP6Zzv203Pxvuv0qmv9Fp/59wf1Urv2Pyhy/AAAAN3RSTlMAIIDfQCBAvyAQ72DfkBCA76CfcKB/YL+wz1Aw0K9wbzDn0M+/kGDv38+/oJCPj4B/cGBQUEAwJ5rROQAABBNJREFUeF69l2d3qzgYhAWiY1yvu5Pctnd7L69Ec0vb//+H1pYQkhEOhnvOzlecB88kmTMvapI9v7PR16k/GFJK330VZjakTL1ZZ4Qzp6V677s5eUelmKdOYXAdk5hThoO2TnoFYpsDkIR2iKYvwohfgIkcC8xd/2bIbxyRPu1BKCs8/XMjwtoQxnjdg6oDw5CxgZrluQAMcoCKSHqGAJ40IfxpAAUENB0ZBACv3mSEAcB1SFJAAN7wZLkAzRCuqV8fxgjgdgjgsD6MFhCGqXpaYZDCv16H/Cg+KKORYUgFpm9fh9jMtVAwLZ1EoGhxor8FQchbCoaMRg0DXAuhJghCIa68NVSdTBAqIXsNsmUQJjNQPPnIlIzIRwrkkVwi9q9UQpAajSEhrozapkw79cu8xFRCGAZrEGwhRTavxjgTiHzLEHNb+ydRIVa153sc8wxQVlvPQZeKKhDhRcMkZL9Lr1Ss2QARntJ4+8gY3/RRG4jU3x+eSZ7lzyT7ljnpAPEW7uQL89T7Y4TDTpCQF9h9bzjon1sz8ttDppuCaxdhmEu/LWSy0X/EbQnxZOO4lqBEUTtI+QdsBbBeT7gRHxttIKuxoK0DwC4WxEUbyKK04AEsAYseDPxmiPMg3JS4EYyRNQK85qmIin+YXYHYczEe5Nf2OH4CC2FTDI+Pdg2k/wtlOm/F0BSQKQQRqz8O8Vy2J8V0qkJ+Hiq7ypwICAYXw9jERWY+Rv2B3HGfJER0jnz4WUBCwKyWl2vEId8/yJexESQgcgdtj7wDkw98K0YYWAiu+K38lYtPircmhEHOncOUZqLDHl9OnniLmgbrDYsXzPEgh1xMRRMb6KdY3VYck5ITaYDQCLsAY8vCYPA9mR3PHvLLBRb/jsTQJOo8y84ZOShcecDmhnkelCcwSU8vg1JPhQckvp+qLMkZBCEvMrxVaCEOSbLKkCOJhCRQESFbBlHl0JTw8leVlRDtERxIrEOy3SNoigWEaJBdQuIq5OlAt+0gNCF/IlV+9C9tDaHb76YXC/kz7QChXyIc8QYwJq5rOZ0gDvJCN1i6S7w0LYS6QpgM3mbdIVz/IyTXIEk9JNYhKYfo8wzytB5Cd1A35FBRCirmmTeODlEXmNoG5a7KLuGUbQFVoly3pDLkhvcI2fyh6JpdKieeNp1kJcpSHfSrD3PeVh+dNy/ddAd7+TL1oVT6A7om/5Oo1ro9yaMRV2jNuBJ3AHliAB6GZljkdv3Ks7DsRLkn9dxiWbaRod+6XCy5+XtUL2egnTK1R1Fgzhx0RdopIwf/5OIoaj7STdCuPGsDUhurESFPmfIA9lztrrpFa9VToDrRFvHN0ahhtJInotFjFmofDQQm6qQVbgijXTSu4qSbJxlGd8zCbHTyH0sTK8oQud82AAAAAElFTkSuQmCC"
                alt="App Chain Based Cross-Chain Custody"
                className="style__Img-fyg5vl-9 kVAVax"
              />
              <div className="style__Main-fyg5vl-10 gNunOz jss170">
                Community-Led Security
              </div>
              <div className="style__Sub-fyg5vl-11 rAyIF">
                Decentralized Governance
              </div>
              <div className="style__Sub-fyg5vl-11 rAyIF">
                Backup Nodes & Incentives
              </div>
              <div className="style__Sub-fyg5vl-11 rAyIF">
                Adoption of Advanced Practices
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluation;
