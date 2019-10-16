import React, { useState } from "react";
import TeamMembersForm from "./Comonents/TeamMembersForm";
import TeamMembers from "./Comonents/TeamMembers";
import "./App.css";

function App() {
  const [teamMembers, setTeamMember] = useState([
    {
      name: "Jake",
      company: "Apple",
      language: "Python,JavaScript,React"
    }
  ]);
  const addNewMember = member => {
    setTeamMember([member, ...teamMembers]);
  };
  return (
    <div className="App">
      <TeamMembersForm addNewMember={addNewMember} />
      <TeamMembers teamList={teamMembers} />
    </div>
  );
}

export default App;
