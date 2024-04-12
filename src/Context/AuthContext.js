import React, { createContext, useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
// Créer un contexte pour stocker l'état de connexion
const AuthContext = createContext();

// Créer un composant fournisseur qui fournit les fonctions de connexion
const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Vérifie si l'utilisateur est connecté lors du chargement de l'application
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            // Vérifiez le token ici, par exemple, vous pouvez décoder le JWT et vérifier s'il est toujours valide
            setIsLoggedIn(true);
        }
    }, [setIsLoggedIn]);

    // Fonction de connexion
    const login = (data) => {
        // Conversion de la chaîne JSON en objet JavaScript
        const profil = { ...data.profil };

        // Stockage des données dans le localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAdmin", data.isAdmin);
        // Stockage de l'objet profil converti en chaîne JSON
        localStorage.setItem("profil", JSON.stringify(profil));

        // Mettre à jour l'état de connexion
        setIsLoggedIn(true);
    };

    // Fonction de déconnexion
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("profil");
        setIsLoggedIn(false);
        <Navigate to={"/"} />;
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Créer un hook personnalisé pour utiliser le contexte d'authentification
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
