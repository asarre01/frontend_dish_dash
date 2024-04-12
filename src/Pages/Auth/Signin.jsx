import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import { register } from "../../Services/client/auth";
import Message from "../../components/error/Message";

function Signin() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [succes, setSuccess] = useState(false);
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        tel: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const [msg, setMsg] = useState({
        nom: "",
        prenom: "",
        tel: "",
        email: "",
        password: "",
        cpassword: "",
    });

    function areFieldsNonNull(obj) {
        let newMsg = { ...msg };

        Object.keys(obj).forEach((key) => {
            if (obj[key] === null || obj[key] === "") {
                if (newMsg[key] === "") {
                    newMsg = { ...newMsg, [key]: "Champ obligatoire!" };
                }
            }
        });

        setMsg(newMsg);

        return Object.values(obj).every(
            (value) => value !== null && value !== ""
        );
    }

    function validatePhoneNumber(phoneNumber) {
        // Utiliser une expression régulière pour vérifier si le numéro de téléphone correspond au format international sénégalais
        const senegalPhoneNumberRegex = /^(7[05678]\d{7})$/;

        if (senegalPhoneNumberRegex.test(phoneNumber)) {
            // Le numéro de téléphone est valide
            return true;
        } else {
            // Le numéro de téléphone n'est pas valide
            return false;
        }
    }

    function validatePassword(password, confirmPassword) {
        if (password !== confirmPassword) {
            setMsg({
                ...msg,
                cpassword: "Les mots de passe ne correspondent pas!",
            });
            return false;
        }
        return true;
    }

    function validateData(formData) {
        let isOk = true;
        if (!areFieldsNonNull(formData)) {
            isOk = false;
        }

        if (!validator.isEmail(formData.email)) {
            setFormData({
                ...formData,
                email: "",
                password: "",
                cpassword: "",
            });
            setMsg((prevMsg) => ({
                ...prevMsg,
                email: "Veuillez entrer une adresse e-mail valide.",
            }));

            isOk = false;
        }

        if (!validatePhoneNumber(formData.tel)) {
            setFormData({
                ...formData,
                tel: "",
                password: "",
                cpassword: "",
            });
            setMsg((prevMsg) => ({
                ...prevMsg,
                tel: "Veuillez entrer un numéro de téléphone valide.",
            }));

            isOk = false;
        }
        if (!validatePassword(formData.password, formData.cpassword)) {
            setFormData({
                ...formData,
                password: "",
                cpassword: "",
            });
            isOk = false;
        }

        return isOk;
    }

    const signin = async (e) => {
        e.preventDefault();
        if (!validateData(formData)) {
            return false;
        } else {
            try {
                const response = await register(formData);
                if (response.status === 201) {
                    setMessage(response.data.message);
                    setSuccess(true);
                    setShow(true);
                    navigate("/login");
                    setFormData({
                        nom: "",
                        prenom: "",
                        tel: "",
                        email: "",
                        password: "",
                        cpassword: "",
                    });
                } else if (response.status === 400) {
                    setMessage(response.data.message);
                    setSuccess(false);
                    setShow(true);
                } else {
                    // Si ce n'est pas une erreur 400, afficher un message générique
                    setMessage("Une erreur s'est produite lors de l'inscription. Veuillez réessayer plus tard.");
                    setSuccess(false);
                    setShow(true);
                }
            } catch (error) {
                // // Gérer les autres erreurs, si nécessaire
                // console.error(
                //     "Une erreur s'est produite lors de l'inscription:",
                //     error
                // );
            }
        }
    };
    
    

    useEffect(() => {
        //console.log(msg);
    }, [msg]);

    return (
        <section className=" h-screen w-screen overflow-hidden flex justify-center  items-center">
            <div className="flex flex-col min-w-xl p-6 border border-orange-dark rounded-md sm:p-10 bg-light dark:bg-dark dark:text-light text-dark max-md:border-none">
                <div className="mb-8 text-left">
                    <h1 className="my-3 text-5xl font-bold">S'inscrire</h1>
                    <p className="text-sm text-orange-light hover:text-orange-dark">
                        Pour accéder à votre compte, veuillez vous connecter.
                    </p>
                </div>
                <Message show={show} success={succes} msg={message} setShow={setShow}/>
                <form className="min-w-xl space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="nom" className="block mb-2 text-sm">
                                Nom
                            </label>
                            <input
                                type="text"
                                name="nom"
                                id="nom"
                                placeholder="Leroy"
                                value={formData.nom}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        nom: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                            {msg.nom !== "" && formData.nom === "" && (
                                <p className="text-red-500">{msg.nom}</p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="prenom"
                                className="block mb-2 text-sm"
                            >
                                Prénom
                            </label>
                            <input
                                type="text"
                                name="prenom"
                                id="prenom"
                                placeholder="Leroy"
                                value={formData.prenom}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        prenom: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                            {msg.prenom !== "" && formData.prenom === "" && (
                                <p className="text-red-500">{msg.prenom}</p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="leroy@jenkins.com"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                            {msg.email !== "" && formData.email === "" && (
                                <p className="text-red-500">{msg.email}</p>
                            )}
                        </div>
                        <div>
                            <label htmlFor="tel" className="block mb-2 text-sm">
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="771234567"
                                value={formData.tel}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        tel: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                            {msg.tel !== "" && formData.tel === "" && (
                                <p className="text-red-500">{msg.tel}</p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm"
                            >
                                Mot de Passe
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        password: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                            {msg.password !== "" &&
                                formData.password === "" && (
                                    <p className="text-red-500">
                                        {msg.password}
                                    </p>
                                )}
                        </div>
                        <div>
                            <label
                                htmlFor="cpassword"
                                className="block mb-2 text-sm"
                            >
                                Confirmation Mot de Passe
                            </label>
                            <input
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                placeholder="********"
                                value={formData.cpassword}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        cpassword: e.target.value,
                                    })
                                }
                                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-light dark:bg-light text-dark"
                            />
                            {msg.cpassword !== "" &&
                                formData.cpassword === "" && (
                                    <p className="text-red-500">
                                        {msg.cpassword}
                                    </p>
                                )}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button
                                type="button"
                                className="w-full px-8 py-3 font-bold rounded-lg bg-orange-dark text-light"
                                onClick={signin}
                            >
                                Valider
                            </button>
                        </div>
                        <p className="px-6 text-sm text-center text-orange-light hover:text-orange-dark">
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
