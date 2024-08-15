import { useEffect, useState } from "react";
import { Img_Url } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";

const ResatruentMenu = () => {
  //useParams hook is used to get the parameters from the route
  //In this case, we are getting the id from the route
  //The id is used to fetch the data of the restaurant
  const { id } = useParams();
  const [restaruent, setRestaruent] = useState(null);
  //const [menu, setMenu] = useState([]);
  useEffect(() => {
    getRestaruentData();
  }, []);
  async function getRestaruentData() {
    const response = await fetch(
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.544893&lng=81.521241&restaurantId=" +
        id
    );
    const json = await response.json();
    //setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards[1]?.card?.info);
    setRestaruent(json?.data);
    //console.log(json);
  }
  //console.log(menu?.name);
  const {
    name = "",
    areaName = "",
    avgRatingString = "",
    costForTwoMessage = "",
    cloudinaryImageId = "",
  } = restaruent?.cards[2]?.card?.card?.info || {};
  const { itemCards = [] } =
    restaruent?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  console.log(itemCards);
  return restaruent == null ? (
    <Shimmer />
  ) : (
    <div className="restaruentMenuCard">
      <div className="restaurantDetails">
      <img src={Img_Url + cloudinaryImageId} alt={name} />
        <div className="details">
          {/* <h1>Restaruent Menu</h1> */}
          <h1>{name}</h1>
          <h3>{areaName}</h3>
          <h3>{avgRatingString + " stars"}</h3>
          <h3>{costForTwoMessage}</h3> 
        </div>
      </div>
      <div className="menu-card">
        <h1>Menu</h1>
        {itemCards.map((item) => {
           const {name='',price='',description='',ratings={}}=item.card.info;
          //return <ItemCard name={name} price={price} description={description} ratings={ratings} key={item.card.info.id} />;
          return <ItemCard {...item.card.info} key={item.card.info.id} />;
        })}
      </div>
    </div>
  );
};
export default ResatruentMenu;
