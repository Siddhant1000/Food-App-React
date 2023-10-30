import {useEffect, useState} from "react";

const useRecommended = (resId)=>{
    const [recom,setRecom]=useState(null);

    useEffect(()=>{
        getRecommended();
    },[])

    async function getRecommended(){
        const res =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"+resId+"&submitAction=ENTER");
        const json=await res.json();
        setRecom(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
       


    }
    return recom;
}

export default useRecommended;

