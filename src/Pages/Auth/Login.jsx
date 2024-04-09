import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Message from "../../components/error/Message";
import { logUser } from "../../Services/client/auth";
import { useAuth } from "../../Context/AuthContext";
function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [succes, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await logUser(formData);
            if (response.status === 200) {
                setMessage(response.data.message);
                setSuccess(true);
                setShow(true);
                login(response.data);
                navigate("/");
                setFormData({
                    nom: "",
                    prenom: "",
                    tel: "",
                    email: "",
                    password: "",
                });
            } else {
                setMessage(
                    "Une erreur s'est produite lors de l'inscription. Veuillez réessayer plus tard."
                );
                setSuccess(false);
                setShow(true);
            }
        } catch (error) {
            // Gérer les autres erreurs, si nécessaire
            console.error(
                "Une erreur s'est produite lors de l'inscription:",
                error
            );
        }
    };

    return (
        <section className=" h-screen w-screen overflow-hidden flex justify-center  items-center">
            <div className="flex flex-col min-w-xl p-6 border border-orange-dark rounded-md sm:p-10 bg-light dark:bg-dark dark:text-light text-dark max-md:border-none">
                <div className="mb-8 text-left">
                    <h1 className="my-3 text-5xl font-bold">S'identifier</h1>
                    <p className="text-sm text-orange-light">
                        Pour accéder à votre compte, veuillez vous connecter.
                    </p>
                </div>
                <Message show={show} success={succes} msg={message} />
                <form  className="min-w-xl space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="login"
                                className="block mb-2 text-sm"
                            >
                                Login
                            </label>
                            <input
                                type="text"
                                name="login"
                                id="login"
                                placeholder="Email - Tel"
                                value={formData.login}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        login: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">
                                    Mot de passe
                                </label>
                                {/* <Link
                                    href="#"
                                    className="text-xs text-orange-light"
                                >
                                    Mot de passe oublié?
                                </Link> */}
                            </div>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="*****"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                type="button"
                                className="w-full px-8 py-3 font-bold rounded-lg bg-orange-dark text-light"
                                onClick={handleLogin}
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
