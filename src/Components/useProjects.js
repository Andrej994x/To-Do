import { useEffect, useState } from "react";

export function useProjects(projectId) {
  const PROJECTS = [
    {
      id: 1,
      name: "Project 1",
      title: "Project for Web Development",
      percent: 90,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
              reprehenderit vitae exercitationem aliquid dolores ullam temporibus
              enim expedita aperiam mollitia.Lorem, ipsum dolor sit amet consectetur adipisicing elit`,
      date: "Mar 10, 2022",

      tasks: [
        {
          name: "task 1",
          deadline: "03.06.2022",
          assignedTo: "Bojan",
          percent: 45,
        },
        {
          name: "task 2",
          deadline: "03.06.2022",
          assignedTo: "Andrej",
          percent: 33,
        },
      ],
    },
    {
      id: 2,
      name: "Project 2",
      title: "Project for Front End",
      percent: 10,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
              reprehenderit vitae exercitationem aliquid dolores ullam temporibu enim expedita aperiam mollitia`,
      date: "May 15, 2022",
      tasks: [
        {
          name: "task 1",
          deadline: "05.03.2022",
          assignedTo: "Andrej",
          percent: 0,
        },
        {
          name: "task 2",
          deadline: "03.04.2022",
          assignedTo: "Kristijan",
          percent: 20,
        },
      ],
    },
    {
      id: 3,
      name: "Project 3",
      title: "Project for Back End",
      percent: 10,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus
          enim expedita aperiam mollitia.Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
      date: "June 01, 2022",
      tasks: [
        {
          name: "task 1",
          deadline: "03.06.2022",
          assignedTo: "Andrej",
          percent: 0,
        },
        {
          name: "task 2",
          deadline: "03.06.2022",
          assignedTo: "Bojan",
          percent: 20,
        },
      ],
    },
  ];

  const [projects, setProjects] = useState(PROJECTS);

  return projects;
}
