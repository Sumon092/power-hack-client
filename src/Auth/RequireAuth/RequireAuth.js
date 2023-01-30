import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RequireContext } from "../../App";


const RequireAuth = ({ children }) => {
    const { isLoading } = useContext(RequireContext);
    const location = useLocation();
    const token = localStorage.getItem("accessToken");

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
