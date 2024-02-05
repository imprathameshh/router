import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

//Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Sigin from "../compoents/SignIn/Sigin";
import Login from "../compoents/Login/Login";

const RoutesDemo = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sigin" element={<Sigin />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default RoutesDemo;
