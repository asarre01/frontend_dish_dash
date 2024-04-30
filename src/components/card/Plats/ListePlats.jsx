import React, { useState, useEffect } from "react";
import Plat from "./Plat";
import { getPlatsByCategorie } from "../../../Services/admin/PlatService";

function ListePlats({ selectCat }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (selectCat !== null) {
                    const response = await getPlatsByCategorie(selectCat);
                    console.log(selectCat);
                    setData(response);
                    console.log(response);
                }
            } catch (error) {
                console.error(
                    "Une erreur s'est produite lors de la récupération des catégories :",
                    error
                );
            }
        };

        fetchData();
    }, [selectCat]);
    return (
        <div className=" max-md:p-2 p-4 grid grid-cols-4 gap-4 max-xs:grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-3  place-items-center xl:container mx-auto ">
            {data.map((item, i) => (
                <Plat key={item._id} item={item} />
            ))}
        </div>
    );
}

export default ListePlats;
