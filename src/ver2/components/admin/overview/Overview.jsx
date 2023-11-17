import React from "react";
import Overview1 from "./Overview1";
import { IoIosMore } from "react-icons/io";
import Overview2Content from "./Overview2Content";

const Overview = () => {
  return (
    <>
      <div className="overview1 d-flex">
        <Overview1 td="impression" than="1555K" lastweek="12232K" />
        <Overview1 td="impression" than="1555K" lastweek="12232K" />
        <Overview1 td="impression" than="1555K" lastweek="12232K" />
        <Overview1 td="impression" than="1555K" lastweek="12232K" />
      </div>
      <div className="overview22">
        <div className="overview2">
          <div className="overview2-td">
            <h3>Number of pairs created</h3>
            <IoIosMore />
          </div>
          <div className="overview2-nd w-100 d-flex justify-content-between">
              <Overview2Content  tennuoc="Viet Nam" tenmota="processes" tileghep="45%"/>
              <Overview2Content  tennuoc="Viet Nam" tenmota="processes" tileghep="45%"/>
              <Overview2Content  tennuoc="Viet Nam" tenmota="processes" tileghep="45%"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
