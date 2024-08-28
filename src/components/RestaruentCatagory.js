import ItemCard from "./ItemCard";
import { useState } from "react";
//import ItemCard from "./ItemCard";
const RestaruentCatagory = ({ data , showItems,setShowIndex}) => {
  //const [showItems,setShowItems]=useState(false);
  const handleClick=()=>{
    //setShowItems(!showItems);
    setShowIndex();
  }
  return (
    <div className="w-6/12 m-auto my-4 bg-gray-50 p-4 shadow-lg cursor-pointer" >
      <div className=" flex justify-between " onClick={handleClick}>
        <span className="font-bold text-lg">
          {data?.title} ({data?.itemCards?.length})
        </span>
        <span>{"⬇️"}</span>
      </div>
      <div>
        {showItems && <ItemCard items={data?.itemCards}/>}
      </div>
    </div>
  );
};
export default RestaruentCatagory;
