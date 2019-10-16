import React, { useState } from "react";
import TeamMembers from "./TeamMembers";

const TeamMemberForm = props => {
  const [memberForm, setMemberForm] = useState({
    name: "",
    company: "",
    language: ""
  });

  const changeHandler = event => {
    setMemberForm({ ...memberForm, [event.target.name]: event.target.value });
  };
  const submitForm = event => {
    event.preventDefault();
    const newTeamMember = {
      ...memberForm
    };
    props.addNewMember(newTeamMember);
    setMemberForm({ name: "", company: "", language: "" });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="name"> Member Name</label>
        <input
          type="text"
          name="name"
          value={memberForm.name}
          onChange={changeHandler}
        />
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          value={memberForm.company}
          onChange={changeHandler}
        />
        <label htmlFor="language">Languages</label>
        <input
          type="text"
          name="language"
          value={memberForm.language}
          onChange={changeHandler}
        />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
};
export default TeamMemberForm;
