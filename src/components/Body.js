import RestaurentCard from "./RestaurentCard";
import { restaruentList } from "../constants";
import React, { useState } from "react";

function filterData(inputText, restaruents) {
  const res= restaruents.filter((restaruent) =>
    restaruent.info.name.includes(inputText)
  );
  return res;
}

const Body = () => {
  const [inputText, setInputText] = useState("");
  const [restaruents, setRestaruent] = useState(restaruentList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter Text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(inputText, restaruents);
            setRestaruent(data);
          }}
        >
          Search
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            setInputText("");
            setRestaruent(restaruentList);
          }}
        >
          Clear
        </button>
      </div>
      <div className="cardsList">
        {restaruents.map((restaruent) => {
          return (
            <RestaurentCard {...restaruent.info} key={restaruent.info.id} />
          );
        })}
        {/* <RestaurentCard {...restaruentList[1].info}/>
        <RestaurentCard restaruent={restaruentList[2]}/> */}
      </div>
    </>
  );
};
export default Body;
