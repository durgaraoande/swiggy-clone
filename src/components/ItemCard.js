import { Img_Url } from "../constants";
const ItemCard = ({ items }) => {
  return items.map((item) => (
    <div key={item.card.info.id} className="flex justify-center p-4 m-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <div className="w-6/12 mx-3" >
        <h3 className="text-xl font-bold mb-2">{item?.card?.info?.name}</h3>
        <h3 className="text-lg text-green-600 mb-2">
          {"₹" + item?.card?.info?.price / 100}
        </h3>
        <h3 className="text-base text-gray-600 mb-2">
          {item?.card?.info?.description}
        </h3>
        <h3 className="text-base text-yellow-500">
          {item?.card?.info?.ratings?.aggregatedRating?.rating + " stars"}
        </h3>
      </div>
      <div className="w-6/12 mx-3 ">
      <div className="absolute">
      <button className="bg-slate-600 text-slate-50 m-2 p-2 rounded-lg">Add +</button>
      </div>
        <img
          src={Img_Url + item?.card?.info?.imageId}
          alt={item?.card?.info?.name + " image"}
        />
        
      </div>
    </div>
  ));
};
export default ItemCard;
