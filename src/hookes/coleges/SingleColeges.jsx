
import { FaRegCheckCircle, FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleColeges = ({ data }) => {
    const {_id, image, collegeName, admissionDates, events, researchHistory, sports } = data
   
    return (
        <div className="card w-full  ">
            <figure><img src={image} className="w-full h-64" alt="Shoes" /></figure>
            <div className="card-body font-serif">
                <h2 className="card-title text-teal-500">{collegeName}</h2>
                <p>admition date : {admissionDates}</p>
                <div className="flex items-center justify-between">
                    <div >
                        <h1 className="card-title text-teal-500 text-center my-4">Events :</h1>
                        {
                            events.map(event => <div className="flex items-center" key={event.name}>
                                <FaRegCheckCircle  className="text-blue-600"/>   <p className="ml-2">{event.name}</p>
                            </div>)
                        }
                    </div>
                    <div>
                        <h1 className="card-title text-teal-500 my-4">Sports :</h1>
                        {
                            sports.map(sport => <div className="flex items-center" key={sport.name}>
                                <FaRegCheckCircle className="text-blue-600"/> <p className="ml-2">{sport.category}</p>
                            </div>)
                        }
                    </div>
                </div>
                <p className="my-4">{researchHistory}</p>
                <div className="card-actions ">
                    <Link className="w-full" to={`/mycolege/${_id}`}><button className="btn btn-primary w-full">dtails<FaLongArrowAltRight /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleColeges;