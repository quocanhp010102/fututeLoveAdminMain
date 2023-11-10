import { useNavigate } from "react-router";
import img from "../image/Screenshot_1.png";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { useState } from "react";
import AdminAvtMenu from "./AdminAvtMenu";

const user = JSON.parse(window.localStorage.getItem("user-info"));

const AdminHeader = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const navigate = useNavigate();

  const BackHome = () => {
    navigate("users");
  };

  return (
    <>
      <div className="flex justify-between w-full bg-white h-40 shadow-slate-400 shadow-md">
        <div className="flex h-full items-center w-60 sm:w-[26rem]">
          <img src={img} alt="" className="w-20 lg:mt-0" />
          <p
            className="text-3xl text-blue-400 flex items-center starborn"
            onClick={BackHome}
          >
            <Link>FUTURE LOVE</Link>
          </p>
          <img src={img} alt="" className="w-20" />
        </div>
        <div className="flex h-full items-center">
          <div className="relative">
            <IoIosNotifications
              className="lg:text-[56px] text-[38px] text-slate-500 mt-1 font-black mr-10 cursor-pointer transition-transform duration-300 hover:scale-125"
              onClick={() => {
                // handle noti
              }}
            />
          </div>
          <div>
            <img
              src={user.link_avatar}
              className="w-24 h-24 rounded-full mr-6 cursor-pointer"
              onClick={() => setIsShowMenu(!isShowMenu)}
              alt="avatar"
            />
            <AdminAvtMenu isShowMenu={isShowMenu} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
