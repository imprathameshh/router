import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contactus from "./components/Pages/Contactus";
import User from "./components/Pages/User";
import Github, { githubInfoLoader } from "./components/Pages/Github";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Create Router 1 Start
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <About /> },
//       { path: "contact", element: <Contactus /> },
//     ],
//   },
// ]);
// Create Router 1 End
// Create Router 2 Start
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contactus />} />
      <Route path="user/:userid" element={<User />} />
      {/*For taking dynamic value */}
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

// Create Router 2 End

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
