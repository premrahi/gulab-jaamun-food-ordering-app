import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      count: 0,
      // count2 : 2 ,

      userinfo:{
        name : "prem rahi" ,
        location : "US" 
      }
    };

    // console.log(this.props.name + "constructor rendered");
  }


  // main function of componentDidMount is to make Api calls

  async componentDidMount() {
    // console.log(this.props.name + "component did mounted");
    const data = await fetch("https://api.github.com/users/premrahi") ;
    const json = await data.json() ;

    console.log(json);

    this.setState({
      userinfo : json 
    })
  }

  render() {
    // const { name, location } = this.props;
    const { name,location,avatar_url } = this.state.userinfo;
    // debugger ;
    // console.log( this.props.name + "render rendered");

    return (
      <div className="user-card">
        {/* ways to update state variable */}
        <button
          className="abt-btn"
          onClick={() => {
            this.setState({
              // NEVER UPDATE STATE VARIABLE DIRECTLY
              count: this.state.count + 1,
            });
          }}
        >
          Increase counter
        </button>
        <button
          className="abt-btn"
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease counter
        </button>

        <h1>Name : {name}</h1>
        <img src={avatar_url}></img>
        
        <h1>count : {this.state.count}</h1>

        {/* <h1>count2 : {count2}</h1> */}

        <h2>also known as gulab jaamun gol wala</h2>
        <h4>location : {location}</h4>
      </div>
    );
  }
}

export default UserClass;
