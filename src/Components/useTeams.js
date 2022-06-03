import { useState } from "react";

export function useTeams() {
  const TEAMS = [
    {
      id: 1,
      name: "Team 1",
      lead: "Ahmed Omer",
      cofounder: "Jane Doe",
      uiUx: "Steve Ben",
      softwareEngineer: "Andrej Nestorov",
    },
    {
      id: 2,
      name: "Team 2",
      lead: "John",
      cofounder: "Jane Doe",
      uiUx: "Steve Ben",
      softwareEngineer: "Andrej Nestorov",
    },
    {
      id: 3,
      name: "Team 3",
      lead: "Stevens",
      cofounder: "Jane Doe",
      uiUx: "Steve Ben",
      softwareEngineer: "Andrej Nestorov",
    },
  ];

  const [teams, setTeams] = useState(TEAMS);

  return teams;
}
