import React from "react";
import { Link } from "react-router-dom";
function Signin() {
    return (
        <section className=" h-screen w-screen overflow-hidden flex justify-center  items-center">
            <div className="flex flex-col min-w-xl p-6 border border-orange-dark rounded-md sm:p-10 bg-light dark:bg-dark dark:text-light text-dark max-md:border-none">
                <div className="mb-8 text-left">
                    <h1 className="my-3 text-5xl font-bold">S'inscrire</h1>
                    <p className="text-sm text-orange-light">
                        Pour accéder à votre compte, veuillez vous connecter.
                    </p>
                </div>
                <form novalidate="" action="" className="min-w-xl space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label for="nom" className="block mb-2 text-sm">
                                Nom
                            </label>
                            <input
                                type="text"
                                name="nom"
                                id="nom"
                                placeholder="Leroy"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                        </div>
                        <div>
                            <label for="prenom" className="block mb-2 text-sm">
                                Prénom
                            </label>
                            <input
                                type="text"
                                name="prenom"
                                id="prenom"
                                placeholder="Leroy"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="leroy@jenkins.com"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                        </div>
                        <div>
                            <label for="tel" className="block mb-2 text-sm">
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="771234567"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                        </div>
                        <div>
                            <label
                                for="password"
                                className="block mb-2 text-sm"
                            >
                                Mot de Passe
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                        </div>
                        <div>
                            <label
                                for="password"
                                className="block mb-2 text-sm"
                            >
                                Confirmation Mot de Passe
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                type="button"
                                className="w-full px-8 py-3 font-bold rounded-lg bg-orange-dark text-light"
                            >
                                Valider
                            </button>
                        </div>
                        <p className="px-6 text-sm text-center text-orange-light">
                            Vous n'avez pas encore de compte ?
                            <Link to={"/Login"} className=" text-orange-dark">
                                {" "}
                                <br />
                                Se connecter
                            </Link>
                            .
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Signin;
