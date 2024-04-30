import React, { useState } from "react";
import ListPlat from "../cardAdmin/Plat/ListPlat";
import NavBarPlat from "../header/NavBarPlat";

function GestionPlat() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <section className="w-full min-h-screen container mx-auto lg:px-24 py-12">
            <NavBarPlat searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ListPlat searchQuery={searchQuery} />
        </section>
    );
}

export default GestionPlat;
