import SingleColeges from "./SingleColeges";


const ColegesMaps = ({datas}) => {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                datas.map(data=><SingleColeges 
                key={data._id}
                data={data}
                ></SingleColeges>)
            }
        </div>
    );
};

export default ColegesMaps;