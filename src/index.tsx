  import React from "react";
  import ReactDOM from "react-dom/client";
  import Body from "./components/Body"
  import Header  from "./components/Header";
  import About from "./components/About";
  import ErrorHandler from "./components/Error"
  import { createBrowserRouter ,Outlet,RouterProvider } from "react-router-dom";
  import Contact from "./components/Contact";
  import RestaurantMenu from "./components/RestaurantMenu";

  // not using keys (not acceptable)
  // using index as keys is not recommended

  const AppLayout = () => {
    return (
      <div className="app">
        {/* //header //body //footer */}
        <Header />
        <Outlet/>
      </div>
    );
  };


  const appRouter = createBrowserRouter([
    {
      path:"/" ,
      element:<AppLayout/>,
      children :[
        {
          path :"/",
          element:<Body />
        },
        {
          path:"/about" ,
          element:<About />
        },
        {
          path:"/contact",
          element:<Contact />
        },
        {
          path :"/restaurants/:resId",
          element: <RestaurantMenu />
        }
      ] ,
      errorElement : <ErrorHandler />
    },
  
  ])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<RouterProvider router={appRouter} />);