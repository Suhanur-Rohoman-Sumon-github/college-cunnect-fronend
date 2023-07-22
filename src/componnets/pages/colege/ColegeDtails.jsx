
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ColegeDtails = () => {
    const [datails,setDetails] = useState()
    console.log(datails)
    const id = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/coleges/${id.id}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[id])
    return (
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img className="w-full h-screen" src={datails?.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default ColegeDtails;