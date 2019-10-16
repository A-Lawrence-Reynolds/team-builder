import React from "react";

const TeamMembers = props => {
  return (
    <div className="TeamMembers">
      {props.teamList.map((teamMembers, index) => (
        <div className="TeamMembersDiv" key={index}>
          <h1>{teamMembers.name}</h1>
          <p>{teamMembers.company}</p>
          <p>{teamMembers.language}</p>
        </div>
      ))}
    </div>
  );
};
export default TeamMembers;
