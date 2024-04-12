import React, { useState, useEffect } from "react";
import Catégorie from "./Catégorie";
import { getAllCategories } from "../../../Services/admin/CategorieService";

function ListeCategories() {
    const [data, setData] = useState([]);
    const [id, setId] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllCategories();
                setData(response);
                if (response.length > 0) {
                    setId(response[0]._id);
                }
            } catch (error) {
                console.error(
                    "Une erreur s'est produite lors de la récupération des catégories :",
                    error
                );
            }
        };

        fetchData();
    }, []);

    return (
        <section className=" py-8 container mx-auto dark:text-light border-t border-orange-dark">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="w-full text-4xl text-center font-bold max-lg:text-lg mb-10">
                    Nos Menus
                </div>
            </div>
            <div className=" flex flex-wrap gap-4 items-center ">
                {data.map((categorie) => (
                    <Catégorie key={categorie._id} categorie={categorie} k={id} _id={categorie._id} setId={setId} />
                ))}
            </div>
        </section>
    );
}

export default ListeCategories;
