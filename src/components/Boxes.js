import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Boxes = () => {
  return (
    <div>
    <center>
      <div className="grid grid-rows-7 grid-cols-6 -mt-32 gap-4 w-1/2 ab z-10 ">
        <div className="hover:cursor-pointer row-span-2 col-span-3 w-full h-full rounded-xl bg-blue-500 relative">
          <div className="absolute bottom-8 left-8 text-white flex justify-between items-center w-full">
            <span className="text-sm font-semibold 2xl:text-2xl ">
              Add Cash
            </span>
            <ArrowRightIcon className="h-5 2xl:h-10 w-10 right-14 absolute" />
          </div>
        </div>
        <div className=" hover:cursor-pointer row-span-3 col-span-3 w-full h-full  relative">
          <img
            className="h-full object-cover rounded-xl"
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
        <div className="hover:cursor-pointer row-span-3 col-span-3 w-full h-full  relative ">
          <img
            className="h-full object-cover rounded-xl"
            src="crypto.jpg"
            alt=""
          />
          <div className="absolute bottom-8 left-8 text-white flex justify-between items-center w-full">
            <span className="text-sm font-semibold 2xl:text-2xl">
              Buy and Sell Crypto
            </span>
            <ArrowRightIcon className="h-7 2xl:h-10 w-10 right-14 absolute" />
          </div>
        </div>
        <div className="hover:cursor-pointer row-span-2 col-span-3 w-full h-full  relative">
          <img className="object-cover rounded-xl" src="girl.jpg" alt="" />
          <div className="absolute top-8 left-8 text-white flex justify-between items-center w-full">
            <span className="text-sm font-semibold 2xl:text-2xl">
              PayPal Savings
            </span>
            <ArrowRightIcon className="h-7 2xl:h-10 w-10 right-14 absolute" />
          </div>
        </div>
        <div className="hover:cursor-pointer row-span-2 col-span-4 w-full relative h-80">
          <img
            className="rounded-xl object-cover z-0 h-80 w-full"
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
        <div className="hover:cursor-pointer row-span-2 col-span-2 w-full h-80 relative rounded-xl bg-blue-500">
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
