import React, { useState } from "react";
import NavBarCat from "../header/NavBarCat";
import ListCategorie from "../cardAdmin/Categorie/ListCategorie";

function GestionCategories() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <section className="w-full min-h-screen container mx-auto lg:px-24 py-12">
            <NavBarCat searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ListCategorie searchQuery={searchQuery} />
        </section>
    );
}

export default GestionCategories;
