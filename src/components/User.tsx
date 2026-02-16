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
    <div className="border-2 m-4 p-4 rounded-2xl font-medium">
      <button
        className="m-4 p-4 text-blue-950 bg-amber-200 rounded-xl"
        onClick={handleIncrease}
      >
        increase counter 
      </button>
      <button
        className="m-4 p-4 text-blue-950 bg-amber-200 rounded-xl"
        onClick={handleDecrease}
      >
        Decrease counter 
      </button>
      <h1 className="text-xl italic">Count : {count}</h1>
      {/* <h1>count2 : {count2}</h1> */}
      <h1>Name : {name} </h1>
      <h2>also known as gulab jaamun lambe wala</h2>
      <h4>Location : australia </h4>
    </div>
  );
};

export default User;
