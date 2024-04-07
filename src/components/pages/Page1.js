import React from "react";

const Page1 = () => {
  return (
    <div className="h-full mt-14  md:mt-20 lg:mt-0">
      <div className="lg:-mt-16 md:relative">
        <img
          loading="lazy"
          className="h-full w-full hidden md:block"
          src="page 1.png"
          alt=""
        />
        <p className="md:absolute md:top-[60%] lg:text-3xl text-2xl md:w-96 md:right-0 lg:right-1/4 font-bold">
          Payday's here. Bill? Paid. Spend a little. Save the rest. Watch your
          money grow. Breathe easy.{" "}
          <span className="text-blue-500">
            Your money matters? All in one app
          </span>
        </p>
      </div>
    </div>
  );
};

export default Page1;
