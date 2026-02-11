import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(2);

  return (
    <div className="user-card">
      <button
        className="abt-btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase counter 
      </button>
      <button
        className="abt-btn"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease counter 
      </button>
      <h1>count : {count}</h1>
      {/* <h1>count2 : {count2}</h1> */}
      <h1>Name : {name} </h1>
      <h2>also known as gulab jaamun lambe wala</h2>
      <h4>location : australia </h4>
    </div>
  );
};

export default User;
