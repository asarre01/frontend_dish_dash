import axios from "axios";

const url = process.env.REACT_APP_API_URL;
// S'incrire
export const register = async (data) => {
    try {
        const response = await axios.post(`${url}/users/add`, data);

        // Vérifier si le code de statut de la réponse est 201 ou 400
        if (response.status === 201 || response.status === 400) {
            return response;
        } else {
            throw new Error(
                `Erreur: Statut de réponse inattendu ${response.status}`
            );
        }
    } catch (error) {
        // Si une erreur se produit, nous la capturons ici
        if (error.response && error.response.status === 400) {
            // Si le serveur renvoie un code de statut 400, l'utilisateur existe déjà.
            return error.response
        } else {
            // Si l'erreur n'est pas liée au code d'état 400, nous levons l'erreur.
            throw error;
        }
    }
};

export const logUser = async (data) =>{
    try {
        const response = await axios.post(`${url}/users/login`, data);

        // Vérifier si le code de statut de la réponse est 201 ou 404
        if (response.status === 200 || response.status === 401 || response.status === 404) {
            return response;
        } else {
            throw new Error(
                `Erreur: Statut de réponse inattendu ${response.status}`
            );
        }
    } catch (error) {
        // Si une erreur se produit, nous la capturons ici
        if (error.response && (error.response.status === 401 || error.response.status === 404)) {
            // Si le serveur renvoie un code de statut 400, l'utilisateur existe déjà.
            return error.response
        } else {
            // Si l'erreur n'est pas liée au code d'état 400, nous levons l'erreur.
            throw error;
        }
    }
}