import { useEffect, useState } from "react";


const useColeges = () => {
    const [coleges,setColeges] = useState(null)
   useEffect(()=>{
    fetch('http://localhost:5000/coleges')
    .then(res=>res.json())
    .then(data=>setColeges(data))
   },[])
   return coleges
};

export default useColeges;