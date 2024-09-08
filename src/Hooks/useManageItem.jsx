import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useManageItem = () => {
    const { user } = useAuth()
    const axiosSecure = useAxios()
    const { refetch, data: reservation = [] } = useQuery({
        queryKey: ['reservation',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reservation?email=${user.email}`)
            return res.data;
        },
    })
    return [reservation, refetch]
};
export default useManageItem;