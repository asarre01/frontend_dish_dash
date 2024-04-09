import React, { createContext, useContext, useState, useEffect } from "react";

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
    }, []);

    // Fonction de connexion
    const login = (data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAdmin", data.isAdmin);
        localStorage.setItem("profil", { ...data.profil });
        setIsLoggedIn(true);
    };

    // Fonction de déconnexion
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
        localStorage.removeItem("profil");
        setIsLoggedIn(false);
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
