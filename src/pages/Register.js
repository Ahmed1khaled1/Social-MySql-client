import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-200">
      <div className="flex lg:w-[50%] md:w-[90%] h-full w-full md:h-[600px] bg-white rounded-lg">
        <div className=" w-full md:w-[50%] gap-10 p-10 flex flex-col justify-center ">
          <h1 className="text-4xl font-bold">Register</h1>
          <form className="w-full flex flex-col justify-center items-start gap-10">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="border-b-2 p-2 w-full"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border-b-2 p-2 w-full"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border-b-2 p-2 w-full"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="border-b-2 p-2 w-full"
              onChange={handleChange}
            />
            {err && err}
            <button
              onClick={handleClick}
              className=" text-white bg-purple-500 font-bold py-2 w-[50%]"
            >
              Register
            </button>
            <Link
              to="/login"
              className="md:hidden block text-white bg-purple-500 font-bold py-2 w-[50%] text-center"
            >
              <button>login</button>
            </Link>
          </form>
        </div>
        <div
          className="hidden md:flex bg-register rounded-lg w-[50%] gap-10 p-10 text-white flex-col
            justify-center items-start bg-cover bg-center "
        >
          <h1 className="text-7xl font-bold">Social App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="text-">Don't you have an account?</span>
          <Link
            to="/login"
            className="bg-white text-purple-600 font-bold py-2 w-[50%] text-center"
          >
            <button>login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
