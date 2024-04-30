import React, { useState } from "react";
import ListePlats from "../../components/card/Plats/ListePlats";
import ListeCategories from "../../components/card/Catégories/ListeCategories";
import Hero from "../../components/header/Hero";
function Home() {
    const [selectCat, setSelectCat] = useState(null);
    return (
        <div>
            <Hero></Hero>
            <ListeCategories setSelectCat={setSelectCat}></ListeCategories>
            <ListePlats selectCat={selectCat}></ListePlats>
        </div>
    );
}

export default Home;
