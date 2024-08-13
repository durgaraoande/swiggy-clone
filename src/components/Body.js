import RestaurentCard from "./RestaurentCard";
import { api } from "../constants";
import React, { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(inputText, restaruents) {
  const res= restaruents.filter((restaruent) =>
    restaruent.info.name.toLowerCase().includes(inputText.toLowerCase())
  );
  return res;
}


const Body = () => {
  //useState is a hook which is used to maintain the state of the component 
  //useState returns an array of two values
  //first value is the current state value
  //second value is a function which is used to update the state value
  //useState takes one argument which is the initial value of the state
  //Never use useState outside the functional component
  //useState will re-render the component when the state value is updated
  //useState cannot be used inside a loop, condition or nested function``
  const [inputText, setInputText] = useState("");
  const [allRestaruents, setAllRestaruent] = useState([]);
  const [filteredRestaruents, setFilteredRestaruents] = useState([]);

  //useEffect will execute only once after the first render
  //useeffect first argument is a function which will be executed
  //useeffect second argument is an array of dependencies
  //if the array is empty then the function will be executed only once after the first render
  //if the array contains any value then the function will be executed only when the value of the array changes 
  //if we give only first argument then the function will be executed after every render

  useEffect(()=>{
    const fetchData = async () => {
      try {
        //fetch is a function which is used to make a network request
        //fetch returns a promise which will be resolved when the network request is completed
        //fetch takes one argument which is the url of the network request
        //await is used to wait for the promise to be resolved
        //await can only be used inside an async function
        //await will wait for the promise to be resolved and then the value of the promise will be returned
        //response.json() will return the json data of the response
        //setAllRestaruent will update the state of allRestaruent
        //setFilteredRestaruents will update the state of filteredRestaruents
        //setAllRestaruent and setFilteredRestaruents will re-render the component
        //setAllRestaruent and setFilteredRestaruents will update the state of the component

      const response = await fetch(api);
      const Swiggydata = await response.json();
      setAllRestaruent(Swiggydata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaruents(Swiggydata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      } catch (error) {
      console.log(error);
      }
    };
      fetchData();
  },[]);

  console.log("render");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter Text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            const data = filterData(e.target.value, allRestaruents);
            setFilteredRestaruents(data);
          }}
          
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(inputText, allRestaruents);
            setFilteredRestaruents(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardsList">
        {filteredRestaruents.length===0?(<Shimmer/>):(filteredRestaruents?.map((restaruent) => {
          return (
            <RestaurentCard {...restaruent.info} key={restaruent.info.id} />
          );
        }))}
        {/* <RestaurentCard {...restaruentList[1].info}/>
        <RestaurentCard restaruent={restaruentList[2]}/> */}
      </div>
    </>
  );
};
export default Body;
