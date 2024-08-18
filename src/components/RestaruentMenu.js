import {  useState } from "react";
import { Img_Url } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import useRestaruentData from "../utils/useRestaruentData";

const ResatruentMenu = () => {
  //useParams hook is used to get the parameters from the route
  //In this case, we are getting the id from the route
  //The id is used to fetch the data of the restaurant
  const { id } = useParams();
  const restaruent = useRestaruentData(id);

  const toggleCategory = (index) => {
    setExpandedCategories((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  const {
    name = "",
    areaName = "",
    avgRatingString = "",
    costForTwoMessage = "",
    cloudinaryImageId = "",
  } = restaruent?.cards[2]?.card?.card?.info || {};
  // const { itemCards = [] } =
  //   restaruent?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card || {};
  const { cards = [] } =
    restaruent?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR || {};


  const [expandedCategories, setExpandedCategories] = useState([]);

  return restaruent == null ? (
    <Shimmer />
  ) : (
        <div className="p-4 m-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="flex items-center mb-4">
        <img className="w-32 h-32 object-cover rounded-lg mr-4" src={Img_Url + cloudinaryImageId} alt={name} />
        <div className="details">
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <h3 className="text-lg text-gray-600 mb-1">{areaName}</h3>
          <h3 className="text-lg text-yellow-500 mb-1">{avgRatingString + " stars"}</h3>
          <h3 className="text-lg text-green-600">{costForTwoMessage}</h3>
        </div>
      </div>

      {/* <div className="menu-card">
        <h1>Menu</h1>
        {itemCards.map((item) => {
           //const {name='',price='',description='',ratings={}}=item.card.info;
          //return <ItemCard name={name} price={price} description={description} ratings={ratings} key={item.card.info.id} />;
          return <ItemCard {...item.card.info} key={item.card.info.id} />;
        })}
      </div> */}
    
      <div>
        {cards.map((cardi, index) => {
          const { title } = cardi?.card?.card;
          const { itemCards = [] } =
            restaruent?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[
              index
            ]?.card?.card || {};
          return (
            itemCards[index] &&
            itemCards[index].card.info && (
              <div key={index} className="mb-4">
                <button className="btn bg-blue-500 text-white py-2 px-4 rounded-lg mb-2" onClick={() => toggleCategory(index)}>
                  {title}
                </button>
                {expandedCategories.includes(index) && (
                  <div className="menu-card p-4 border border-gray-300 rounded-lg shadow-md bg-gray-50">
                    <h1 className="text-xl font-semibold mb-2">{title}</h1>
                    <div className="item-card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {itemCards.map((item) => (
                        <ItemCard {...item.card.info} key={item.card.info.id} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};
export default ResatruentMenu;
