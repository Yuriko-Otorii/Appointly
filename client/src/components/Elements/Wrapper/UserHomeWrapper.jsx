import React from "react";
// import SideWrapper from "./SideWrapper";
import SideMenu from "../../User/SideMenu";
import { Outlet } from "react-router";

const UserHomeWrapper = () => {
  return (
    <>
      <div className="md:flex ">
        <div className="hidden md:block h-93">
          <SideMenu />
        </div>

        <div className="h-93 ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserHomeWrapper;
