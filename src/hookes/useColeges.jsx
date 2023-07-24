import { useEffect, useState } from "react";


const useColeges = () => {
    const [coleges,setColeges] = useState(null)
   useEffect(()=>{
    fetch('https://colege-cunnect-backends-su44248124.vercel.app/coleges')
    .then(res=>res.json())
    .then(data=>setColeges(data))
   },[])
   return coleges
};

export default useColeges;