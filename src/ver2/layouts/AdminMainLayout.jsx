import React from "react";
import { Outlet } from "react-router";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSideBar from "../components/admin/AdminSideBar";

const AdminMainLayout = () => {
  return (
    <>
      <AdminHeader />
      <div className="flex">
        <AdminSideBar />
        <div className="w-full h-full bg-[#E2E8F0]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminMainLayout;
