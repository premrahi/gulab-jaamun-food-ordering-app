import React from "react";
import UserContext from "../utils/UserContext";

interface UserProps {
  name?: string;
  location?: string;
}

interface Info {
  name: string;
  location: string;
  avatar_url?: string; // question mark makes it optional
}

interface UserState {
  count: number;
  userinfo: Info;
}

class UserClass extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    // console.log(this.props);

    this.state = {
      count: 0,
      // count2 : 2 ,

      userinfo: {
        name: "prem rahi",
        location: "US",
      },
    };

    // console.log(this.props.name + "constructor rendered");
  }

  // main function of componentDidMount is to make Api calls

  async componentDidMount(): Promise<void> {
    // console.log(this.props.name + "component did mounted");
    const data = await fetch("https://api.github.com/users/premrahi");
    const json: Info = await data.json();

    console.log(json);

    this.setState({
      userinfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userinfo;

    return (
      <div className="font-medium border-2 m-4 p-4 rounded-2xl">
        {/* ways to update state variable */}
        <button
          className="m-4 p-4 text-blue-950 bg-amber-200 rounded-xl"
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
          className="m-4 p-4 text-blue-950 bg-amber-200 rounded-xl"
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease counter
        </button>
        <div>
          Name :
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        {avatar_url && <img src={avatar_url} alt="User Avatar"></img>}

        <h1 className="italic text-2xl">Count : {this.state.count}</h1>

        <h2>also known as gulab jaamun gol wala</h2>
        <h4>Location : {location}</h4>
      </div>
    );
  }
}

export default UserClass;
