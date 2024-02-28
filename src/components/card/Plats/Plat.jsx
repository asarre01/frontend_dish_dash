import React from "react";
import { IoAddCircle } from "react-icons/io5";

function Plat() {
    return (
        <div
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            }}
            className="max-w-64 rounded-md dark:bg-transparent  dark:text-light cursor-pointer max-md:w-40"
        >
            <img
                src="./assets/burger.png"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-64 max-md:h-32"
            />
            <div className="flex flex-col justify-between p-4 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold tracking max-md:text-sm">
                        Hamburger La Reine
                    </h2>
                    <div className="flex items-center justify-between tracking-wide">
                        <div className="font-bold max-md:text-xs">
                            <span>130 000</span>
                            <span className="text-orange-dark"> XOF</span>
                        </div>
                        <div>
                            <IoAddCircle className="text-orange-dark text-5xl max-md:text-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plat;
