import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BiSolidDish } from "react-icons/bi";
import { useState, useEffect } from "react";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext";

function Header() {
    const { IsLogin, logout } = useAuth();
    // State pour la visibilité du menu utilisateur
    const [userMenu, setUserMenu] = useState("hidden");

    // State pour la visibilité du grand menu (mobile)
    const [showMenu, setShowMenu] = useState("hidden");

    // Fonction pour basculer la visibilité du menu utilisateur
    const showUserMenu = () => {
        setUserMenu((prevUserMenu) =>
            prevUserMenu === "hidden" ? "" : "hidden"
        );
    };

    // Fonction pour basculer la visibilité du grand menu (mobile)
    const showBigMenu = () => {
        setShowMenu((prevMenu) => (prevMenu === "hidden" ? "" : "hidden"));
        document.body.classList.toggle("overflow-hidden");
    };

    // Effet initial pour initialiser les états
    useEffect(() => {
        setShowMenu("hidden");
        setUserMenu("hidden");
    }, []);

    // State pour le thème (light/dark)
    const [theme, setTheme] = useState("light");

    // Effet pour appliquer le thème à la racine du document
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    // Fonction pour basculer entre les thèmes
    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
        console.log(theme);
    };

    // Chemin du logo en fonction du thème actuel
    const cheminLogo =
        theme === "dark"
            ? "./assets/Dish Dash Logo - white.png"
            : "./assets/Dish Dash Logo - dark.png";

    return (
        <header className="xl:container mx-auto p-4 flex justify-between items-center text-dark dark:text-light bg-light dark:bg-dark max-md:justify-between">
            {/* Logo */}
            <div className="logo">
                <img src={cheminLogo} alt="logo" width={50} />
            </div>

            {/* Bouton hamburger pour le grand menu (mobile) */}
            <div>
                <FaHamburger
                    className="text-orange-dark self-center text-2xl cursor-pointer md:hidden"
                    onClick={showBigMenu}
                />
            </div>

            {/* Grand menu (mobile) */}
            <div className={`max-md:${showMenu}  bg-light dark:bg-dark z-10`}>
                <nav>
                    <ul className="flex items-center gap-8 font-bold relative max-md:flex-col max-md:absolute max-md:h-screen max-md:w-screen max-md:top-0 max-md:left-0 max-md:overflow-hidden max-md:bg-white max-md:dark:bg-black max-md:items-center justify-center">
                        {/* Bouton pour fermer le grand menu (mobile) */}
                        <div className="md:hidden absolute top-4 right-4">
                            <span
                                className="text-2xl font-extrabold font-mono text-orange-dark "
                                onClick={showBigMenu}
                            >
                                <img
                                    src="./assets/x-mark.png"
                                    className="size-6"
                                    alt=""
                                />
                            </span>
                        </div>

                        {/* Liens de navigation */}
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/menuDuJour">Menu du jour</Link>
                        </li>
                        <li>
                            <Link to="/aPropos">A propos</Link>
                        </li>

                        {/* Icône de panier */}
                        <li className="text-orange-dark text-3xl">
                            <Link to="/panier" className="flex items-center">
                                <BiSolidDish />
                                <span className="ml-2 md:hidden text-dark dark:text-light text-lg">
                                    Mon dish
                                </span>
                            </Link>
                        </li>

                        {/* Icône utilisateur avec menu déroulant */}
                        <li
                            className="text-orange-dark text-2xl"
                            onClick={showUserMenu}
                        >
                            <div className="flex items-center">
                                <FaUserCircle className="cursor-pointer" />
                                <span className="ml-2 md:hidden text-dark dark:text-light text-lg">
                                    Mon Compte
                                </span>
                            </div>
                            <ul
                                className={`absolute ${userMenu} mt-4 text-dark text-sm dark:text-light cursor-pointer`}
                            >
                                <li
                                    className="flex items-center "
                                    onClick={changeTheme}
                                >
                                    Mode{" "}
                                    {theme === "light" ? (
                                        <MdOutlineWbSunny className="ml-1" />
                                    ) : (
                                        <IoMoonOutline className="ml-1" />
                                    )}
                                </li>

                                {IsLogin ? (
                                    <li
                                        onClick={() => {
                                            logout();
                                        }}
                                    >
                                        <Link>Déconnexion</Link>
                                    </li>
                                ) : (
                                    <>
                                        {" "}
                                        <li>
                                            <Link to="/auth/signin">S'incrire</Link>
                                        </li>
                                        <li>
                                            <Link to="/auth/login">
                                                S'identifier
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
