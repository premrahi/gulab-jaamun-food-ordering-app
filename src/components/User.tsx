import { useState } from "react";

interface userProps {
  name : string ;
}

const User = ({ name }: userProps) => {
  const [count, setCount] = useState<number>(0);
//   const [count2, setCount2] = useState(2);


const handleIncrease = ()=>{
    setCount((p) => p+1) ;
}
const handleDecrease = ()=>{
    setCount((p) => p-1) ;
}

  return (
    <div className="user-card">
      <button
        className="abt-btn"
        onClick={handleIncrease}
      >
        increase counter 
      </button>
      <button
        className="abt-btn"
        onClick={handleDecrease}
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
