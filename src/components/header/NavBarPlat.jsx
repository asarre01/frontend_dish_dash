import React, { useState, useEffect } from "react";
import { ajouterPlat } from "../../Services/admin/PlatService"; // Assurez-vous d'avoir ce service en place
import { getAllCategories } from "../../Services/admin/CategorieService";
import Message from "../error/Message";
import { RiImageAddFill } from "react-icons/ri";

function NavBarPlat({ searchQuery, setSearchQuery }) {
    const [showModal, setShowModal] = useState(false);
    const [newItemName, setNewItemName] = useState("");
    const [newItemDescription, setNewItemDescription] = useState("");
    const [newItemPrice, setNewItemPrice] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Récupérer toutes les catégories au chargement du composant
        async function fetchCategories() {
            try {
                const response = await getAllCategories();
                setCategories(response);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des catégories :",
                    error
                );
            }
        }
        fetchCategories();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleAddItemClick = () => {
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleAddItem = async () => {
        try {
            const formData = new FormData();
            formData.append("nom", newItemName);
            formData.append("description", newItemDescription);
            formData.append("prix", newItemPrice);
            formData.append("categorieId", selectedCategory);
            formData.append("image", imageFile);

            const response = await ajouterPlat(formData);

            if (response.status === 201) {
                setMessage(response.data.message);
                setSuccess(true);
                setShow(true);
                setNewItemName("");
                setNewItemDescription("");
                setNewItemPrice("");
                setSelectedCategory("");
                setImageFile(null);
                setShowModal(false);
            } else if (response.status === 400) {
                setMessage(response.data.message);
                setSuccess(false);
                setShow(true);
                setShowModal(false);
            } else {
                setMessage(
                    "Une erreur s'est produite lors de l'ajout du plat. Veuillez réessayer plus tard."
                );
                setSuccess(false);
                setShow(true);
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout du plat :", error);
        }
    };

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    return (
        <div className="">
            <div className="w-full border-b-2 border-orange-dark pb-2">
                <h1 className="text-3xl font-bold text-orange-dark tracking-widest">
                    Gestion des Plats
                </h1>
            </div>
            <nav className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="px-2 py-1 rounded-md mr-4 bg-whiter border-2 border-orange-dark focus:outline-none"
                    />
                </div>
                <div>
                    <button
                        onClick={handleAddItemClick}
                        className="bg-orange-dark font-bold text-white px-4 py-2 rounded-md focus:outline-none"
                    >
                        Ajouter
                    </button>
                </div>
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="bg-white p-6 rounded-md w-96">
                            <h2 className="text-lg font-semibold mb-4">
                                Ajouter un nouvel plat
                            </h2>
                            <div className="mb-4">
                                <label
                                    htmlFor="photo"
                                    className="font-semibold mb-1  flex flex-col justify-center items-center"
                                >
                                    {imageFile ? (
                                        <div className="overflow-hidden size-44 border-2 border-orange-dark rounded-full">
                                            <img
                                                src={URL.createObjectURL(
                                                    imageFile
                                                )}
                                                alt=" ajoutée"
                                                className="mb-2 max-w-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className="overflow-hidden size-44 border-2 border-orange-dark rounded-full">
                                            <img
                                                src="../assets/burger.png"
                                                alt=" par défaut"
                                                className="mb-2 max-w-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1">
                                        <RiImageAddFill className=" text-2xl text-orange-dark" /> Ajouter une image
                                    </div>
                                </label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleFileChange}
                                    className="mb-2 w-full hidden"
                                />
                            </div>
                            <label
                                htmlFor="nom"
                                className="font-semibold block mb-1"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                placeholder="Nom"
                                id="nom"
                                name="nom"
                                value={newItemName}
                                onChange={(e) => setNewItemName(e.target.value)}
                                className="px-2 py-2 rounded-md mb-2 w-full outline-none border-2 border-orange-dark"
                            />
                            <label
                                htmlFor="description"
                                className="font-semibold block mb-1"
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
                                className="px-2 py-2 rounded-md mb-2 w-full outline-none border-2 border-orange-dark"
                            />
                            <label
                                htmlFor="prix"
                                className="font-semibold block mb-1"
                            >
                                Prix
                            </label>
                            <input
                                type="number"
                                placeholder="Prix"
                                id="prix"
                                name="prix"
                                value={newItemPrice}
                                onChange={(e) =>
                                    setNewItemPrice(e.target.value)
                                }
                                className="px-2 py-2 rounded-md mb-2 w-full outline-none border-2 border-orange-dark"
                            />
                            <label
                                htmlFor="categorie"
                                className="font-semibold block mb-1"
                            >
                                Catégorie
                            </label>
                            <select
                                id="categorie"
                                name="categorie"
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                                className="px-2 py-2 rounded-md mb-2 w-full outline-none border-2 border-orange-dark"
                            >
                                <option value="">
                                    Sélectionner une catégorie
                                </option>
                                {categories.map((categorie) => (
                                    <option
                                        key={categorie._id}
                                        value={categorie._id}
                                    >
                                        {categorie.nom}
                                    </option>
                                ))}
                            </select>
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
                success={success}
                msg={message}
                setShow={setShow}
            />
        </div>
    );
}

export default NavBarPlat;
