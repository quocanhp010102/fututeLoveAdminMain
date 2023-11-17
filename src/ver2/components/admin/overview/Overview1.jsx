import React from "react";
import { IoIosExpand, IoMdArrowDown,IoIosMore } from "react-icons/io";


const Overview1 = (prod) => {
  return (
    <>
      <div className="p-5 overview1-content">
        <div className="overview1-td d-flex justify-content-between">
          <h3>{prod.td}</h3>
          <IoIosExpand />
        </div>
        <div className="overview1-center">
            <h1>
                {
                    prod.than    
                }   <span className="overview1_tl" style={{color:"red"}}> <IoMdArrowDown/> 59%</span>
            </h1>
            <h4 className="pt-4 pb-4">last week : {prod.lastweek}</h4>
        </div>
      </div>
    </>
  );
};

export default Overview1;
