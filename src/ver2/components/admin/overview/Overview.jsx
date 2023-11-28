import React, { useState } from "react";
import { IoBagHandle } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowUp } from 'react-icons/fa'; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import "./css/Overview.css";
import { Productview } from "./Productview";
import { Incomeview } from "./Incomeview";
ChartJS.register(ArcElement, Tooltip, Legend);
const optionsn = {
  plugins: {
    legend: {
      position: 'right', // or 'left', 'top', 'bottom'
    },
  },
};
export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 100, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const Overview = () => {
  const [action, setAction] = useState(true);
  const handleAction = (e) => {
    if (e.target.id === "customer") {
      setAction(true);
    } else if (e.target.id === "income") {
      setAction(false);
    }
  };
  const handleChildClick = (e) => {
    const parentId = e.target.parentNode.id;
    if (parentId === "customer") {
      setAction(true);
    } else if (parentId === "income") {
      setAction(false);
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
          {action && (
            <>
            <div className="overview-than-luachon d-flex justify-content-between rounded">
              <div
                id="customer"
                onClick={handleAction}
                className="overview-than-luachon action  d-flex w-40 justify-content-between rounded align-items-center"
              >
                <div className="l1">
                  <IoBagHandle
                    className="bg-primary text-white rounded-circle p-2 mb-4"
                    size={20}
                    color="#000"
                  />
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
                    <FaArrowDown
                      className="text-white"
                      size={10}
                      color="#000"
                    />
                    <span>38,7</span>
                  </span>
                </div>
              </div>
              <div
                id="income"
                onClick={handleAction}
                className="overview-than-luachon  d-flex w-40 justify-content-between rounded align-items-center"
              >
                <div className="l1">
                  <IoBagHandle
                    className="bg-primary text-white rounded-circle p-2 mb-4"
                    size={20}
                    color="#000"
                  />
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
                    <FaArrowDown
                      className="text-white"
                      size={10}
                      color="#000"
                    />
                    <span>38,7</span>
                  </span>
                </div>
              </div>

             
            </div>
            <div className="customer-nd mt-5">
                <div className="container row">
                  <div className="col-5 d-flex flex-wrap justify-content-center">
                    <div className="tlnap d-flex flex-column w-45 mt-5 ml-5 border-end">
                    <FaShoppingBag className="light-icon mb-3" />
                    <p>Tỉ lệ nạp tiền</p>
                    <h1>23%</h1>
                    <p className="d-flex align-items-center gap-2"><span className="arrow-up-icon d-flex align-items-center"> <FaArrowUp className="" /> 7.8%</span> this week</p>
                    </div>
                    <div className="tlnap d-flex flex-column w-45 mt-5 ml-5 border-end">
                    <FaShoppingBag className="light-icon mb-3" />
                    <p>Tỉ lệ nạp tiền</p>
                    <h1>23%</h1>
                    <p className="d-flex align-items-center gap-2"><span className="arrow-up-icon d-flex align-items-center"> <FaArrowUp className="" /> 7.8%</span> this week</p>
                    </div>
                    <div className="tlnap d-flex flex-column w-45 mt-5 ml-5 border-end">
                    <FaShoppingBag className="light-icon mb-3" />
                    <p>Tỉ lệ nạp tiền</p> 
                    <h1>23%</h1>
                    <p className="d-flex align-items-center gap-2"><span className="arrow-up-icon d-flex align-items-center"> <FaArrowUp className="" /> 7.8%</span> this week</p>
                    </div>
                    <div className="tlnap d-flex flex-column w-45 mt-5 ml-5 border-end">
                    <FaShoppingBag className="light-icon mb-3" />
                    <p>Tỉ lệ nạp tiền</p>
                    <h1>23%</h1>
                    <p className="d-flex align-items-center gap-2"><span className="arrow-up-icon d-flex align-items-center"> <FaArrowUp className="" /> 7.8%</span> this week</p>
                    </div>

                  </div>
                  <div className="col-7">
                   <div className="top-coutris fz-5">
                    <h1>top coustris</h1>
                    <div className="bieudo d-flex justify-content-center">
                    <Pie options={optionsn} className="fz-5 d-flex justify-content-center" data={data} />
                    </div>
                   
                   </div>
                  

                  </div>

                </div>
              </div>
              <div className="product container d-flex justify-content-between row pt-5">
                <div className="product-left col-7">
                  <div className="left-td d-flex justify-content-between align-items-center ">
                    <div className="td-left">
                      <h3>product activity</h3>
                    </div>
                    <div className="td-right">
                      <select className="border" name="" id="">
                        <option value="">last 2 week</option>
                        <option value="">last 2 week</option>
                      </select>
                    </div>
                  </div>

                </div>
                <div className="product-right col-4">
                  <h3>Product view</h3>
                  <Productview/>

   
                </div>

              </div>
            </>
            
          )}
          {!action && (
            <>
               <div
              id=""
              className="overview-than-luachon d-flex justify-content-between rounded"
            >
              <div
                id="customer"
                onClick={handleAction}
                className="overview-than-luachon  d-flex w-40 justify-content-between rounded align-items-center"
              >
                <div className="l1">
                  <IoBagHandle
                    className="bg-primary text-white rounded-circle p-2 mb-4"
                    size={20}
                    color="#000"
                  />
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
                    <FaArrowDown
                      className="text-white"
                      size={10}
                      color="#000"
                    />
                    <span>38,7</span>
                  </span>
                </div>
              </div>
              <div
                id="income"
                onClick={handleAction}
                className="overview-than-luachon action  d-flex w-40 justify-content-between rounded align-items-center"
              >
                <div className="l1">
                  <IoBagHandle
                    className="bg-primary text-white rounded-circle p-2 mb-4"
                    size={20}
                    color="#000"
                  />
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
                    <FaArrowDown
                      className="text-white"
                      size={10}
                      color="#000"
                    />
                    <span>38,7</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="income-ndc">
              <div className=" my-3 view-income d-flex justify-content-center">
                <Incomeview/>
              </div>
              <div className="top-coutries my-5">
                <h3 className="fs-1 ml-5">top coutries</h3>
                <div className="pie-data d-flex justify-content-center w-100">
                  <Pie options={optionsn} data={data}/>
                  <div className="ttct">
                  <table className="">
                    <tr>
                      <th>product</th>
                      <th>change</th>
                      <th>coutry rank</th>
                      <th>visit duration</th>
                      <th>total income</th>
                    </tr>
                    <tr>
                      <td>24%</td>
                      <td className="tang"><FaArrowUp/> 7.8%</td>
                      <td>#1</td>
                      <td>00.12.08</td>
                      <td>120k</td>
                    </tr>
                    <tr>
                      <td>24%</td>
                      <td className="tang"><FaArrowUp/> 7.8%</td>
                      <td>#1</td>
                      <td>00.12.08</td>
                      <td>120k</td>
                    </tr>
                    <tr>
                      <td>24%</td>
                      <td className="tang"><FaArrowUp/> 7.8%</td>
                      <td>#1</td>
                      <td>00.12.08</td>
                      <td>120k</td>
                    </tr>
                    <tr>
                      <td>24%</td>
                      <td className="tang"><FaArrowUp/> 7.8%</td>
                      <td>#1</td>
                      <td>00.12.08</td>
                      <td>120k</td>
                    </tr>
                    <tr>
                      <td>24%</td>
                      <td className="tang"><FaArrowUp/> 7.8%</td>
                      <td>#1</td>
                      <td>00.12.08</td>
                      <td>120k</td>
                    </tr>
                  </table>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className="product container d-flex justify-content-between row pt-5">
                <div className="product-left col-7">
                  <div className="left-td d-flex justify-content-between align-items-center ">
                    <div className="td-left">
                      <h3>product activity</h3>
                    </div>
                    <div className="td-right">
                      <select className="border" name="" id="">
                        <option value="">last 2 week</option>
                        <option value="">last 2 week</option>
                      </select>
                    </div>
                  </div>

                </div>
                <div className="product-right col-4">
                  <h3>Product view</h3>
                  <Productview/>

   
                </div>

              </div>
            </>
            
          )}
        </div>
      </div>
    </>
  );
};

export default Overview;
