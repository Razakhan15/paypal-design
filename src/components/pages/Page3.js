import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Page3 = () => {
  return (
    <div className="h-full">
        <div className="md:text-4xl text-center text-3xl font-bold w-full lg:mt-32 md:mt-16 mt-10">
          More ways to manage your money
        </div>
      <div className="md:relative mt-12 md:mt-0">
        <div className="md:absolute md:top-1/4 lg:top-1/2 lg:left-40">
          <h1 className="md:text-3xl text-2xl font-bold md:w-1/2 lg:w-1/3">
            Grow your PayPal Savings, with interest
          </h1>
          <p className="md:w-1/2 mt-5">
            Our 1.65% APY gives you even more room to build your rainy-day fund
            without monthly fees or minimum balances.⁶
          </p>
          <button className="text-blue-500 font-bold mt-5 flex gap-2 md:gap-5 items-center">
            <span>More about PayPal Savings</span>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
        <img className="hidden md:block w-full" loading="lazy" src="page2.png" alt="" />
      </div>
      <div className="md:relative mt-10 md:mt-0">
        <img className="hidden md:block w-full" loading="lazy" src="page3.png" alt="" />
        <div className="md:absolute lg:top-1/3 md:top-1/4 md:left-1/2 lg:left-[60%] w-fit">
          <h1 className="md:text-3xl text-2xl font-bold md:w-80">Discover crypto</h1>
          <p className=" mt-5 md:w-96">
            Learn how to buy, sell, transfer, and hold Bitcoin, Bitcoin Cash,
            Ethereum, and Litecoin with confidence.⁷
          </p>
          <button className="text-blue-500 font-bold mt-5 flex gap-5 items-center">
            <span>Explore crypto</span>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
