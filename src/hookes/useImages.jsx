import { useEffect, useState } from "react";


const useImages = () => {
   const [imge,setImage] = useState([])
   useEffect(()=>{
    fetch('http://localhost:5000/images')
    .then(res=>res.json())
    .then(data=>setImage(data))
   },[])
   return imge
};

export default useImages;