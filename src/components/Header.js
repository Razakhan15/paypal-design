import React from "react";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border-b-2 text-blue-900">
    <div className="flex items-center gap-10">
      <div>
        <img
        className="h-10 w-10"
          src="https://1000logos.net/wp-content/uploads/2017/05/emblem-Paypal.jpg"
          alt="paypal logo"
        />
      </div>
      <div className="md:flex gap-10 text-sm hidden">
        <button>Personal</button>
        <button>Business</button>
        <button>Developer</button>
        <button>Help</button>
      </div>
      </div>
      <div className="flex gap-5">
        <button className="py-1 md:px-7 px-2 rounded-full border-2 border-blue-900">Log In</button>
        <button className="py-1 md:px-7 px-2 rounded-full bg-blue-900 text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
