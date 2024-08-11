import { Img_Url } from "../constants";
const RestaurentCard = ({ name, cuisines, locality, cloudinaryImageId }) => {
  //const {name,cuisines,locality,cloudinaryImageId}=restaruent;
  return (
    <div className="card">
      <img alt={name} src={Img_Url + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{locality}</h3>
    </div>
  );
};
export default RestaurentCard;
