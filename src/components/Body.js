import RestaurentCard, { withPromoted } from "./RestaurentCard";
import React, { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

function filterData(inputText, restaruents) {
  const res = restaruents.filter((restaruent) =>
    restaruent.info.name.toLowerCase().includes(inputText.toLowerCase())
  );
  return res;
}

const RestaurentCardWithVeg = withPromoted(RestaurentCard);

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

  /***
   * useEffect(()=>{
   * console.log("useEffect");
   *  return ()=>{
   * console.log("cleanup useeffect return");
   * }
   * },[])
   *
   * this code is equivalent to componentWIllUnmount
   * that means the function inside the useEffect will be executed only once after the first render
   * and the return function will be executed when the component is unmounted
   * unmounted means the component is removed from the dom
   * it happens when we navigate to another page
   * or when we remove the component from the dom
   * return function is used to do some cleanup work
   * like removing event listeners or clearing intervals
   *
   */

  useEffect(() => {
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

        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.544893&lng=81.521241"
        );
        const Swiggydata = await response.json();
        console.log(Swiggydata);
        setAllRestaruent(
          Swiggydata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredRestaruents(
          Swiggydata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log("render");
  //console.log(allRestaruents);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 className="bg-black text-white w-max h-max p-24 text-center">
        Offline
      </h1>
    );
  }

  const { userName, setUserName } = useContext(UserContext);

  return (
    <React.Fragment>
      <div className="p-2 m-1">
        <input
          type="text"
          placeholder="Enter Text"
          className="border border-gray-400 rounded-md p-2"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            // const data = filterData(e.target.value, allRestaruents);
            // setFilteredRestaruents(data);
          }}
        />
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-md ml-2"
          onClick={() => {
            const data = filterData(inputText, allRestaruents);
            setFilteredRestaruents(data);
          }}
        >
          Search
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter userName"
          className="border border-black"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaruents?.length === 0 ? (
          <Shimmer />
        ) : (
          filteredRestaruents?.map((restaruent) => {
            return (
              <Link
                to={"/restaruent/" + restaruent.info.id}
                key={restaruent.info.id}
                className="m-4"
              >
                {restaruent.info.veg === true ? (
                  <RestaurentCardWithVeg {...restaruent.info} />
                ) : (
                  <RestaurentCard {...restaruent.info} />
                )}
              </Link>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};
export default Body;
