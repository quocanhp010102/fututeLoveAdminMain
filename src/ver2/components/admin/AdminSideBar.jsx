import { useState } from "react";
import {
  IoIosArrowRoundBack,
  IoIosMenu,
  IoIosPerson,
  IoIosText,
} from "react-icons/io";
import { useLocation, useNavigate } from "react-router";

const navList = [
  {
    name: "Users",
    icon: <IoIosPerson className="w-12 h-12" />,
    pathname: "/users",
  },
  {
    name: "Comments",
    icon: <IoIosText className="w-12 h-12" />,
    pathname: "/comments",
  },
  {
    name: "Example",
    icon: <IoIosMenu className="w-12 h-12" />,
    pathname: "/example",
  },
];

const AdminSideBar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location.pathname);

  return (
    <>
      <IoIosMenu
        className="text-6xl absolute mt-24 ml-[5%] lg:hidden"
        onClick={() => setShowNavBar(true)}
      />
      <div
        className={`w-[26rem] h-screen bg-white p-12 lg:block fixed top-0 left-0 ${
          showNavBar ? "" : "hidden"
        } lg:relative`}
      >
        <IoIosArrowRoundBack
          className="text-6xl ml-auto mr-0 lg:hidden"
          onClick={() => setShowNavBar(false)}
        />
        {navList.map((nav) => (
          <div
            key={nav.name}
            className={`flex items-center gap-6 text-3xl my-8 cursor-pointer ${
              nav.pathname === location.pathname && "text-blue-500"
            }`}
            onClick={() => navigate(nav.pathname)}
          >
            {nav.icon}
            <span>{nav.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminSideBar;
