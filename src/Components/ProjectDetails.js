import React from "react";
import { useParams } from "react-router-dom";
import { useProject } from "./useProject";

const ProjectDetails = () => {
  let { id } = useParams();
  const project = useProject(id);
  console.log(project);
  return (
    <div className="bg-white-50 h-screen">
      <div className="px-10 mt-10">
        <div className="bg-white rounded-md max-w-4xl mx-auto p-4 space-y-4 shadow-lg">
          <h3 className="mb-2 font-semibold">
            Title: <span className="font-thin">{project?.title}</span>
          </h3>
          <div className="pt-2">
            <h3 className="font-semibold">Description:</h3>
            <p className="font-thin mt-2">{project?.description}</p>
          </div>
          <div>
            {project?.tasks.map((task) => {
              return (
                <div className="border p-2 mb-2">
                  <h3 className="font-semibold">
                    Task Name: <span className="font-thin">{task.name}</span>
                  </h3>
                  <h3 className="font-semibold">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full"
                        style={{ width: task.percent + "%" }}
                      ></div>
                    </div>
                  </h3>
                  <h3 className="font-semibold">
                    Deadline:
                    <span className="font-thin">{task.deadline}</span>
                  </h3>
                  <h3 className="font-semibold">
                    Assigned to:
                    <span className="font-thin">{task.assignedTo}</span>
                  </h3>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end space-x-2">
            <button className="flex items-center justify-center w-full px-2 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="mx-1">Share To</span>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-indigo-600 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
