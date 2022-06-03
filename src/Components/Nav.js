import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [logout, setLogout] = useState(false);

  const openToLogout = () => {
    setIsMenuShow(isMenuShow);
    setLogout(!logout);
  };

  const openDrop = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  let navigate = useNavigate();

  const backToLogin = () => {
    navigate("/");
    window.localStorage.clear();
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800 mb-2">
      <div className="container px-6 py-4 mx-auto">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Link
                className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                to="/dashboard"
              >
                nProject
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`flex-1 md:flex md:items-center md:justify-between ${
              isMenuOpen ? "hidden" : "block"
            }`}
          >
            <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
              <Link
                to="/dashboard"
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                Dashboard
              </Link>
              <Link
                to="/project"
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                Project
              </Link>
              <Link
                to="/teams"
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                Teams
              </Link>
              <Link
                to="/profile"
                className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                Profile
              </Link>
              <div className="relative">
                <button
                  onClick={openDrop}
                  className="flex items-center px-2 py-1 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="mx-1">Create</span>
                </button>
                {isOpenDropDown && (
                  <div className="absolute right-0 z-20 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-700">
                    <Link
                      to={`/project/create`}
                      className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-200 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      Create new project
                    </Link>
                    <Link
                      to={`/team/create`}
                      className="block px-4 py-2 text-sm text-gray-800 transition-colors duration-200 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600"
                    >
                      Create new team
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <div className="relative flex items-center mt-4 md:mt-0">
              <button
                className="hidden mx-4 text-gray-600 transition-colors duration-200 transform md:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show notifications"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
                onClick={openToLogout}
              >
                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    className="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>

                <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">
                  Andrej
                </h3>
              </button>

              {logout && (
                <div
                  onClick={backToLogin}
                  className="absolute right-0 z-20 w-24 text-center top-full	   overflow-hidden bg-gray-300 rounded-md shadow-xl dark:bg-gray-700"
                >
                  <h2 className="block px-4 py-2 text-sm text-gray-800 cursor-pointer transition-colors duration-200 transform border-b dark:text-gray-200 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">
                    Logout
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
