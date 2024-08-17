import { Menu_Api } from "../constants";
import { useState,useEffect } from "react";

const useRestaruentData=(id)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async()=>{
        const data=await fetch(Menu_Api+id);
        const json=await data.json();
        setResInfo(json?.data);
    }
    return resInfo;
}
export default useRestaruentData;