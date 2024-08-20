import { useContext } from "react";
import { AuthContext } from "../Providers/authProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return (
            <div className="grid grid-flow-col place-items-center h-screen w-1/6 mx-auto">
                <progress className="progress w-56"></progress>
            </div>

        )


    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouter;