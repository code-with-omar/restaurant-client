import { useContext } from "react";
import { AuthContext } from "../Providers/authProvider";
const useAuth = () => {
    const { user } = useContext(AuthContext)
    return user;
};

export default useAuth;