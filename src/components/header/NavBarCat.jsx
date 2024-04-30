import React, { useState } from "react";
import { ajoutCategorie } from "../../Services/admin/CategorieService";
import Message from "../error/Message";

function NavBarCat({ searchQuery, setSearchQuery }) {
    const [showModal, setShowModal] = useState(false);
    const [newItemName, setNewItemName] = useState("");
    const [newItemDescription, setNewItemDescription] = useState("");
    const [show, setShow] = useState(false);
    const [succes, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Logique de filtrage à implémenter ici
    };

    const handleAddItemClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleAddItem = async () => {
        try {
            const formData = {
                nom: newItemName,
                description: newItemDescription,
            };

            // Envoyer une requête pour ajouter une catégorie avec les données du formulaire
            const response = await ajoutCategorie(formData);

            // Vérifier si la catégorie a été ajoutée avec succès
            if (response.status === 201) {
                setMessage(response.data.message);
                setSuccess(true);
                setShow(true);
                // Réinitialiser les champs après l'ajout
                setNewItemName("");
                setNewItemDescription("");
                setShowModal(false);
                window.location.reload();
                // Vous pouvez ajouter d'autres actions ici, comme afficher un message de succès, etc.
            } else if (response.status === 400) {
                setMessage(response.data.message);
                setSuccess(false);
                setShow(true);
                setShowModal(false);
            } else {
                // Si une erreur s'est produite lors de l'ajout de la catégorie, afficher un message d'erreur
                // Si ce n'est pas une erreur 400, afficher un message générique
                setMessage(
                    "Une erreur s'est produite lors de l'inscription. Veuillez réessayer plus tard."
                );
                setSuccess(false);
                setShow(true);
                // Vous pouvez également ajouter d'autres actions ici, comme afficher un message d'erreur à l'utilisateur, etc.
            }
        } catch (error) {
            // Gérer les autres erreurs, si nécessaire
            console.error(
                "Une erreur s'est produite lors de l'ajout de la catégorie :",
                error
            );
            // Vous pouvez également ajouter d'autres actions ici, comme afficher un message d'erreur générique à l'utilisateur, etc.
        }
    };

    return (
        <div className="">
            <div className=" w-full border-b-2 border-orange-dark pb-2">
                <h1 className=" text-3xl font-bold text-orange-dark tracking-widest">
                    Gestion des Catégories
                </h1>
            </div>
            <nav className=" p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="px-2 py-1 rounded-md mr-4 bg-whiter border-2 border-orange-dark focus:outline-none"
                    />
                    {/* <select className="px-2 py-1 rounded-md bg-orange-dark text-white focus:outline-none">

                    </select> */}
                </div>
                <div>
                    <button
                        onClick={handleAddItemClick}
                        className="bg-orange-dark font-bold text-white px-4 py-2 rounded-md focus:outline-none"
                    >
                        Ajouter
                    </button>
                </div>
                {/* Modal pour ajouter un nouvel élément */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="bg-white p-6 rounded-md">
                            <h2 className="text-lg font-semibold mb-4">
                                Ajouter un nouvel élément
                            </h2>
                            <label htmlFor="nom" className=" font-semibold">
                                Nom
                            </label>
                            <input
                                type="text"
                                placeholder="Nom"
                                id="nom"
                                name="nom"
                                value={newItemName}
                                onChange={(e) => setNewItemName(e.target.value)}
                                className="px-2 py-2  rounded-md mb-2 w-full outline-none border-2 border-orange-dark"
                            />
                            <label
                                htmlFor="description"
                                className=" font-semibold"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                placeholder="Description"
                                id="description"
                                name="description"
                                value={newItemDescription}
                                onChange={(e) =>
                                    setNewItemDescription(e.target.value)
                                }
                                className="px-2 py-2  rounded-md mb-2 w-full outline-none border-2 border-orange-dark"
                            />
                            <div className="flex justify-end">
                                <button
                                    onClick={handleModalClose}
                                    className="bg-red-100 text-gray-800 px-4 py-2 rounded-md mr-2 focus:outline-none"
                                >
                                    Annuler
                                </button>
                                <button
                                    onClick={handleAddItem}
                                    className="bg-orange-dark text-white px-4 py-2 rounded-md focus:outline-none"
                                >
                                    Ajouter
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
            <Message
                show={show}
                success={succes}
                msg={message}
                setShow={setShow}
            />
        </div>
    );
}

export default NavBarCat;
