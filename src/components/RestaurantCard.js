
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
      <img
        src={CDN_URL}
      />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;