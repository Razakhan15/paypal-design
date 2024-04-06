import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Page3 = () => {
  return (
    <div>
      <center>
        <div className="text-4xl font-bold w-2/5 mt-32">
          More ways to manage your money
        </div>
      </center>
      <div className="relative">
        <div className="absolute top-1/2 left-40">
          <h1 className="text-3xl font-bold w-1/3">
            Grow your PayPal Savings, with interest
          </h1>
          <p className="w-1/2 mt-5">
            Our 1.65% APY gives you even more room to build your rainy-day fund
            without monthly fees or minimum balances.⁶
          </p>
          <button className="text-blue-500 font-bold mt-5 flex gap-5 items-center">
            <span>More about PayPal Savings</span>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
        <img src="page2.png" alt="" />
      </div>
      <div className="relative ">
        <img src="page3.png" alt="" />
        <div className="absolute top-1/3 right-40 w-fit">
          <h1 className="text-3xl font-bold w-80">Discover crypto</h1>
          <p className=" mt-5 w-96">
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
