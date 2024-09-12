import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useManageItem = () => {
    const axiosSecure = useAxios()
    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allCarts`)
            return res.data;
        },
    })
    return [carts, refetch]
};
export default useManageItem;