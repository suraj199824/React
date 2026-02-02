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

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img
        src="https://i.imgur.com/abc123.jpg"
        alt="logo"
      />
      <h3>Meghana Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
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



