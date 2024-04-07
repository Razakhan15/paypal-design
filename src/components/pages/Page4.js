import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const Page4 = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <img
          loading="lazy"
          className="md:hidden rounded-xl"
          src="pic6.jpg"
          alt=""
        />

        <div className="mt-5 md:mt-0">
          <h1 className="md:w-1/2 text-2xl md:text-3xl font-bold">
            Pay your bills in one place
          </h1>
          <p className="md:w-3/4 mt-3">
            Securely pay your utilities, TV, internet, phone bills and more.
          </p>
          <button className="flex items-center gap-5 mt-3 text-blue-500">
            <p>Pay bills with PayPal</p> <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
        <img
          loading="lazy"
          className="hidden md:block w-1/4 rounded-xl"
          src="pic6.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-16 gap-5 md:mt-32 md:gap-28">
        <img
          loading="lazy"
          className="md:w-1/4 rounded-xl"
          src="credit card.jpg"
          alt=""
        />
        <div className="md:w-2/5 lg:w-1/4">
          <h1 className="text-2xl md:text-3xl font-bold">Meet the PayPal Cash Card</h1>
          <p className="mt-3">
            Pay in person or online everywhere Mastercard is accepted. Plus,
            there's no monthly fee, minimum balance, or credit check required.⁴
          </p>
          <button className="flex items-center gap-2 lg:gap-5 mt-3 text-blue-500">
            <p>About the PayPal Cash Card</p>{" "}
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page4;
