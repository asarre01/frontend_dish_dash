import { Navigate } from "react-router-dom";

import { useAuth } from "../Context/AuthContext";

function WhoAmI({ children }) {
    const { isLoggedIn } = useAuth();
    const isAdmin = localStorage.getItem("isAdmin");
    if (isLoggedIn && isAdmin) {
        return <Navigate to={"/admin/"} />;
    } else if (isLoggedIn && !isAdmin) {
        return <Navigate to={"/client"} />;
    } else {
        return <Navigate to={"/public"} />;
    }
}

export default WhoAmI;
