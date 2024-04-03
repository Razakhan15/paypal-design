import React from "react";

const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border-b-2">
    <div className="flex items-center gap-10">
      <div>
        <img
        className="h-10 w-10"
          src="https://1000logos.net/wp-content/uploads/2017/05/emblem-Paypal.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-10 text-sm text-blue-800">
        <button>Personal</button>
        <button>Business</button>
        <button>Developer</button>
        <button>Help</button>
      </div>
      </div>
      <div className="flex gap-5">
        <button className="py-1 px-7 rounded-full border-2 border-blue-800">Log In</button>
        <button className="py-1 px-7 rounded-full bg-blue-800 text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
