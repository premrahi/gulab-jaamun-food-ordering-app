import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body"
import Header  from "./components/Header";
import About from "./components/About";
import ErrorHandler from "./components/Error"

import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";




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


const appRouter = createBrowserRouter([
  {
    path:"/" ,
    element:<AppLayout/>,
    errorElement : <ErrorHandler />
  },
  {
    path:"/about" ,
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
