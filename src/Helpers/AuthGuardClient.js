import { Navigate } from "react-router-dom";

function AuthGuardClient({ children }) {
   
    // Vérifiez si l'utilisateur est connecté et s'il est administrateur
    const isAdmin = localStorage.getItem("isAdmin");
    const token = localStorage.getItem("token");

    if (!isAdmin || !token) {
        // Si l'utilisateur n'est pas connecté ou n'est pas administrateur, redirigez-le vers la page de connexion
        return <Navigate to={"/auth/login"}/>;
    } else {
        // Si l'utilisateur est connecté et est client, affichez les enfants
        return children;
    }
}

export default AuthGuardClient;
