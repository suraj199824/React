import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState(""); 
// whenever state variable update, component re-render and useEffect will run again, 
// so we have to give dependency array to useEffect, if we want to run useEffect only once when component mounts then we have to give empty dependency array

  useEffect(() => {
  const timer = setTimeout(() => {
    const restaurants = [
      { resName: "Meghana Foods", cuisine: "Biryani, North Indian", rating: "3.5", deliveryTime: "30 mins" },
      { resName: "Domino's Pizza", cuisine: "Italian, Fast Food, Pizza", rating: "4.2", deliveryTime: "25 mins" },
      { resName: "KFC", cuisine: "Fast Food, Chicken", rating: "4.5", deliveryTime: "20 mins" },
      { resName: "Pizza Hut", cuisine: "Italian, Fast Food, Pizza", rating: "3.3", deliveryTime: "28 mins" },
      { resName: "Cafe Coffee Day", cuisine: "Beverages, Cafe, Desserts", rating: "4.1", deliveryTime: "25 mins" },
      { resName: "The Coffee House", cuisine: "Cafe, Desserts", rating: "4.0", deliveryTime: "30 mins" },
    ];

    setRestaurantList(restaurants);
    setFilteredRestaurantList(restaurants);
  }, 500);
  // return () => clearTimeout(timer);
}, []);

  return restaurantList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
          <button 
            onClick={() => {
              const filteredRestaurants = restaurantList.filter((res) => res.resName.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredRestaurantList(filteredRestaurants);}} 
            className="search-btn"
            >Search
          </button>
        </div>
        <button className="filter-btn"
          onClick={() => {
            const topRated = restaurantList.filter((res) => parseFloat(res.rating) > 4.0);
            setFilteredRestaurantList(topRated);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurantList.map((restaurant) => (
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
