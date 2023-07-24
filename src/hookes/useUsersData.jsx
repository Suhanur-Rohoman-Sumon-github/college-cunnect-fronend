
import useAutheProvider from "./useAutheProvider";
import { useQuery } from "react-query";
import axios from "axios";


const useUsersData = () => {
    const { user } = useAutheProvider()
    const { data: userData } = useQuery({

        queryKey: ['admitonData', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://colege-cunnect-backends-su44248124.vercel.app/usersInformations?email=${user?.email}`);
            return res.data;

        }

    })
    return [userData]
};

export default useUsersData;