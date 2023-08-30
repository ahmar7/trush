import React from "react";
import "./DappsWhat.css";
const DappsWhat = (props) => {
  return (
    <div className="whatnew">
      <div className=" w-auto xl:w-full mx-6 sm:mx-9 md:mx-12 lg:mx-16 xl:mx-auto py-12 md:py-16 lg:py-24">
        <div className="text-center md:text-left">
          <h2 className="main__title jss170">{props.mainTitle}</h2>
          <p className="main__text features-margin">{props.Description}</p>
        </div>
        <div className="listColumn3">
          <div className="main-card dot undefined">
            <div className="pb-4 px-4 md:pb-[1.625rem] md:px-[1.625rem] flex flex-col justify-end h-[15.5rem] sm:h-[17.5rem] overflow-hidden text-center">
              <div className="grow">
                <img
                  alt="secure"
                  loading="lazy"
                  width={398}
                  height={170}
                  decoding="async"
                  data-nimg={1}
                  className="h-full object-cover mx-auto"
                  style={{ color: "transparent" }}
                  src={props.featureImg1}
                />
              </div>
              <h3 className="card-title -mt-1 jss170">{props.featureTitle1}</h3>
              <p className="card-subtitle mt-1.5 md:mt-2">
                {props.featureText1}
              </p>
            </div>
          </div>
          <div className="main-card dot undefined">
            <div className="pb-4 px-4 md:pb-[1.625rem] md:px-[1.625rem] flex flex-col justify-end h-[15.5rem] sm:h-[17.5rem] overflow-hidden text-center">
              <div className="grow">
                <img
                  alt="evm"
                  loading="lazy"
                  width={398}
                  height={170}
                  decoding="async"
                  data-nimg={1}
                  className="h-full object-cover mx-auto"
                  style={{ color: "transparent" }}
                  src={props.featureImg2}
                />
              </div>
              <h3 className="card-title -mt-1 jss170">{props.featureTitle2}</h3>
              <p className="card-subtitle mt-1.5 md:mt-2">
                {props.featureText2}
              </p>
            </div>
          </div>
          <div className="main-card dot undefined">
            <div className="pb-4 px-4 md:pb-[1.625rem] md:px-[1.625rem] flex flex-col justify-end h-[15.5rem] sm:h-[17.5rem] overflow-hidden text-center">
              <div className="grow">
                <img
                  alt="flash"
                  loading="lazy"
                  width={393}
                  height={175}
                  decoding="async"
                  data-nimg={1}
                  className="h-full object-cover mx-auto"
                  style={{ color: "transparent" }}
                  src={props.featureImg3}
                />
              </div>
              <h3 className="card-title -mt-1 jss170">{props.featureTitle3}</h3>
              <p className="card-subtitle mt-1.5 md:mt-2">
                {props.featureText3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DappsWhat;
