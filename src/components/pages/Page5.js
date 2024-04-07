import React from "react";

const Page5 = () => {
  return (
    <div className="lg:relative mt-10 lg:mt-0   ">
      <div className="lg:absolute top-[20%] flex flex-col lg:flex-row justify-evenly">
        <div className="lg:w-1/2 ">
          <center>
            <h1 className="xl:w-9/12 text-2xl md:text-3xl lg:text-5xl font-bold">
              Join the millions around the world who love PayPal
            </h1>
            <p className="text-sm text-center md:text-lg lg:w-4/5 lg:text-left lg:ml-10 xl:ml-28 mt-5 font-semibold">
              Easily and Securely spend, send, and manage your transactions--all
              in one place. Download the app on your phone or sign up for free
              online.
            </p>
          </center>
        </div>
        <div className="lg:w-1/2  mt-10 lg:mt-0">
          <center className="flex flex-col items-center gap-5">
            <img loading="lazy" className="w-32 " src="qr.jpg" alt="" />
            <p>Scan the code or enter your number to get the app.</p>
            <input
              placeholder="Phone number"
              className="p-5 lg:w-1/2 border-2 border-black rounded-sm"
              type="number"
              name=""
              id=""
            />
            <button className="py-2 px-5 rounded-full bg-blue-900 text-white">
              Send Link
            </button>
            <p className="text-xs lg:w-1/2 font-bold lg:hidden xl:block">
              By clicking Send Link you agree to recieve a text message with a
              link to PayPal app.Message and data rates may apply.
            </p>
          </center>
        </div>
      </div>
      <img className="hidden lg:block w-full" loading="lazy" src="page5.png" alt="" />
    </div>
  );
};

export default Page5;
