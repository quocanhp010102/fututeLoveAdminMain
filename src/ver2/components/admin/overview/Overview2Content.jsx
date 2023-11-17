import React from 'react'
import { IoIosMore } from "react-icons/io";
import { IoCheckboxOutline } from "react-icons/io5";
const Overview2Content = (prod) => {
  return (
    <div className='w-30 p-3 overview2Content'>
        <div className="overview2Content-td">
        <h1>{prod.tennuoc}</h1>
        <IoIosMore />
        </div>
        <div className="overview2Content-tdpt">
            <p className="p1">{prod.tenmota}</p>
            <p className="p2">{prod.tileghep}</p>
        </div>
        <div className="overview2Content-pt mt-3">
            <div className="pt-left w-75">

            </div>
            <div className="pt-right w-25">
                
            </div>
        </div>
        <div className="overview2Content-pt2 d-flex justify-content-between mt-3">
             <IoCheckboxOutline />
             <div>.....</div>
        </div>
    </div>
  )
}

export default Overview2Content
