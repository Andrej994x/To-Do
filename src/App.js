import React, { useEffect, useState } from "react";
import "./App.css";
import { useLocation, Route, Routes } from "react-router-dom";
import Login from "./Login Component/Login";
import Dashboard from "./Components/Dashboard";
import Register from "./Login Component/Register";
import Project from "./Components/Project";
import Teams from "./Components/Teams";
import Profile from "./Components/Profile";
import Nav from "./Components/Nav";
import { CreateProject } from "./Components/CreateProject";
import { TeamDetails } from "./Components/TeamDetails";
import { Landing } from "./Components/Landing";
import CreateTeam from "./Components/CreateTeam";
import AddMember from "./Components/AddMember";
import ProjectDetails from "./Components/ProjectDetails";

function App() {
  let location = useLocation();
  const [hideNav, setHideNav] = useState(false);
  console.log(location);
  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/"
    ) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [location]);

  return (
    <div>
      {hideNav ? null : <Nav />}
      <Routes>
        <Route path="*" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="/register" element={<Register />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/project/:id" element={<ProjectDetails />}></Route>
        <Route path="/project/create" element={<CreateProject />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/team/:id" element={<TeamDetails />}></Route>
        <Route path="/team/add-member" element={<AddMember />}></Route>
        <Route path="/team/create" element={<CreateTeam />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
