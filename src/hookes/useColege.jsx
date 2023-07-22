import { useEffect, useState } from "react";
import useColeges from "./useColeges";

const useColege = () => {
    const coleges = useColeges();
    const [colege, setColege] = useState([]);

    useEffect(() => {
        if (coleges !== null) {
            const filter = coleges.filter(coleg => coleg.top === true);
            setColege(filter);
        }
    }, [coleges]);

    return colege;
};

export default useColege;
