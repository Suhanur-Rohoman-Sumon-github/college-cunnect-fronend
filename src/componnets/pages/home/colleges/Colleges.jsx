import Titleses from "../../../../hookes/Titleses";
import ColegesMaps from "../../../../hookes/coleges/ColegesMaps";
import useColege from "../../../../hookes/useColege";



const Colleges = () => {
  const colege = useColege()
    return (
        <div className="w-11/12 mx-auto">
           <Titleses title='Which best describes how you want to get started?'/>
            <div>
            <ColegesMaps datas={colege}></ColegesMaps>
            </div>
        </div>
    );
};

export default Colleges;