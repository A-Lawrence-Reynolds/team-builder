import React from "react";

const Team = props => {
  console.log(props);
  return (
    <div className="Team">
      {props.teamList.map((team, index) => (
        <div className="team" key={index}>
          <h1>{team.name}</h1>
          <h2>{team.company}</h2>
          <h3>{team.language}</h3>
        </div>
      ))}
    </div>
  );
};

export default Team;
