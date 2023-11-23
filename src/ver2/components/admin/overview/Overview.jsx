import React, { useState } from "react";
import { IoBagHandle } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa';
import "./css/Overview.css";
const Overview = () => {
  const [action,setAction]=useState(true);
  const handleAction=(e)=>{
      if(e.target.id==="customer"){
        setAction(true)
      }else if(e.target.id==="income"){
        setAction(false)
      }

  }
  const handleChildClick = (e) => {
    const parentId = e.target.parentNode.id;
    if(parentId==="customer"){
      setAction(true)
    }else if(parentId==="income"){
      setAction(false)
    }
  };
  return (
    <>
      <div className="overview">
        <div className="overview-td">
          <h2 className="p-5 fs-1">Products dashboard</h2>
        </div>
        <div className="overview-than">
          <div className="overview-than-td d-flex justify-content-between align-items-center">
            <h3 className="position-relative ml-5 pl-5">Overview</h3>
            <select className="shadow p-3  bg-white rounded" name="" id="">
              <option value="">all time</option>
              <option value="">last week </option>
              <option value="">last month </option>
            </select>
          </div>
          {
              action&& 
              <div className="overview-than-luachon d-flex justify-content-between rounded">
              <div id="customer" onClick={handleAction}  className="overview-than-luachon action  d-flex w-40 justify-content-between rounded align-items-center">
                  <div  className="l1">
                     <IoBagHandle className="bg-primary text-white rounded-circle p-2 mb-4" size={20} color="#000" />
                  </div>
                  <div className="l2">
                    <div className="td">
                     <h3 className="fs-1 text-muted">customer</h3>
                    </div>
                    <div className="value">
                      <span className="fs-1">1024</span>
                    </div>
                  </div>
                  <div className="l3">
                      <span className="d-flex align-items-center mb-5 bg-success text-white p-1 rounded">
                        <FaArrowDown className="text-white" size={10} color="#000" />
                         <span>38,7</span>
                      </span>
                  </div>
    
                </div>
                <div id="income" onClick={handleAction} className="overview-than-luachon  d-flex w-40 justify-content-between rounded align-items-center">
                  <div className="l1">
                     <IoBagHandle className="bg-primary text-white rounded-circle p-2 mb-4" size={20} color="#000" />
                  </div>
                  <div className="l2">
                    <div className="td">
                     <h3 className="fs-1 text-muted">income</h3>
                    </div>
                    <div className="value">
                      <span className="fs-1">1024</span>
                    </div>
                  </div>
                  <div className="l3">
                      <span className="d-flex align-items-center mb-5 bg-success text-white p-1 rounded">
                        <FaArrowDown className="text-white" size={10} color="#000" />
                         <span>38,7</span>
                      </span>
                  </div>
    
                </div>
                     </div>
            }
            {
              !action&& <div id="" className="overview-than-luachon d-flex justify-content-between rounded">
              <div id="customer" onClick={handleAction}  className="overview-than-luachon  d-flex w-40 justify-content-between rounded align-items-center">
                  <div className="l1">
                     <IoBagHandle className="bg-primary text-white rounded-circle p-2 mb-4" size={20} color="#000" />
                  </div>
                  <div className="l2">
                    <div className="td">
                     <h3 className="fs-1 text-muted">customer</h3>
                    </div>
                    <div className="value">
                      <span className="fs-1">1024</span>
                    </div>
                  </div>
                  <div className="l3">
                      <span className="d-flex align-items-center mb-5 bg-success text-white p-1 rounded">
                        <FaArrowDown className="text-white" size={10} color="#000" />
                         <span>38,7</span>
                      </span>
                  </div>
    
                </div>
                <div id="income" onClick={handleAction} className="overview-than-luachon action  d-flex w-40 justify-content-between rounded align-items-center">
                  <div className="l1">
                     <IoBagHandle className="bg-primary text-white rounded-circle p-2 mb-4" size={20} color="#000" />
                  </div>
                  <div className="l2">
                    <div className="td">
                     <h3 className="fs-1 text-muted">income</h3>
                    </div>
                    <div className="value">
                      <span className="fs-1">1024</span>
                    </div>
                  </div>
                  <div className="l3">
                      <span className="d-flex align-items-center mb-5 bg-success text-white p-1 rounded">
                        <FaArrowDown className="text-white" size={10} color="#000" />
                         <span>38,7</span>
                      </span>
                  </div>
    
                </div>
                     </div>
            }
           
         
        </div>
      </div>
    </>
  );
};

export default Overview;
