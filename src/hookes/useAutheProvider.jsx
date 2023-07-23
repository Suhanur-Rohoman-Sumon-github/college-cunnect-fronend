import { useContext } from "react";
import { AuthContext } from "../provider/AutheProvider";


const useAutheProvider = () => {
    return useContext(AuthContext)
};

export default useAutheProvider;