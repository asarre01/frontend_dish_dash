import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <section className=" h-screen w-screen overflow-hidden flex justify-center  items-center">
            <div className="flex flex-col min-w-xl p-6 border border-orange-dark rounded-md sm:p-10 bg-light dark:bg-dark dark:text-light text-dark max-md:border-none">
                <div className="mb-8 text-left">
                    <h1 className="my-3 text-5xl font-bold">S'identifier</h1>
                    <p className="text-sm text-orange-light">
                        Pour accéder à votre compte, veuillez vous connecter.
                    </p>
                </div>
                <form  className="min-w-xl space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email - Tel"
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">
                                    Mot de passe
                                </label>
                                <Link
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="text-xs text-orange-light"
                                >
                                    Mot de passe oublié?
                                </Link>
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
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
                                Se connecter
                            </button>
                        </div>
                        <p className="px-6 text-sm text-center text-orange-light">
                            Vous n'avez pas encore de compte ?
                            <Link to="/Signin" className=" text-orange-dark">
                                S'inscrire
                            </Link>
                            .
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
