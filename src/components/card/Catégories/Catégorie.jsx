import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

function Catégorie({ k, _id, setId }) {
    const pwd = (n) => {
        setId(n);
    };
    let bg = "text-dark";
    let button = (
        <IoIosArrowDroprightCircle
            className={`mx-auto text-4xl text-orange-dark`}
        />
    );
    if (_id === k) {
        bg = "bg-orange-dark text-light";
        button = (
            <IoIosArrowDropdown className=" text-4xl text-light mx-auto" />
        );
    }

    return (
        <div
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            }}
            className={` ${bg} mx-auto rounded-full pl-3 pr-2 py-1  dark:text-light hover:bg-orange-dark hover:text-light ease-linear transition-all duration-100 cursor-pointer`}
            onClick={pwd.bind(null, _id)}
        >
            <div className=" min-w-32 flex items-center justify-center">
                <h1 className="w-full font-bold">Hamburger</h1>
                {button}
            </div>
        </div>
    );
}

export default Catégorie;
