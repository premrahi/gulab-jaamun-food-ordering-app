import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// const About = () => {   <----- function based component
//   return (
//     <>
//       <div>
//         <h1>About us page</h1>
//         <p>this is namaste react web series</p>
//       </div>
//       <User name={"Prem rahi (function component)"}/>

      
//       <br></br>
//       <UserClass name={"Prem rahi (classbased component)"} location={"paxstan"} />
//     </>
//   );
// };


class About extends React.Component {
  render(){
    return(
      <>
      <div>
        <h1>About us page</h1>
        <p>this is namaste react web series</p>
      </div>
      <User name={"Prem rahi (function component)"}/>

      
      <br></br>
      <UserClass name={"Prem rahi (classbased component)"} location={"paxstan"} />
    </>
    )
  }
}

export default About;
