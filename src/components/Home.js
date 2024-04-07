import React from "react";
import Boxes from "./Boxes";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="relative h-96 lg:h-full">
        <div className="absolute lg:left-32 lg:-top-10 top-10">
          <h4 className="font-semibold 2xl:text-2xl text-xs lg:text-sm">
            Manage your money
          </h4>
          <h1 className="lg:text-5xl md:text-4xl text-3xl mt-4 lg:w-80 font-bold 2xl:w-full 2xl:text-8xl">
            Finesse your finances.
          </h1>
          <p className="lg:w-5/12 mt-4 2xl:text-2xl 2xl:w-1/2 w-4/5 text-sm md:text-lg">
            More flexibility. More freedom. More choices. We have so many ways
            to organize your personal finances-- on the go or on the couch
          </p>
          <div className="mt-4 flex gap-5 2xl:text-2xl">
            <button className="px-4 py-2 text-sm lg:text-lg font-semibold bg-blue-900 text-white rounded-full">
              Get the App
            </button>
            <button className="px-4 py-2 font-semibold text-sm lg:text-lg  border-2 rounded-full border-blue-800">
              Sign Up
            </button>
          </div>
        </div>
        <img className="hidden lg:block mt-20 w-full" src="1.svg" alt="" />
      </div>

      <Boxes />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
    </>
  );
};

export default Home;
