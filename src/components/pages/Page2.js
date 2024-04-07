import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Page2 = () => {
  return (
    <div className="lg:mt-20 md:mt-32 mt-14">
      <center>
        <div className=" font-bold ">
          <h1 className="text-3xl md:text-4xl lg:w-1/3">Make the most of your money</h1>
          <p className="text-lg md:text-xl mt-5">
            We make it simple to use and organize your money.
          </p>
          <p className="text-lg md:text-xl">
            So you're always in control of your finances.
          </p>
        </div>
      </center>
      <div className="mt-14 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-center h-1/4 w-full items-center gap-5 md:gap-20">
          <div className="md:w-1/4">
            <img loading="lazy" className="rounded-xl" src="pic3.jpg" alt="" />
          </div>
          <div className="md:w-[45%] lg:w-1/3 ">
            <h1 className="md:text-3xl text-2xl font-bold">Get paid early</h1>
            <p className="mt-5">
              Get paychecks and government payments automatically transferred to
              your PayPal balance¹ up to 2 days early.²
            </p>
            <button className="mt-5 flex items-center gap-3 text-blue-500">
              <p>More about Direct Deposite</p>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center h-1/4 w-full items-center gap-5 md:gap-20    ">
        <div className="md:hidden">
            <img loading="lazy" className="rounded-xl" src="pic4.jpg" alt="" />
          </div>
          <div className="md:w-[30%] lg:w-1/5 ">
            <h1 className="md:text-3xl text-2xl font-bold">Digitize your cash</h1>
            <p className="mt-5">
              Add cash³ with the app or the PayPal Cash Card⁴ at 100,000 at
              stores accross US, including Walmart, CVS, and 7-Eleven.
            </p>
            <button className="mt-5 flex items-center gap-3 text-blue-500">
              <p>More about adding cash</p>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="hidden md:block md:w-2/5">
            <img loading="lazy" className="rounded-xl" src="pic4.jpg" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center h-1/4 w-full items-center gap-5 md:gap-20    ">
          <div className="md:w-2/5">
            <img loading="lazy" className="rounded-xl" src="pic5.jpg" alt="" />
          </div>
          <div className="md:w-[30%] lg:w-1/5 ">
            <h1 className="md:text-3xl text-2xl font-bold">Skip the bank</h1>
            <p className="mt-5">
              Snap photos of checks with the Cash a Check⁵ feature in the app
              and add that money to your PayPal balance
            </p>
            <button className="mt-5 flex items-center gap-1 text-blue-500">
              <p>Explore mobile check cashing</p>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
