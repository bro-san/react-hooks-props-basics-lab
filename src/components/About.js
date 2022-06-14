import React from "react";
import Links from "./Links";

function About(props) {
const git = "https://github.com/liza"
const linked = "https://www.linkedin.com/in/liza/"
//console.log(git, linked)

  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio === "" ? null : <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links git={git} linked={linked}/>
    </div>
 
  );
}

export default About;
