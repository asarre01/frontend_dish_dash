import axios from "axios";

const url = process.env.REACT_APP_API_URL + "/commandes"; // Récupère l'URL de l'API à partir des variables d'environnement
const token = localStorage.getItem("token"); // Récupère le token d'authentification de l'utilisateur stocké localement dans le navigateur


// Fonction pour ajouter une commande
export const ajouterCommande = async (data) => {
    try {
        console.log(data);
        const response = await axios.post(`${url}/ajouter`, data , {
            headers: {
                "Content-Type": "multipart/form-data", // Spécifie le type de contenu JSON dans l'en-tête
                Authorization: `Bearer ${token}`, // Ajoute le token d'authentification dans l'en-tête
            },
        });
        return response.data; // Retourne les données de la réponse
    } catch (error) {
        throw error.response.data; // Lance une erreur avec les données d'erreur de la réponse
    }
};

// Fonction pour valider le paiement d'une commande
export const validerPaiement = async (commandeId) => {
    try {
        const response = await axios.put(`${url}/valider-paiement/${commandeId}`, {
            headers: {
                "Content-Type": "multipart/form-data", // Spécifie le type de contenu JSON dans l'en-tête
                Authorization: `Bearer ${token}`, // Ajoute le token d'authentification dans l'en-tête
            },
        });
        return response.data; // Retourne les données de la réponse
    } catch (error) {
        throw error.response.data; // Lance une erreur avec les données d'erreur de la réponse
    }
};

// Fonction pour valider le statut d'une commande
export const validerStatut = async (commandeId) => {
    try {
        const response = await axios.put(`${url}/valider-statut/${commandeId}`, {
            headers: {
                "Content-Type": "multipart/form-data", // Spécifie le type de contenu JSON dans l'en-tête
                Authorization: `Bearer ${token}`, // Ajoute le token d'authentification dans l'en-tête
            },
        });
        return response.data; // Retourne les données de la réponse
    } catch (error) {
        throw error.response.data; // Lance une erreur avec les données d'erreur de la réponse
    }
};

// Fonction pour récupérer toutes les commandes
export const getAllCommandes = async () => {
    try {
        const response = await axios.get(`${url}/all`, {
            headers: {
                "Content-Type": "multipart/form-data", // Spécifie le type de contenu JSON dans l'en-tête
                Authorization: `Bearer ${token}`, // Ajoute le token d'authentification dans l'en-tête
            },
        });
        return response.data.commandes; // Retourne les données de la réponse
    } catch (error) {
        throw error.response.data; // Lance une erreur avec les données d'erreur de la réponse
    }
};
