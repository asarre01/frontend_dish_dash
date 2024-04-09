import React from "react";
import Header from "../../components/header/Header";
import ListePlats from "../../components/card/Plats/ListePlats";
import ListeCategories from "../../components/card/Catégories/ListeCategories";
import Hero from "../../components/header/Hero";
import { useAuth } from "../../Context/AuthContext";
function Home() {
    const { isLoggedIn } = useAuth();
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            {isLoggedIn ? (<>
            <ListeCategories></ListeCategories>
            <ListePlats></ListePlats></>) : (<>Connectez vous</>)}
        </div>
    );
}

export default Home;
