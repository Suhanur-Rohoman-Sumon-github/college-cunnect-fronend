import { useEffect, useState } from "react";


const useImages = () => {
   const [imge,setImage] = useState([])
   useEffect(()=>{
    fetch('http://https://colege-cunnect-backends-su44248124.vercel.app/images')
    .then(res=>res.json())
    .then(data=>setImage(data))
   },[])
   return imge
};

export default useImages;