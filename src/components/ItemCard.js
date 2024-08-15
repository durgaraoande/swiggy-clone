const ItemCard = ({ name, price, description, ratings }) => {
  return (
    <div className="item-card">
      <h3 className="name">{name}</h3>
      <h3 className="price">{'₹'+price/100}</h3>
      <h3 className="description">{description}</h3>
      <h3 className="rating">{ratings?.aggregatedRating?.rating + " stars"}</h3>
    </div>
  );
};
export default ItemCard;
