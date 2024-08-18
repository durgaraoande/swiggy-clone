import { Img_Url } from "../constants";
const RestaurentCard = ({ name, cuisines, locality, cloudinaryImageId }) => {
  //const {name,cuisines,locality,cloudinaryImageId}=restaruent;
  return (
    <div className="p-3 m-2 w-64 bg-white rounded-lg shadow-md">
      <img
        className="w-full h-40 object-cover rounded-t-lg"
        alt={name}
        src={Img_Url + cloudinaryImageId}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <h3 className="text-sm text-gray-600">{cuisines.join(", ")}</h3>
        <h3 className="text-sm text-gray-600">{locality}</h3>
      </div>
    </div>
  );
};

//Higher Order Component is a function that takes a component and returns a new component
//HOC is a pattern where a function takes a component as an argument and add some features and returns a new component
export const withPromoted = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-md ">Veg</label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};
export default RestaurentCard;


/***
 * (props) => {
    return (
      <div>
        <label>Veg</label>
        <RestaurentCard {...props} />
      </div>
    );

    this is fuctional component which is used to return in Higher Order Component
 */