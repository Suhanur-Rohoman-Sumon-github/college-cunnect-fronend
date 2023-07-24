import { useEffect, useState } from "react";


const useRevews = () => {
   const [revews,setRevews] = useState([])
   useEffect(()=>{
    fetch('https://colege-cunnect-backends-su44248124.vercel.app/revews')
    .then(res=>res.json())
    .then(data=>setRevews(data))
   },[])
   return revews
};

export default useRevews;