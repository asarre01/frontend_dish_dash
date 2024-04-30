import React, { useState } from "react";
import { BiSolidPencil } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io";

function CardPlat({ item, i }) {
    const [showModal, setShowModal] = useState(false);
    const handleEdit = (numero) => {
        // Logique pour l'édition d'un élément
        console.log("Éditer l'élément avec le numéro :", numero);
    };

    const handleDelete = (numero) => {
        // Logique pour la suppression d'un élément
        console.log("Supprimer l'élément avec le numéro :", numero);
    };
    return (
        <tr>
            <td className="border px-2 py-2">{i}</td>
            <td className="border px-2 py-2 flex items-center justify-center">
                <div className="overflow-hidden size-24 ">
                    <img
                        src={`../assets/imagesPlats/${item.cheminImg}`}
                        alt=" par défaut"
                        className="mb-2 max-w-full object-cover"
                    />
                </div>
            </td>
            <td className="border px-4 py-2">{item.nom}</td>
            <td className="border px-4 py-2">{item.prix}</td>
            <td className="border px-4 py-2">
                <p className="max-w-xl mx-auto">{item.description}</p>
            </td>
            <td className="border px-4 py-2">
                <button
                    onClick={() => handleEdit(item.numero)}
                    className="mr-2 bg-green-500 hover:bg-green-dark text-white p-2  rounded"
                >
                    <BiSolidPencil />
                </button>
                <button
                    onClick={() => handleDelete(item.numero)}
                    className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
                >
                    <IoMdTrash />
                </button>
            </td>
        </tr>
    );
}

export default CardPlat;
