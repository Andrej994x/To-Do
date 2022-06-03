import React from "react";
import { useNavigate } from "react-router-dom";
import { useProjects } from "./useProjects";

const Project = () => {
  const projects = useProjects();

  const navigate = useNavigate();

  function goToProject(id) {
    navigate(`/project/${id}`);
  }
  const backToProjectForm = () => {
    navigate("/project/create");
  };

  return (
    <>
      {projects.map((project) => {
        return (
          <div className="max-w-2xl px-8 py-4 mx-auto my-2.5 bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                {project?.date}
              </span>
            </div>

            <div className="mt-2">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-white  dark:hover:text-gray-200 cursor-pointer ">
                {project?.name}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                <h2 className="font-bold">Description:</h2>
                {project?.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                onClick={() => goToProject(project.id)}
                className="text-blue-600 dark:text-blue-400 cursor-pointer"
              >
                Read more
              </a>
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10 top-24">
        <button
          onClick={backToProjectForm}
          className="p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300"
        >
          New Project
        </button>
      </div>
    </>
  );
};

export default Project;
