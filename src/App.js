import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Team from "./Components/Team";
import Form from "./Components/Form";
import reactDom from "react-dom";

function App() {
  const [form, setForm] = useState();
  const addNewForm = form => {
    setForm([...form, form]);
  };
  return (
    <div className="App">
      <Form addNewForm={addNewForm} />
      <Team teamList={Team} />
    </div>
  );
}

export default App;
