import React from "react";
import Plat from "./Plat";

function ListePlats() {
    const plats = [];
    for (let i = 0; i < 10; i++) {
        plats.push(<Plat key={i} />);
    }

    return (
        <div className=" flex flex-wrap justify-start items-center container mx-auto max-md:justify-center">
            {plats}
        </div>
    );
}

export default ListePlats;
