import React, { useState } from "react";
import { useTeam } from "./useTeam";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProject } from "./useProject";
export const TeamDetails = () => {
  let { id } = useParams();
  const team = useTeam(id);
  const project = useProject(id);

  const [hideProject, setHideProject] = useState(true);

  const hideProjectFromUi = () => {
    setHideProject(!hideProject);
  };

  let navigate = useNavigate();

  function goToProjectDetails(id) {
    navigate(`/project/${id}`);
  }

  return (
    <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
            {team?.name}
          </h2>

          <div className="mt-6 sm:-mx-2">
            <div className="inline-flex w-full sm:w-auto sm:mx-2">
              <Link
                to="/team/add-member"
                className="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Add member
              </Link>
            </div>

            <div
              onClick={hideProjectFromUi}
              className="inline-flex w-full mt-4 sm:w-auto sm:mx-2 sm:mt-0"
            >
              <h2 className="inline-flex items-center cursor-pointer justify-center w-full px-5 py-2 text-gray-700 transition-colors duration-150 transform bg-white border border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100 dark:text-white sm:w-auto dark:hover:bg-gray-800 dark:ring-gray-700 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                Public/Private
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center">
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Ahmed Omer
              </h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                CEO
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Jane Doe
              </h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                Co-founder
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Steve Ben
              </h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                UI/UX
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img
              className="object-cover object-center w-full h-48 mx-auto rounded-lg"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              alt="avatar"
            />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Patterson Johnson
              </h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                Software Engineer
              </span>
            </div>
          </div>
        </div>
      </div>

      {hideProject && (
        <div className="max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 my-4 mx-28">
          <div className="flex items-center justify-between">
            <span className="text-sm font-light text-gray-600 dark:text-gray-400">
              June 03, 2022
            </span>
          </div>

          <div className="mt-2">
            <h2 className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200  cursor-pointer">
              {project?.title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              <h2 className="font-bold">Description:</h2>
              {project?.description}
            </p>
          </div>

          <div
            onClick={() => goToProjectDetails(project.id)}
            className="flex items-center justify-between mt-4"
          >
            <h2 className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
              Read more
            </h2>

            <div className="flex items-center"></div>
          </div>
        </div>
      )}
    </section>
  );
};
