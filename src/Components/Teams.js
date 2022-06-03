import React from "react";
import { useTeams } from "./useTeams";
import { useNavigate } from "react-router-dom";
const Teams = () => {
  const teams = useTeams();
  console.log("teams", teams);
  const navigate = useNavigate();

  function goToDetails(id) {
    navigate(`/team/${id}`);
  }

  return (
    <section className="bg-white dark:bg-gray-900 mx-auto">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Our Teams
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {teams.map((team) => {
            return (
              <div
                onClick={() => goToDetails(team.id)}
                className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  {team.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Lead: {team.lead}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teams;
