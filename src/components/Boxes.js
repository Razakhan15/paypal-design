import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Boxes = () => {
  return (
    <div>
      <center>
        <div className="grid grid-rows-6 md:grid-rows-3 md:grid-cols-2 lg:grid-rows-7 lg:grid-cols-6 lg:-mt-32 gap-4 lg:w-1/2 h-screen lg:h-full">
          <div className="hover:cursor-pointer row-span-1 lg:row-span-2 lg:col-span-3 lg:w-full h-full md:w-4/5  rounded-xl bg-blue-500 relative">
            <div className="absolute bottom-8 left-8 text-white flex justify-between items-center w-full">
              <span className="text-sm font-semibold 2xl:text-2xl ">
                Add Cash
              </span>
              <ArrowRightIcon className="h-5 2xl:h-10 w-10 right-14 absolute" />
            </div>
          </div>
          <div className="rounded-xl hover:cursor-pointer row-span-1 lg:row-span-3 bg-blue-500 lg:col-span-3 lg:w-full h-full md:w-4/5  relative">
            <img
              loading="lazy"
              className="h-full hidden md:block rounded-xl object-cover w-full"
              src="pic2.jpg"
              alt=""
            />
            <div className=" absolute top-8 left-8  text-white flex justify-between items-center w-full">
              <span className="text-sm font-semibold 2xl:text-2xl">
                Pay bills
              </span>
              <ArrowRightIcon className="h-5 w-10 2xl:h-10 right-14 absolute" />
            </div>
          </div>
          <div className="rounded-xl hover:cursor-pointer row-span-1 bg-blue-500 lg:row-span-3 lg:col-span-3 lg:w-full h-full md:w-4/5  relative ">
            <img
              loading="lazy"
              className="h-full hidden md:block rounded-xl object-cover  w-full"
              src="crypto.jpg"
              alt=""
            />
            <div className="absolute bottom-8 left-8 text-white flex justify-between items-center w-full">
              <span className="text-sm font-semibold 2xl:text-2xl">
                Buy and Sell Crypto
              </span>
              <ArrowRightIcon className="h-5 2xl:h-10 w-10 right-14 absolute" />
            </div>
          </div>
          <div className="rounded-xl hover:cursor-pointer bg-blue-500 row-span-1 lg:row-span-2 lg:col-span-3 lg:w-full h-full md:w-4/5  relative">
            <img
              loading="lazy"
              className="h-full hidden md:block rounded-xl object-cover  w-full"
              src="girl.jpg"
              alt=""
            />
            <div className="absolute top-8 left-8 text-white flex justify-between items-center w-full">
              <span className="text-sm font-semibold 2xl:text-2xl">
                PayPal Savings
              </span>
              <ArrowRightIcon className="h-5 2xl:h-10 w-10 right-14 absolute" />
            </div>
          </div>
          <div className="rounded-xl hover:cursor-pointer bg-blue-500 row-span-1 lg:row-span-2 lg:col-span-4 lg:w-full md:w-4/5 relative lg:h-80">
            <img
              loading="lazy"
              className="h-full hidden md:block rounded-xl object-cover lg:h-80 w-full"
              src="work.jpg"
              alt=""
            />
            <div className="absolute bottom-8 left-8 text-white flex justify-between items-center w-full">
              <span className="text-sm font-semibold 2xl:text-2xl">
                Set up Direct Deposit
              </span>
              <ArrowRightIcon className="h-5 2xl:h-10 w-10 right-14 absolute" />
            </div>
          </div>
          <div className="hover:cursor-pointer row-span-1 lg:row-span-2 lg:col-span-2 lg:w-full lg:h-80 relative md:w-4/5 rounded-xl bg-blue-500">
            <div className="absolute bottom-8 left-8 text-white flex justify-between items-center w-full">
              <span className="text-sm font-semibold 2xl:text-2xl">
                Cash a Check
              </span>
              <ArrowRightIcon className="h-5 2xl:h-10 w-10 right-14 absolute" />
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Boxes;
