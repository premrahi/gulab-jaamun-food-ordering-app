import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body"
import Header  from "./components/Header";






// not using keys (not acceptable)
// using index as keys is not recommended



const AppLayout = () => {
  return (
    <div className="app">
      {/* //header //body //footer */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
