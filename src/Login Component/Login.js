import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  let navigate = useNavigate();

  const showDashboard = () => {
    localStorage.setItem("user", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));

    navigate("/dashboard");
  };

  const showRegisterForm = () => {
    navigate("/register");
  };

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-48">
      <div className="px-6 py-4">
        <h3 className="mt-1 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={email}
              placeholder="Email Address"
              aria-label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              value={password}
              placeholder="Password"
              aria-label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <label
              for="toggle-example-checked"
              className="flex items-center cursor-pointer relative"
            >
              <input
                type="checkbox"
                id="toggle-example-checked"
                className="sr-only"
                checked=""
              />
              <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
              <span className="ml-3 text-blue-500 text-sm font-medium">
                Remember me
              </span>
            </label>

            <button
              onClick={showDashboard}
              className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          Don't have an account?{" "}
        </span>

        <a
          onClick={showRegisterForm}
          href=""
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Login;
