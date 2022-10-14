import React from "react";
import { useState } from "react";

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
    <div name="Form">
      <div className="grid place-items-center mt-10">
        <div className="text-3xl mb-10">Form</div>
        <div>
          <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  onChange={handleNameChangeName}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 
      leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="Email"
                  name="Email"
                  id="Email"
                  onChange={handleNameChangeEmail}
                />
              </div>
            </div>
            <div className="md:flex md:items-center ">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 gap-4 flex">
                <div>
                  <button
                    className="shadow bg-purple-500  text-white 
      font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={handleSubmit}
                    disabled={!name || !email}
                  >
                    Register
                  </button>
                </div>
                <div>
                  <button
                    className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white 
      font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={handleClear}
                  >
                    Clear
                  </button>
                </div>
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
