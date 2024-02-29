import React, { useState } from "react";
import Catégorie from "./Catégorie";

function ListeCategories() {
    const [id, setId] = useState(0);

    let cat = [""];
    for (let i = 0; i < 4; i++) {
        cat.push(<Catégorie key={i} k={id} _id={i} setId={setId} />);
    }
    return (
        <section className=" py-8 container mx-auto dark:text-light border-t border-orange-dark">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="w-full text-4xl text-center font-bold max-lg:text-lg mb-10">
                    Nos Menus
                </div>
            </div>
            <div className=" flex flex-wrap gap-4 items-center ">{cat} </div>
        </section>
    );
}

export default ListeCategories;
