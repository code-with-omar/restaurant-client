import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAddReservation = () => {
    const axiosSecure = useAxios()
    const { refetch, data: reservation = [] } = useQuery({
        queryKey: ['reservation'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reservation`)
            return res.data;
        },
    })
    return [reservation, refetch]
};

export default useAddReservation;