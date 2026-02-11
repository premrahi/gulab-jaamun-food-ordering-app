import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      count: 0,
      // count2 : 2 ,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

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
        <h1>count : {count}</h1>

        {/* <h1>count2 : {count2}</h1> */}

        <h2>also known as gulab jaamun gol wala</h2>
        <h4>location : {location}</h4>
      </div>
    );
  }
}

export default UserClass;
