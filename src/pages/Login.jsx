import React from "react";
import { Link } from "react-router-dom";
function Login() {
    return (
        <section className=" h-screen w-screen overflow-hidden grid grid-cols-2 max-md:block">
            <div className="max-md:hidden">
                <Link to="/">Home</Link>
            </div>
            <div className=" p-12 flex flex-col justify-center items-center w-full h-full">
                <div className="w-5/6 border-b-2 border-orange-dark pb-16">
                    <div className=" w-full mb-12">
                        <h1 className="font-bold text-4xl dark:text-light">
                            S'identifier
                        </h1>
                    </div>
                    <div className=" flex flex-col gap-8 w-full">
                        <div className="space-y-1 text-lg w-full">
                            <label
                                for="email"
                                className="block dark:text-light"
                            >
                                E-mail
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email"
                                className="w-full px-4 py-3 rounded-md border-2 border-orange-dark bg-transparent dark:text-light focus:border-orange-dark  focus:outline-none active:border-orange-dark"
                            />
                        </div>
                        <div className="space-y-1 text-lg w-full">
                            <label
                                for="email"
                                className="block dark:text-light"
                            >
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="****************"
                                className="w-full px-4 py-3 rounded-md border-2 border-orange-dark bg-transparent dark:text-light focus:border-orange-dark  focus:outline-none active:border-orange-dark"
                            />
                        </div>
                        <button className="block w-full p-3 text-center font-bold uppercase rounded-lg text-light dark:text-dark bg-dark dark:bg-light">
                            Connexion
                        </button>
                    </div>
                </div>
                <div className="text-dark  dark:text-light py-4">
                    <Link to="helpus" className="block text-center">
                        Mot de passe oublié?
                    </Link>
                    <Link to="/Signin" className="block text-center">
                        S'inscrire
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Login;
