import React from "react";

function Catégorie() {
    return (
        <div
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            }}
            className="max-w-64 rounded-md dark:bg-transparent  dark:text-light cursor-pointer max-md:w-40 m-2"
        >
            <img
                src="./assets/burger.png"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-64 max-md:h-32"
            />
            <div className="flex flex-col justify-between p-4 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold tracking max-md:text-sm text-center">
                        Hamburger La Reine
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Catégorie;
