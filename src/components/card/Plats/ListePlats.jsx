import React from "react";
import Plat from "./Plat";

function ListePlats() {
    return (
        <div className=" max-md:p-2 p-4 grid grid-cols-4 gap-4 max-xs:grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-3 max-lg:grid-cols-3  place-items-center xl:container mx-auto ">
            <Plat key={1}></Plat>
            <Plat key={12}></Plat>
            <Plat key={12}></Plat>
            <Plat key={13}></Plat>
            <Plat key={14}></Plat>
            <Plat key={15}></Plat>
            <Plat key={16}></Plat>
            <Plat key={17}></Plat>
        </div>
    );
}

export default ListePlats;
