import React from "react";
import { useState } from "react";
import Letter from "../public/letter.png";
import Image from "next/image";

function Form() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const handleNameChangeName = (event) => {
    setName(event.target.value);
  };
  const handleNameChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById(
      "demo"
    ).innerHTML = `Name: ${name} E-Mail: ${email}`;
    alert(`Name: ${name} E-Mail: ${email}`);
    document.getElementById("demo").style.display = "block";
  };
  const handleClear = () => {
    setName("");
    setEmail("");
    document.getElementById("Email").value = "";
    document.getElementById("name").value = "";
    document.getElementById("demo").style.display = "none";
  };

  return (
    <div id="Form">
      <div className="grid place-items-center mt-10 ">
        <div className="text-3xl mb-10 ">Form</div>
        <div className="w-full max-w-xs sm:max-w-xl bg-slate-50 rounded-xl p-3 sm:p-10 shadow-md">
          <div className="flex justify-center p-6">
            <Image src={Letter} width={100} height={100} />
          </div>
          <div className="grid place-items-center gap-4 p-4">
            <div className="text-4xl font-bold">SUBSCRIBE</div>
            <div className="text-center">
              Subscribe to our newsletter and stay updated.
            </div>
          </div>
          <form className="grid place-items-center">
            <div className="md:flex md:justify-center mb-6 px-2 w-full">
              <div className="md:w-3/12 md:grid md:place-items-center ">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Full Name
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  onChange={handleNameChangeName}
                />
              </div>
            </div>
            <div className="md:flex md:justify-center mb-6 px-2 w-full">
              <div className="md:w-3/12 md:grid md:place-items-center ">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Email
                </label>
              </div>
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-full w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="Email"
                  name="Email"
                  id="Email"
                  onChange={handleNameChangeEmail}
                />
              </div>
            </div>

            <div className=" gap-4 flex w-fit">
              <div>
                <button
                  className="shadow bg-purple-500  text-white 
      font-bold py-2 px-4 rounded-full"
                  type="button"
                  onClick={handleSubmit}
                  disabled={!name || !email}
                >
                  Subscribe
                </button>
              </div>
              <div>
                <button
                  className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white 
      font-bold py-2 px-4 rounded-full"
                  type="button"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
          <p id="demo"></p>
        </div>
      </div>
    </div>
  );
}

export default Form;
