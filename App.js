import React from "react";
import ReactDOM from "react-dom/client";

// // Headers
// - Logo
// - NavItems
// // Body
// - Search
// - RestaurantContainer
// - RestaurantCard
// // Footer
// - copyright
// - links
// - address
// - contact info

const Headers = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3MPOgd6k47rDXQfEKhC4lhmG8lyc6VgR2w&s"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66d8jsPBIoaw0xeBZWHL_T9OQPOBJDKeAlg&s"
        alt="restaurant-logo"
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard 
          resName="Meghana Foods"
          cuisine="Biryani, North Indian"
          rating="4.5 ⭐"
          deliveryTime="30 mins"
        />
        <RestaurantCard 
          resName="Domino's Pizza"
          cuisine="Italian, Fast Food, Pizza"
          rating="4.2 ⭐"
          deliveryTime="25 mins"
        />
       </div>
      </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Headers />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);



