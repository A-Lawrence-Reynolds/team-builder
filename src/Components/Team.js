import React from "react";

const Team = props => {
  console.log(props);
  return (
    <div className="Team">
      {props.teamlist.map(Form => {
        return (
          <div className="team" key={Team.id}>
            <h1>{Team.name}</h1>
            <h2>{Team.company}</h2>
            <h3>{Team.language}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
