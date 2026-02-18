import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
// import About from "./components/About";
import ErrorHandler from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery"; // this was the traditional way of importing the grocery component
import UserContext from "./utils/UserContext";
import { useState,useEffect } from "react";


//lazy method
//chunking
//code splitting
//Dynamic coding
//Dynamic import
//on demand loading

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {

  //authentication
  const[userName , setUserName] = useState<string>("") ;

  useEffect(()=>{
    // make an api call and send username and password.
    const data = {
      userName:"Prem Rahi" ,
    };
    setUserName(data.userName);
  },[]) ;




  return (
    <UserContext.Provider value={{loggedInUser : userName}}>
    <div className="app">
      {/* //header //body //footer */}
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorHandler />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<RouterProvider router={appRouter} />);
