import ColegesMaps from "../../../hookes/coleges/ColegesMaps";
import useColeges from "../../../hookes/useColeges";


const Colege = () => {
    const coleges = useColeges()
    return (
        <div className="py-28">
            {coleges?<ColegesMaps datas={coleges}></ColegesMaps>:<span className="loading loading-spinner loading-lg mx-auto"></span>}
        </div>
    );
};

export default Colege;