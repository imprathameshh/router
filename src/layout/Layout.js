import React from "react";
import Navbar from "../compoents/Header/Navbar";
import Footer from "../compoents/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
