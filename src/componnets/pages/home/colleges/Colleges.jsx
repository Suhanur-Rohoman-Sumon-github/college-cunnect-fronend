import Titleses from "../../../../hookes/Titleses";
import ColegesMaps from "../../../../hookes/coleges/ColegesMaps";
import useColege from "../../../../hookes/useColege";



const Colleges = () => {
  const colege = useColege()
    return (
        <div className="w-11/12 mx-auto">
           <Titleses title='Which best describes how you want to get started?'/>
            <div>
            {colege ? <ColegesMaps datas={colege}></ColegesMaps> : <span className="loading loading-spinner loading-lg"></span>}
            </div>
        </div>
    );
};

export default Colleges;