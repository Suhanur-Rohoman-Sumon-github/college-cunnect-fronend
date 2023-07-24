
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const ColegeDtails = () => {
  const [datails, setDetails] = useState()
  console.log(datails)
  const id = useParams()
  useEffect(() => {
    fetch(`https://colege-cunnect-backends-su44248124.vercel.app/coleges/${id.id}`)
      .then(res => res.json())
      .then(data => setDetails(data))
  }, [id])
  return (
    <div className="card w-full font-serif">
      <figure><img className="w-full h-screen" src={datails?.image} alt="Shoes" /></figure>
      <div className="card-body w-11/12 mx-auto">
        <h2 className="text-4xl text-teal-500 text-center ">{datails?.collegeName}</h2>
        <div className="grid md:grid-cols-3 mt-7">
          <div>
            <h1 className="text-3xl text-teal-500">sports:</h1>
            {

              datails?.sports.map(sport => <div key={sport.category}>
                <p className="mt-4 text-teal-500 text-2xl">{sport.category}</p>
                {
                  sport.sportsList.map(sportslist => <div key={sportslist.name} className="card w-96 ">
                    <div className="card-body">
                      <h2 className="card-title text-teal-500">{sportslist.name}</h2>
                      <p>{sportslist.description}</p>
                    </div>
                  </div>)
                }
              </div>)

            }

          </div>
          <div>
            <h1 className="text-3xl text-teal-500">events:</h1>
            {

              datails?.events.map(event => <div key={event.name} className="card w-full ">
                <div className="card-body">
                  <h2 className="card-title text-teal-500">{event.name}</h2>
                  <p>{event.date}</p>
                  <p>{event.description}</p>
                </div>
              </div>)

            }
          </div>

          <div>
            <h1 className="text-3xl text-teal-500">recharce works:</h1>
            {

              datails?.researchWorks.map(recarche => <div key={recarche} className="card w-full mt-4">
                <p>{recarche}</p>
              </div>)

            }
            <Link to={'/admition'}><button  className="btn btn-primary my-10 w-full">admit now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColegeDtails;