import React, { useState } from "react";
import "./App.css";
import Team from "./Components/Team";
import Form from "./Components/Form";
import reactDom from "react-dom";

function App() {
  const [team, setTeam] = useState([
    {
      name: "dan",
      company: "ibm",
      language: "java"
    }
  ]);
  const addNewMember = member => {
    setTeam([member, ...team]);
  };
  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <Team teamList={team} />
    </div>
  );
}

export default App;
