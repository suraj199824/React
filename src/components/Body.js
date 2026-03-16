
import RestaurantCard from "./RestaurantCard";
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

export default Body;
