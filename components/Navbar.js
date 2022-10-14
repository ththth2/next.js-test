import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";

function Navbar() {
  return (
    <div>
      <div className="h-28 bg-orange-600 flex">
        <div>
          <Image width={160} height={110} src={logo} />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#Service"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Docs
            </a>
            <a
              href="#Form"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
