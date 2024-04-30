import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { TbDoorExit } from "react-icons/tb";
import { ImBooks } from "react-icons/im";
import { FaUserPlus } from "react-icons/fa6";
import { GrCycle } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { GiPresent } from "react-icons/gi";
import { PiCookingPotFill } from "react-icons/pi";
import { useAuth } from "../../Context/AuthContext";
const HeaderAdmin = () => {
    const { logout } = useAuth();
    const menus = [
        { name: "Accueil", link: "/admin/", icon: IoHome },
        { name: "Gestion Catégories", link: "/admin/categorie", icon: ImBooks },
        {
            name: "Gestion Plats",
            link: "/admin/plat",
            icon: PiCookingPotFill,
        },
        // {
        //     name: "Gestion Achats Public",
        //     link: "/admin/achatPublic",
        //     icon: FaShoppingBasket,
        // },
        // {
        //     name: "Gestion Achats Client",
        //     link: "/admin/achatClient",
        //     icon: FaShoppingBasket,
        // },
        // {
        //     name: "Gestion Cadeaux Public",
        //     link: "/admin/cadeauxPublic",
        //     icon: GiPresent,
        // },
        // {
        //     name: "Gestion Cadeaux Client",
        //     link: "/admin/cadeauxClient",
        //     icon: GiPresent,
        // },
        // {
        //     name: "Categorie Blogs",
        //     link: "/admin/categorie-blogs",
        //     icon: BsCardChecklist,
        // },
        // {
        //     name: "Ajouter un admin",
        //     link: "/admin/ajouterAdmin",
        //     icon: FaUserPlus,
        //     margin: true,
        // },
        // { name: "Gestion admins", link: "/admin/list-admins", icon: FaUsers },
    ];
    const [open, setOpen] = useState(false);

    let navigate = useNavigate();
    return (
        <>
            <div
                className={`bg-orange-light min-h-screen ${
                    open ? "w-64" : "w-16"
                } duration-500 text-black-100 px-4`}
            >
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            onClick={() => (menu.active = true)}
                            className={`${menu?.margin && "mt-20"}
                            group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-orange-dark hover:text-white rounded-md`}
                        >
                            <div>
                                {React.createElement(menu?.icon, {
                                    size: "20",
                                })}
                            </div>
                            <h2
                                style={{ transitionDelay: `${i + 1}00ms` }}
                                className={`whitespace-pre duration-500 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                {menu.name}
                            </h2>
                            <h2
                                className={`${
                                    open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre
                                text-gray-900 rounded-md drop-shadow-lg px-0 py-0  w-0 overflow-hidden
                                group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                                group-hover:w-fit`}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>

                <div
                    className={`py-3 flex justify-end flex-col absolute bottom-12 ${
                        open ? "w-56" : "w-10 justify-center"
                    }`}
                >
                    <div
                        className="group flex  items-center text-sm  font-medium p-2 hover:bg-red-500 hover:text-white rounded-md relative"
                        onClick={() => {
                            logout();
                        }}
                    >
                        <div className="">
                            <TbDoorExit size={26} className="cursor-pointer" />
                        </div>
                        <h2
                            style={{ transitionDelay: `${4 + 300}ms` }}
                            className={`whitespace-pre duration-500 ${
                                !open &&
                                "opacity-0 translate-x-28 overflow-hidden "
                            }`}
                        >
                            Déconnexion
                        </h2>
                        <h2
                            className={`${
                                open && "hidden"
                            }  absolute left-48 bg-red-400 font-semibold whitespace-pre
                         text-white rounded-md drop-shadow-lg px-0 py-0  w-0 overflow-hidden
                         group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300
                         group-hover:w-fit`}
                        >
                            Déconnexion
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderAdmin;
