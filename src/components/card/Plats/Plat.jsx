import React from "react";
import { IoAddCircle } from "react-icons/io5";

function Plat() {
    return (
        <div
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
            }}
            className="max-w-64 rounded-md dark:bg-transparent bg-blend-multiply dark:text-light cursor-pointer m-4"
        >
            <img
                src="./assets/burger.png"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-64"
            />
            <div className="flex flex-col justify-between p-4 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-bold tracking">
                        Hamburger Royal
                    </h2>
                    <div className="flex items-center justify-between tracking-wide">
                        <div className="font-bold">
                            <span>3000</span>
                            <span className="text-orange-dark"> XOF</span>
                        </div>
                        <div>
                            <IoAddCircle className="text-orange-dark text-5xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plat;
