import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useManeItem = () => {
    const axiosSecure = useAxios()
    const { refetch, data: allCarts = [] } = useQuery({
        queryKey: ['allCarts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allCarts`)
            return res.data;
        },
    })
    return [allCarts, refetch]
};

export default useManeItem;