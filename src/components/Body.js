import RestaurentCard from "./RestaurentCard";
import { restaruentList } from "../constants";

const Body = () => {
  return (
    <div className="cardsList">
      {restaruentList.map((restaruent) => {
        return <RestaurentCard {...restaruent.info} key={restaruent.info.id} />;
      })}
      {/* <RestaurentCard {...restaruentList[1].info}/>
        <RestaurentCard restaruent={restaruentList[2]}/> */}
    </div>
  );
};
export default Body;
