import React, { useEffect, useState } from "react";
import CardCategorie from "./CardCategorie";
import { getAllCategories } from "../../../Services/admin/CategorieService";

const ListCategorie = ({ searchQuery }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllCategories();
                console.log(response);
                setData(response);
            } catch (error) {
                console.error(
                    "Une erreur s'est produite lors de la récupération des catégories :",
                    error
                );
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filterData = () => {
            let newData = [];
            if (Array.isArray(data)) {
                if (!searchQuery.trim()) {
                    newData = data;
                } else {
                    newData = data.filter((item) =>
                        item.nom
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                    );
                }
            }
            setFilteredData(newData);
        };

        filterData();
    }, [data, searchQuery]);

    const itemsPerPage = 10;
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentItems = filteredData.slice(startIndex, endIndex);

    return (
        <div>
            <table className="table-auto w-full">
                <thead>
                    <tr className="px-2 bg-orange-light">
                        <th className="py-2">Numéro</th>
                        <th className="px-4 py-2">Nom</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, i) => (
                        <CardCategorie key={i} i={i + 1} item={item} />
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <div className="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
                    <span className="block">
                        Page {currentPage} sur {totalPages}
                    </span>
                    <div className="space-x-1">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            title="previous"
                            type="button"
                            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow bg-orange-dark"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                stroke="#fff"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4"
                            >
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button
                            title="next"
                            type="button"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow bg-orange-dark"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                stroke="#fff"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-4"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md focus:outline-none"
                >
                    Précédent
                </button>
                <span>
                    Page {currentPage} sur {totalPages}
                </span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md focus:outline-none"
                >
                    Suivant
                </button> */}
            </div>
        </div>
    );
};

export default ListCategorie;
