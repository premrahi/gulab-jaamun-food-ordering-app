import React from "react";
import UserContext from "../utils/UserContext";
import github from "url:../assets/github.png";
import linkedin from "url:../assets/linkedin.png";
import discord from "url:../assets/discord.png";

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

    this.state = {
      count: 0,

      userinfo: {
        name: "prem rahi",
        location: "US",
      },
    };
  }

  // main function of componentDidMount is to make Api calls

  async componentDidMount(): Promise<void> {
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
      <>
        <div className="text-center m-2 p-2 ">
          <h1 className="font-bold text-4xl"> Hi, I'm Prem 👋 </h1>
          <h4 className="text-gray-500 m-2 p-2">
            A frontend-focused developer building real-world React applications
            using modern tools and intuitive user experiences.
          </h4>
        </div>

        <div className="flex justify-center ">
          <a href="https://github.com/premrahi">
            <img src={github} alt="github" className="w-10 m-4 p-1 bg-gray-100 rounded-full"/>
          </a>
          <a href="https://www.linkedin.com/in/prem-rahi-237318253/" className="w-10 m-4 bg-gray-100 rounded-2xl">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://discord.com/users/1062754999555334304" className="w-10 m-4 p-1  bg-gray-100 rounded-full">
            <img src={discord} alt="discord" />
          </a>
        </div>

        <div className="font-medium shadow-md m-auto px-20 mt-6 rounded-2xl w-100 h-76  text-center items-center ">
          {/* ways to update state variable */}
          {/* <button
          className="mx-4 p-4 text-blue-950 bg-amber-200 rounded-2xl"
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
          className="mx-4 p-4 text-blue-950 bg-amber-200 rounded-2xl"
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Decrease counter
        </button> */}

          <div className="justify-center  text-center">
            {avatar_url && (
              <img
                src={avatar_url}
                alt="User Avatar"
                className=" shadow-md w-auto object-cover rounded-full"
              ></img>
            )}
            <h2>Name : Prem</h2>
            <h4 className="">Location : {location}</h4>
          </div>
        </div>
        <div>
          <h3 className="text-center mt-4 text-gray-600">
            Modern web app powered by React and real-world APIs.
          </h3>
        </div>
      </>
    );
  }
}

export default UserClass;
