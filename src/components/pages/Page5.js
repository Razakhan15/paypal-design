import React from "react";

const Page5 = () => {
  return (
    <div className="relative">
      <div className="absolute  top-1/4 flex justify-evenly">
        <div className="w-1/2  ">
          <center>
            <h1 className="w-9/12 text-5xl font-bold">
              Join the millions around the world who love PayPal
            </h1>
            <p className="text-lg w-4/5 text-left ml-28 mt-5 font-semibold">
              Easily and Securely spend, send, and manage your transactions--all
              in one place. Download the app on your phone or sign up for free
              online.
            </p>
          </center>
        </div>
        <div className="w-1/2 ">
          <center className="flex flex-col items-center gap-5">
            <img className="w-32" src="qr.jpg" alt="" />
            <p>Scan the code or enter your number to get the app.</p>
            <input placeholder="Phone number" className="p-5 w-1/2 border-2 border-black rounded-sm" type="number" name="" id="" />
            <button className="py-2 px-5 rounded-full bg-blue-900 text-white">Send Link</button>
            <p className="text-xs w-1/2 font-bold">
              By clicking Send Link you agree to recieve a text message with a
              link to PayPal app.Message and data rates may apply.
            </p>
          </center>
        </div>
      </div>
      <img src="page5.png" alt="" />
    </div>
  );
};

export default Page5;
