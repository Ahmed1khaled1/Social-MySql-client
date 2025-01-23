import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-indigo-200">
      <div className="flex lg:w-[50%] md:w-[90%] h-full w-full md:h-[600px] bg-white rounded-lg">
        <div
          className="hidden md:flex bg-login rounded-lg w-[50%] gap-10 p-10 text-white flex-col
            justify-center items-start bg-cover bg-center "
        >
          <h1 className="text-7xl font-bold">Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register" className="w-[50%]">
            <button className="bg-white  text-purple-600 font-bold py-2 w-[50%] text-center">
              Register
            </button>
          </Link>
        </div>

        <div className=" w-full md:w-[50%] gap-10 p-10 flex flex-col justify-center ">
          <h1 className="text-4xl font-bold">Login</h1>
          <form className="w-full flex flex-col justify-center items-start gap-10">
            <input
              type="text"
              placeholder="Username"
              name="username"
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
            {err && err}
            <button
              onClick={handleLogin}
              className=" text-white bg-purple-500 font-bold py-2 w-[50%]"
            >
              Login
            </button>
            <Link to="/register" className="block md:hidden text-white bg-purple-500 font-bold py-2 w-[50%] text-center" >
              <button >
                Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
