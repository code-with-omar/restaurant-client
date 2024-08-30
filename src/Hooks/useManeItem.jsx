import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useManeItem = () => {
    const axiosPublic = useAxiosPublic()
    const { refetch, data: allCarts = [] } = useQuery({
        queryKey: ['allCarts'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/allCarts`)
            return res.data;
        },
    })
    return [allCarts, refetch]
};

export default useManeItem;