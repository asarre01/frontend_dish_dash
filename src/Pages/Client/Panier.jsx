import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Panier() {
    const [panier, setPanier] = useState(
        JSON.parse(localStorage.getItem("MyDish")) || []
    );
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        table: "",
        nom: "",
        prenom: "",
        tel: "",
    });

    // Fonction pour gérer les changements dans le formulaire
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Récupérer le panier depuis le localStorage lors du chargement initial
    useEffect(() => {
        const storedPanier = JSON.parse(localStorage.getItem("MyDish"));
        setPanier(storedPanier);
    }, []);

    // Mettre à jour le panier dans le localStorage à chaque changement
    useEffect(() => {
        localStorage.setItem("MyDish", JSON.stringify(panier));
    }, [panier]);

    // Fonction pour supprimer un élément du panier
    const removeFromPanier = (index) => {
        const updatedPanier = [...panier];
        updatedPanier.splice(index, 1);
        setPanier(updatedPanier);
    };

    // Fonction pour augmenter la quantité d'un élément du panier
    const increaseQuantity = (index) => {
        const updatedPanier = [...panier];
        updatedPanier[index].quantite++;
        setPanier(updatedPanier);
    };

    // Fonction pour diminuer la quantité d'un élément du panier
    const decreaseQuantity = (index) => {
        const updatedPanier = [...panier];
        if (updatedPanier[index].quantite > 1) {
            updatedPanier[index].quantite--;
            setPanier(updatedPanier);
        }
    };

    // Calculer le total de chaque article
    const calculateTotalItem = (item) => {
        return item.prix * item.quantite;
    };

    // Calculer le total de la commande
    const calculateTotalCommande = () => {
        return panier.reduce((total, item) => {
            return total + calculateTotalItem(item);
        }, 0);
    };

    // Fonction pour ouvrir le modal
    const openModal = () => {
        setShowModal(true);
    };

    // Fonction pour fermer le modal
    const closeModal = () => {
        setShowModal(false);
    };

    // Fonction pour traiter la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour traiter les données du formulaire
        // Par exemple, vous pouvez les envoyer à votre serveur
        // et afficher un message de confirmation
        console.log("Formulaire soumis avec succès !");
        closeModal(); // Ferme le modal après la soumission
    };

    return (
        <section className="py-4 container mx-auto px-6">
            <h2 className="text-lg font-bold mb-4">Panier</h2>
            {panier.length === 0 ? (
                <p className=" space-y-2 border-2 border-orange-dark py-4 px-6 rounded-md">
                    Votre panier est vide
                </p>
            ) : (
                <div className=" space-y-2 border-2 border-orange-dark py-4 px-6 rounded-md">
                    {panier.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col lg:flex-row items-center justify-between border border-gray-200 py-2 px-4 shadow-lg rounded-lg relative"
                        >
                            <div className="flex items-center justify-center text-center lg:text-left  flex-col lg:flex-row">
                                <img
                                    src={`../assets/imagesPlats/${item.cheminImg}`}
                                    alt={item.nom}
                                    className="object-contain object-center rounded-t-md size-16 md:size-24 mr-4 lg:mr-10 "
                                />
                                <div>
                                    <p className="font-bold">{item.nom}</p>
                                    <p className="font-bold">{item.prix} XOF</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center p-2">
                                <button
                                    onClick={() => decreaseQuantity(index)}
                                    className="text-orange-dark mr-2"
                                >
                                    <FaMinus />
                                </button>
                                <span>{item.quantite}</span>
                                <button
                                    onClick={() => increaseQuantity(index)}
                                    className="text-orange-dark ml-2"
                                >
                                    <FaPlus />
                                </button>
                            </div>
                            <div className=" flex justify-between items-center lg:block space-x-4">
                                <div className="font-bold">
                                    {calculateTotalItem(item)} XOF
                                </div>
                            </div>
                            <div className=" flex items-end justify-end absolute top-2 right-2">
                                <button
                                    onClick={() => removeFromPanier(index)}
                                    className="text-red-500 w-full"
                                >
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/x-mark-red.png"
                                        }
                                        className="size-5"
                                        alt=""
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex items-center justify-between">
                        <div className="mt-4">
                            <p className="font-bold lg:text-xl">
                                Total: {calculateTotalCommande()} XOF
                            </p>
                        </div>
                        <div>
                            <button
                                onClick={openModal}
                                className="max-lg:w-full mt-8 inline-block rounded-lg bg-green-dark px-8 py-3 text-center text-lg font-bold uppercase  text-light outline-none max-sm:text-sm"
                            >
                                Commander
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 max-w-md relative">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="text-red-500 absolute top-2 right-2"
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/x-mark-red.png"
                                }
                                className="size-5"
                                alt=""
                            />
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Commander</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="table"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Table
                                </label>
                                <select
                                    name="table"
                                    id="table"
                                    className="border border-gray-300 rounded-md w-full px-3 py-2"
                                    value={formData.table}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">
                                        Sélectionner une table
                                    </option>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            Table {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="nom"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    name="nom"
                                    className="border border-gray-300 rounded-md w-full px-3 py-2"
                                    value={formData.nom}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="prenom"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    id="prenom"
                                    name="prenom"
                                    className="border border-gray-300 rounded-md w-full px-3 py-2"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="tel"
                                    className="block text-gray-700 font-bold mb-2"
                                >
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    name="tel"
                                    className="border border-gray-300 rounded-md w-full px-3 py-2"
                                    value={formData.tel}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <button
                                    type="submit"
                                    className="inline-block px-4 py-2 bg-green-500 text-white font-bold rounded-md w-full"
                                >
                                    Commander
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Panier;
