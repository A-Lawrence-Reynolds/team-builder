import React, { useState } from "react";

const Form = props => {
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
    console.log(event.target);
    event.preventDefault();
    const newTeamMember = {
      ...teamForm
    };
    console.log(newTeamMember);
    props.addNewMember(newTeamMember);
    setTeamForm({ name: "", company: "", language: "" });
  };

  return (
    <form onSubmit={submitForm}>
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
      <button type="submit"> sub</button>
    </form>
  );
};
export default Form;
