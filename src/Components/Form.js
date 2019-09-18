import React, { useState } from "react";

const teamForm = props => {
  const [teamForm, setTeamForm] = useState({
    name: "",
    company: "",
    language: ""
  });
  console.log(teamForm);
  const changeHandler = event => {
    setTeamForm({ ...teamForm, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newTeamForm = {
      ...teamForm,
      id: Date.now()
    };
    props.addNewTeamForm(newTeamForm);
    setTeamForm({ name: "", company: "", language: "" });
  };

  return (
    <form onSubmit={e => submitForm(e)}>
      <label htmlFor="name">name label </label>
      <input
        type="text"
        name="name"
        value={teamForm.name}
        onChange={changeHandler}
      />
      <label htmlFor="company"> company label</label>
      <input
        type="text"
        name="company"
        value={teamForm.company}
        onChange={changeHandler}
      />
      <label htmlFor="language">language label</label>
      <input
        type="text"
        name="language"
        value={teamForm.language}
        onChange={changeHandler}
      />
    </form>
  );
};
export default teamForm;
