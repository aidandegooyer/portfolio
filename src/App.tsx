import React from "react";
import {
  createHashRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import "./App.css";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <ScrollRestoration />
        <div className="app-container mt-8">
          <Home />
        </div>
        <Footer />
      </>
    ),
  },
  {
    path: "/resume",
    element: (
      <>
        <Navbar />
        <ScrollRestoration />
        <div className="app-container mt-8">
          <Resume />
        </div>
        <Footer />
      </>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <>
        <Navbar />
        <ScrollRestoration />
        <div className="app-container mt-8">
          <Portfolio />
        </div>
        <Footer />
      </>
    ),
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
