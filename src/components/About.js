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
  constructor(props) {
    super(props);
    // console.log("parent constructor rendered");
  }

  componentDidMount() {
    // console.log("parent did mount");
  }

  render() {
    // console.log("parent render rendered");

    return (
      <>
        <div>
          <h1>About us page</h1>
          <p>this is namaste react web series</p>
        </div>
        <User name={"Prem rahi (function component)"} />

        <br></br>
        <UserClass
          name={"Prem rahi (classbased component)"}
          location={"paxstan"}
        />
        <br></br>
        {/* <UserClass
          name={"aalu paratha (classbased component)"}
          location={"kadhai"}
        /> */}
      </>
    );
  }
}


/*
-parent constructor rendered
-parent render rendered

  - prem constructor rendered
  - prem render rendered

  - aalu paratha constructor rendered
  - aalu paratha render rendered

  - prem constructor did mount
  - aalu paratha constructor did mount

-parent component did mount
*/

export default About;
