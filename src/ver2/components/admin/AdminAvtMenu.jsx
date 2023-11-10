import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminAvtMenu = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      {props.isShowMenu && (
        <div className="absolute top-36 right-10 w-52 z-50 bg-white h-max rounded-[16px] shadow-lg">
          <ul>
            <li className="w-full h-32 flex justify-center items-center ">
              <NavLink
                onClick={handleLogout}
                className="pt-16 slab font-extrabold text-3xl text-blue-400 px-8 py-2 rounded-2xl hover:bg-gray-300 hover:text-gray-500
             "
                to="/"
              >
                LOGOUT
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default AdminAvtMenu;
