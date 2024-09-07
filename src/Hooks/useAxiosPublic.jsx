
import axios from "axios";
const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-server-code-with-omars-projects.vercel.app/',
});
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;