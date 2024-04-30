import React, { useState, useRef } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdInfo } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";

function Plat({ item }) {
    const [showModal, setShowModal] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [isAdding, setIsAdding] = useState(false); // Ajout d'un état pour suivre si le plat est en cours d'ajout
    const audioRef = useRef();

    const showAddedNotification = () => {
        setShowNotification(true);
        // Vérifier si audioRef.current est défini
        if (audioRef.current) {
            audioRef.current.play();
        }
        setTimeout(() => {
            setShowNotification(false);
            setIsAdding(false); // Réactiver le bouton d'ajout après la notification
        }, 1000); // La notification disparaîtra après une seconde
    };

    const openModal = () => {
        setShowModal(true);
        document.body.classList.toggle("overflow-hidden");
    };

    const closeModal = () => {
        setShowModal(false);
        document.body.classList.toggle("overflow-hidden");
    };

    const handleClick = (plat) => {
        if (!isAdding) {
            // Vérifier si le plat est en cours d'ajout
            setIsAdding(true); // Mettre à jour l'état pour indiquer que le plat est en cours d'ajout
            // Récupérer le panier depuis le local storage ou initialiser un nouveau panier vide
            let panier = JSON.parse(localStorage.getItem("MyDish")) || [];

            // Vérifier si le plat existe déjà dans le panier en fonction de son ID
            const existingPlatIndex = panier.findIndex(
                (p) => p._id === plat._id
            );

            if (existingPlatIndex !== -1) {
                // Si le plat existe déjà, incrémenter la quantité
                panier[existingPlatIndex].quantite++;
            } else {
                // Si le plat n'existe pas, ajouter le plat avec une quantité initialisée à un
                plat.quantite = 1;
                panier.push(plat);
            }

            // Mettre à jour le panier dans le local storage
            localStorage.setItem("MyDish", JSON.stringify(panier));

            // Appeler la fonction pour afficher la notification
            showAddedNotification();
        }
    };

    return (
        <div
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            }}
            className="max-w-64 rounded-md dark:bg-transparent dark:text-light cursor-pointer max-md:w-40"
        >
            <img
                src={process.env.PUBLIC_URL + `/assets/imagesPlats/${item.cheminImg}`}
                alt=""
                className="object-contain object-center rounded-t-md size-32 md:size-64 mx-auto "
            />
            <div className="p-4 h-26 md:h-28">
                {" "}
                {/* Définir une hauteur fixe pour le contenu */}
                <div className=" grid grid-rows-2 ">
                    <h2 className="text-xs font-bold tracking md:text-sm">
                        {item.nom}
                    </h2>
                    <div className="flex  items-center justify-between w-full -mb-3">
                        <div className="">
                            {/* Ouvrir le modal au clic */}
                            <MdInfo
                                className="text-orange-dark text-5xl max-md:text-2xl cursor-pointer"
                                onClick={openModal}
                            />
                            {/* Modal */}
                            {showModal && (
                                <div className="fixed inset-0 flex items-center justify-center z-50">
                                    <div
                                        className="absolute inset-0 bg-black opacity-50"
                                        onClick={closeModal}
                                    ></div>
                                    <div className="bg-white dark:bg-gray-800 p-8 rounded-md max-w-md z-50 relative">
                                        {/* Contenu du modal */}
                                        <h3 className="text-xl font-bold mb-4">
                                            {item.nom}
                                        </h3>
                                        <p>{item.description}</p>
                                        {/* Bouton pour fermer le modal */}
                                        <FaXmark
                                            className="absolute top-2 right-2 text-red-500 cursor-pointer"
                                            onClick={closeModal}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="font-bold max-md:text-xs">
                            <span>{item.prix}</span>
                            <span className="text-orange-dark"> XOF</span>
                        </div>
                        <div onClick={() => handleClick(item)}>
                            <IoAddCircle
                                className={`text-orange-dark text-5xl max-md:text-2xl ${
                                    isAdding ? "pointer-events-none" : ""
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {showNotification && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
                    Plat ajouté à votre assiette !
                    <audio
                        ref={audioRef}
                        src={process.env.PUBLIC_URL + "/assets/notif.mp3"}
                        autoPlay 
                    />
                </div>
            )}
        </div>
    );
}

export default Plat;
