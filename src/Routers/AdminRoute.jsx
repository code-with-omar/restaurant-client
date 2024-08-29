import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const [user, loading] = useAuth()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return (
            <div className="grid grid-flow-col place-items-center h-screen w-1/6 mx-auto">
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;