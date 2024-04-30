import axios from "axios";

const url = process.env.REACT_APP_API_URL; // Récupère l'URL de l'API à partir des variables d'environnement
const token = localStorage.getItem("token"); // Récupère le token d'authentification de l'utilisateur stocké localement dans le navigateur

export const ajouterPlat = async (data) => {
    try {
        // Envoie une requête POST à l'API avec les données fournies
        const response = await axios.post(`${url}/plats/add`, data, {
            headers: {
                "Content-Type": "multipart/form-data", // Spécifie le type de contenu JSON dans l'en-tête
                Authorization: `Bearer ${token}`, // Ajoute le token d'authentification dans l'en-tête
            },
        });

        // Vérifie si le code de statut de la réponse est 201 (Créé) ou 400 (Mauvaise requête)
        if (response.status === 201 || response.status === 400) {
            return response; // Retourne la réponse si tout s'est bien passé
        } else {
            // Lève une erreur si le code de statut de la réponse est différent de 201 ou 400
            throw new Error(
                `Erreur: Statut de réponse inattendu ${response.status}`
            );
        }
    } catch (error) {
        // Capture et gère les erreurs survenues lors de l'envoi de la requête
        if (error.response && error.response.status === 400) {
            // Si le serveur renvoie un code de statut 400, cela signifie que la catégorie existe déjà
            return error.response; // Retourne la réponse d'erreur
        } else {
            // Si l'erreur n'est pas liée au code d'état 400, lance l'erreur pour être capturée plus haut
            throw error;
        }
    }
};

// Fonction pour récupérer les plats
export const getAllPlats = async () => {
    try {
        // Envoie une requête GET à l'API
        const response = await axios.get(`${url}/plats/`, {
            headers: {
                "Content-Type": "application/json", // Spécifie le type de contenu JSON dans l'en-tête
                Authorization: `Bearer ${token}`, // Ajoute le token d'authentification dans l'en-tête
            },
        });
        return response.data;
    } catch (error) {
        // Capture et gère les erreurs survenues lors de l'envoi de la requête
        if (error.response && error.response.status === 500) {
            // Si le serveur renvoie un code de statut 400, cela signifie que la catégorie existe déjà
            return error.response; // Retourne la réponse d'erreur
        } else {
            // Si l'erreur n'est pas liée au code d'état 400, lance l'erreur pour être capturée plus haut
            throw error;
        }
    }
};

// Fonction pour récupérer les plats
export const getPlatsByCategorie = async (id) => {
    try {
        // Envoie une requête GET à l'API
        const response = await axios.get(`${url}/plats/${id}`, {
            headers: {
                "Content-Type": "application/json", // Spécifie le type de contenu JSON dans l'en-tête
                Authorization: `Bearer ${token}`, // Ajoute le token d'authentification dans l'en-tête
            },
        });
        return response.data;
    } catch (error) {
        // Capture et gère les erreurs survenues lors de l'envoi de la requête
        if (error.response && error.response.status === 500) {
            // Si le serveur renvoie un code de statut 400, cela signifie que la catégorie existe déjà
            return error.response; // Retourne la réponse d'erreur
        } else {
            // Si l'erreur n'est pas liée au code d'état 400, lance l'erreur pour être capturée plus haut
            throw error;
        }
    }
};
