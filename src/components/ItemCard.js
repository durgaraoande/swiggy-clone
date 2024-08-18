const ItemCard = ({ name, price, description, ratings }) => {
  return (
        <div className="p-4 m-4 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <h3 className="text-lg text-green-600 mb-2">{'₹' + price / 100}</h3>
      <h3 className="text-base text-gray-600 mb-2">{description}</h3>
      <h3 className="text-base text-yellow-500">{ratings?.aggregatedRating?.rating + " stars"}</h3>
    </div>
  )
};
export default ItemCard;
