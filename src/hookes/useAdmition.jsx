import axios from "axios";
import useAutheProvider from "./useAutheProvider";
import { useQuery } from "react-query";


const useAdmition = () => {
    const { user } = useAutheProvider()
    const { data: admitionData, refetch } = useQuery({

        queryKey: ['admitonData',user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://https://colege-cunnect-backends-su44248124.vercel.app/admitonData?email=${user?.email}`);
            return res.data;

        }

    })
    return [admitionData, refetch]
};

export default useAdmition;