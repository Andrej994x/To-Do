import { useState, useEffect } from 'react';

export function useTeam(teamId) {
  const [team, setTeam] = useState(null);

  const TEAMS = {
    1: {
      id: 1,
      name: 'Team 1',
      lead: 'Ahmed Omer',
      cofounder: 'Jane Doe',
      uiUx: 'Steve Ben',
      softwareEngineer: 'Andrej Nestorov',
    },
    2: {
      id: 2,
      name: 'Team 2',
      lead: 'Ahmed Omer',
      cofounder: 'Jane Doe',
      uiUx: 'Steve Ben',
      softwareEngineer: 'Andrej Nestorov',
    },
    3: {
      id: 3,
      name: 'Team 3',
      lead: 'Ahmed Omer',
      cofounder: 'Jane Doe',
      uiUx: 'Steve Ben',
      softwareEngineer: 'Andrej Nestorov',
    }
  };

  useEffect(() => {
    setTeam(TEAMS[teamId]);
  }, [teamId]);

  return team;
}
