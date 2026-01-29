import React from "react";
import ReactDOM from "react-dom/client";

/*
* header 
    - logo
    - nav list - home ,cart ,about
* body 
    - search 
    - card container
        - restaurant card
* footer
    - copyright
    - address
    - contacts 
    - links
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.kindpng.com/picc/m/201-2011704_restaurant-jd-sports-logo-png-transparent-png.png"
        ></img>
      </div>

      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        src={resData.image}
        className="res-logo"
      />
      <h3>{resData.name}</h3>
      <p>{resData.cuisines.join(", ")}</p>
      <h5>{resData.rating}⭐ stars</h5>
      <p>{resData.deliveryTime}minutes</p>
    </div>
  );
};

const resList =[
  {
    id: 1,
    name: "Spice Villa",
    cuisines: ["Indian", "North Indian", "Chinese"],
    rating: 4.3,
    deliveryTime: "30-40",
    image: "https://picsum.photos/seed/food1/400/300"
  },
  {
    id: 2,
    name: "Urban Tandoor",
    cuisines: ["Punjabi", "Mughlai"],
    rating: 4.5,
    deliveryTime: "25-35",
    image: "https://picsum.photos/seed/food2/400/300"
  },
  {
    id: 3,
    name: "Green Bowl",
    cuisines: ["Healthy", "Salads", "Continental"],
    rating: 4.1,
    deliveryTime: "20-30",
    image: "https://picsum.photos/seed/food3/400/300"
  },
  {
    id: 4,
    name: "Burger Hub",
    cuisines: ["Fast Food", "American"],
    rating: 4.0,
    deliveryTime: "15-25",
    image: "https://picsum.photos/seed/food4/400/300"
  },
  {
    id: 5,
    name: "Pasta Street",
    cuisines: ["Italian"],
    rating: 4.4,
    deliveryTime: "30-40",
    image: "https://picsum.photos/seed/food5/400/300"
  },
  {
    id: 6,
    name: "Dragon Wok",
    cuisines: ["Chinese", "Thai"],
    rating: 4.2,
    deliveryTime: "25-35",
    image: "https://picsum.photos/seed/food6/400/300"
  },
  {
    id: 7,
    name: "Biryani Junction",
    cuisines: ["Hyderabadi", "Indian"],
    rating: 4.6,
    deliveryTime: "35-45",
    image: "https://picsum.photos/seed/food7/400/300"
  },
  {
    id: 8,
    name: "Wrap & Roll",
    cuisines: ["Street Food", "Fast Food"],
    rating: 3.9,
    deliveryTime: "20-30",
    image: "https://picsum.photos/seed/food8/400/300"
  },
  {
    id: 9,
    name: "Sushi Spot",
    cuisines: ["Japanese"],
    rating: 4.7,
    deliveryTime: "40-50",
    image: "https://picsum.photos/seed/food9/400/300"
  },
  {
    id: 10,
    name: "Sweet Cravings",
    cuisines: ["Desserts", "Bakery"],
    rating: 4.3,
    deliveryTime: "15-25",
    image: "https://picsum.photos/seed/food10/400/300"
  }
]



// not using keys (not acceptable)
// using index as keys is not recommended


const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="what you want?"
        ></input>
        <button className="search-btn">search</button>
      </div>
      <div className="res-container">
        {/* <ResCard resData={resList[0]} />
        <ResCard resData={resList[1]} />
        <ResCard resData={resList[2]} />
        <ResCard resData={resList[3]} />
        <ResCard resData={resList[4]} />
        <ResCard resData={resList[5]} />
        <ResCard resData={resList[6]} /> */}

        {
          resList.map(rest =>{
            return    <ResCard key={rest.id} resData = {rest} />
          })
        }
      </div>
    </div>
  );
};

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
