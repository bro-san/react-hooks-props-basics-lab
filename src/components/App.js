import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
//console.log(user);

function App() {

  const {bio, name, color, city} = user
  const {github} = user.links
  const {linkedin} = user.links 

  return (
    <div>
      <NavBar bio={bio} city={city} color={color} name={name} github={github} linkedin={linkedin}/>
      < Home bio={bio} city={city} color={color} name={name} github={github} linkedin={linkedin}/>
      <About bio={bio} city={city} color={color} name={name} github={github} linkedin={linkedin}/>
    </div>
  );
}

export default App;
