import React from "react";
import { GoHomeFill } from "react-icons/go";
function HeaderAdmin() {
    return (
        <div className=" w-10 h-screen overflow-hidden fixed border border-orange-dark p-2 hover:w-40">
            <div className="absolute font-semibold flex flex-nowrap ">
                <GoHomeFill className="  text-orange-dark text-2xl" /> Accueil
            </div>
            
        </div>
        
    );
}

export default HeaderAdmin;
