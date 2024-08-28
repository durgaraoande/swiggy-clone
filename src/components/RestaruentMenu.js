import { useState } from "react";
import { Img_Url } from "../constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaruentData from "../utils/useRestaruentData";
import RestaruentCatagory from "./RestaruentCatagory";

const ResatruentMenu = () => {
  //useParams hook is used to get the parameters from the route
  //In this case, we are getting the id from the route
  //The id is used to fetch the data of the restaurant
  const { id } = useParams();
  const restaruent = useRestaruentData(id);

  const {
    name = "",
    areaName = "",
    avgRatingString = "",
    costForTwoMessage = "",
    cloudinaryImageId = "",
  } = restaruent?.cards[2]?.card?.card?.info || {};
  const filteredCards =
    restaruent?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cardi) =>
        cardi?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const [showIndex, setShowIndex] = useState(null);
  return restaruent == null ? (
    <Shimmer />
  ) : (
    <div className="  text-center items-center mb-4 mx-32 bg-gray-100 ">
      <div className="flex justify-evenly bg-gray-200 rounded-md shadow-md">
        <img
          className="w-32 h-32 object-cover rounded-lg mx-4"
          src={Img_Url + cloudinaryImageId}
          alt={name}
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{name}</h1>
          <h3 className="text-lg text-gray-600 mb-1">{areaName}</h3>
          <h3 className="text-lg text-yellow-500 mb-1">
            {avgRatingString + " stars"}
          </h3>
          <h3 className="text-lg text-green-600">{costForTwoMessage}</h3>
        </div>
      </div>
      <div>
        {/*  lifting the state up means giving the super powers to the parent componet to access child componet using state
        we can manage single state for all children of parent ike showIndex */}
        {/* controlled and uncontrolled componets => one component is controlled by other component is controlled componet
        => else uncontrolled component */}
        {filteredCards.map((cards, index) => (
          <RestaruentCatagory
            key={cards?.card?.card?.title}
            data={cards?.card?.card}
            showItems={index === showIndex ? true : false}
            // setShowIndex={() => setShowIndex(index)}
            setShowIndex={
              index === showIndex
                ? () => setShowIndex(null)
                : () => setShowIndex(index)
            }
          />
        ))}
      </div>
    </div>

    // {/* <div className="menu-card">
    //   <h1>Menu</h1>
    //   {itemCards.map((item) => {
    //      //const {name='',price='',description='',ratings={}}=item.card.info;
    //     //return <ItemCard name={name} price={price} description={description} ratings={ratings} key={item.card.info.id} />;
    //     return <ItemCard {...item.card.info} key={item.card.info.id} />;
    //   })}
    // </div> */}
  );
};
export default ResatruentMenu;
