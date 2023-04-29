import React from "react";

import { Outlet } from "react-router-dom";
import Navigationbar from "../pages/Shared/NavigationBar/Navigationbar";

const LoginLayout = () => {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
