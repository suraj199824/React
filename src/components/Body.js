
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {

  // Local State variable - Super powerful variable
  const [restaurantList, setRestaurantList] = useState([
    {
      resName: "Meghana Foods",
      cuisine: "Biryani, North Indian",
      rating: "3.5 ⭐",
      deliveryTime: "30 mins"
    },
    {
      resName: "Domino's Pizza",
      cuisine: "Italian, Fast Food, Pizza",
      rating: "4.2 ⭐",
      deliveryTime: "25 mins"
    },
    {
      resName: "KFC",
      cuisine: "Fast Food, Chicken",
      rating: "4.5 ⭐",
      deliveryTime: "20 mins"
    },
    {
      resName: "Pizza Hut",
      cuisine: "Italian, Fast Food, Pizza",
      rating: "3.3 ⭐",
      deliveryTime: "28 mins"
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" 
        onClick={() => {
          let topRated = restaurantList.filter((res) => res.rating > "4.0 ⭐");
          setRestaurantList(topRated);
          }}>
            Top Rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.resName}
            resName={restaurant.resName}
            cuisine={restaurant.cuisine}
            rating={restaurant.rating}
            deliveryTime={restaurant.deliveryTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
