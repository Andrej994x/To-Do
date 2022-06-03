import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProjects } from "./useProjects";

const Dashboard = () => {
  let { id } = useParams();

  const projects = useProjects(id);
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
          <div className="lg:mx-12">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              Projects
            </h1>

            <div className="mt-4 space-y-4 lg:mt-8">
              {projects.map((project, index) => {
                return (
                  <a
                    onClick={() => setSelectedProject(index)}
                    className="block text-blue-500 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    {project.title}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
            {projects[selectedProject].tasks.map((task) => {
              return (
                <span>
                  <div>
                    <button className="flex items-center focus:outline-none">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 12H4"
                        ></path>
                      </svg>

                      <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                        {task.name} - {task.percent}
                      </h1>
                    </button>

                    <div className="flex mt-8 md:mx-10">
                      <span className="border border-blue-500"></span>

                      <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                        Deadline: {task.deadline}- Assigned to:
                        {task.assignedTo}
                      </p>
                    </div>
                  </div>

                  <hr className="my-8 border-gray-200 dark:border-gray-700" />
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
