import { useState, useEffect } from "react";

export function useProject(projectId) {
  const [project, setProject] = useState(null);

  const PROJECTS = {
    1: {
      id: 1,
      name: "Project 1",
      title: "Project for Web Development",
      percent: 90,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus
          enim expedita aperiam mollitia`,
      tasks: [
        {
          name: "task 1",
          deadline: "03.06.2022",
          assignedTo: "Andrej",
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
    2: {
      id: 2,
      name: "Project 2",
      title: "Project for Front End",
      percent: 10,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. `,
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
          assignedTo: "Andrej",
          percent: 20,
        },
      ],
    },
    3: {
      id: 3,
      name: "Project 2",
      title: "Project for Back End",
      percent: 10,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus
          enim expedita aperiam mollitia.Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
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
          assignedTo: "Andrej",
          percent: 20,
        },
      ],
    },
  };

  useEffect(() => {
    setProject(PROJECTS[projectId]);
  }, [projectId]);

  return project;
}
