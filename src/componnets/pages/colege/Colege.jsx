import ColegesMaps from "../../../hookes/coleges/ColegesMaps";
import useColeges from "../../../hookes/useColeges";


const Colege = () => {
    const coleges = useColeges()
    return (
        <div className="w-11/12 mx-auto">
            {coleges ? <ColegesMaps datas={coleges}></ColegesMaps> : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh", 
                    }}
                >
                    <span className="loading loading-spinner loading-lg text-teal-500"></span>
                </div>
            )}
        </div>
    );
};

export default Colege;