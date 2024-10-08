import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useHooks = () => {
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch(`https://bistro-boss-server-code-with-omars-projects.vercel.app/menu`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [menu, loading]
    const axiosPublic = useAxiosPublic()
    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/menu`)
            return res.data
        }
    });
    return [menu, loading, refetch]
};

export default useHooks;