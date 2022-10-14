import React, { useState } from "react";
import Image from "next/image";
import Correct from "../public/correct.png";
import Close from "../public/close.png";

function Customize2() {
  return (
    <div>
      <div className="grid place-items-center mt-10">
        <div className="text-3xl">Pricing</div>
        <div className="mt-20 w-full max-w-5xl mx-auto grid p-4 sm:flex sm:justify-center sm:gap-20  sm:p-0">
          <div className="border-4 border-yellow-300 rounded-xl p-4 sm:w-2/5  sm:mt-0 md:w-2/5">
            <div className="grid place-items-center">
              <div
                className="bg-yellow-200 h-24 w-24 rounded-full grid place-items-center 
          text-white ring-4 ring-yellow-200 ring-offset-4 ring-offset-white"
              >
                <div className="flex">
                  <div className="text-lg">฿</div>
                  <div className="text-4xl">29</div>
                </div>
              </div>
              <div className="text-2xl my-6">Basic </div>
              <div className="grid w-full gap-2">
                <div className="flex w-full justify-between">
                  <div>One Select Template</div>
                  <div>
                    <Image width={15} height={15} src={Correct} />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div>100% Responsive Design</div>
                  <div>
                    <Image width={15} height={15} src={Correct} />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div>Credit Remove Permission</div>
                  <div>
                    <Image width={15} height={15} src={Close} />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div>Lifetime Template Updates</div>
                  <div>
                    <Image width={15} height={15} src={Close} />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="px-14 py-2 rounded-full border-2 border-yellow-200 text-yellow-200 hover:text-white hover:bg-yellow-200">
                  Purchase
                </button>
              </div>
            </div>
          </div>
          <div className="border-4 border-purple-300 rounded-xl p-4 mt-10 sm:w-2/5  sm:mt-0 md:w-2/5">
            <div className="grid place-items-center">
              <div
                className="bg-purple-200 h-24 w-24 rounded-full grid place-items-center 
          text-white ring-4 ring-purple-200 ring-offset-4 ring-offset-white"
              >
                <div className="flex">
                  <div className="text-lg">฿</div>
                  <div className="text-4xl">89</div>
                </div>
              </div>
              <div className="text-2xl my-6">Ultimate </div>
              <div className="grid w-full gap-2">
                <div className="flex w-full justify-between">
                  <div>One Select Template</div>
                  <div>
                    <Image width={15} height={15} src={Correct} />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div>100% Responsive Design</div>
                  <div>
                    <Image width={15} height={15} src={Correct} />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div>Credit Remove Permission</div>
                  <div>
                    <Image width={15} height={15} src={Correct} />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div>Lifetime Template Updates</div>
                  <div>
                    <Image width={15} height={15} src={Correct} />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="px-14 py-2 rounded-full border-2 border-purple-200 text-purple-200 hover:text-white hover:bg-purple-200">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customize2;
