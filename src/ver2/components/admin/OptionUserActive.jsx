import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import FormInput from "./FormInput";

import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";

const OptionUserActive = () => {
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = (isShow) => {
      setShowForm(isShow);
    };
    const navigate = useNavigate();
    return (
      <>
        
        <div className="absolute w-52 z-50 -ml-2 bg-white h-max rounded-[16px] shadow-lg">
          <ul>
            <li className="w-full py-4 flex justify-center items-center text-blue-500">
              <span className="cursor-pointer" >
                delete event
              </span>
            </li>
            <li className="w-full py-4 flex justify-center items-center text-blue-500">
              <span className="cursor-pointer"  >
                edit event
              </span>
            </li>
            <li className="w-full py-4 flex justify-center items-center text-blue-500">
              <span className="cursor-pointer">
                report event
              </span>
            </li>
          </ul>
        </div>
      </>
    );
  };

export default OptionUserActive
