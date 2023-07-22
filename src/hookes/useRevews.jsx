import { useEffect, useState } from "react";


const useRevews = () => {
   const [revews,setRevews] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/revews')
    .then(res=>res.json())
    .then(data=>setRevews(data))
   },[])
   return revews
};

export default useRevews;