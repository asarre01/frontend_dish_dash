import React from "react";

function Hero() {
    return (
        <div className="bg-light relative dark:bg-dark  container mx-auto p-2 max-lg:p-1">
            <section className="py-4 lg:min-h-screen max-md:min-h-96 flex  items-center  overflow-hidden  max-lg:flex-col">
                <div className="text-7xl font-bold dark:text-light max-sm:text-3xl max-lg:block max-lg:text-center hidden">
                    <h1 className="text-orange-dark text-8xl max-sm:text-5xl">
                        Bienvenue
                    </h1>
                    <h1>Dans votre e-resto</h1>
                </div>
                
                <img
                    src="./assets/hero.png"
                    alt=" by Fakurian Design"
                    className="absolute right-0 h-full w-full object-contain object-right  max-lg:object-center max-lg:relative lg:w-[70%]"
                />
                <div className="relative w-full ">
                    <div className=" text-7xl font-bold dark:text-light max-sm:text-3xl max-lg:hidden">
                        <h1 className="text-orange-dark text-8xl max-sm:text-5xl">
                            Bienvenue
                        </h1>
                        <h1>Dans votre e-resto</h1>
                    </div>
                    <div className="dark:text-light max-lg:text-center">
                        <h1 className="text-3xl font-bold max-sm:text-xl">
                            Menu Welcome 2 Dish Dash
                        </h1>
                        <p className=" w-96 max-lg:w-full max-sm:text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatum id libero expedita praesentium
                            nesciunt dolore, consequuntur, hic consequatur eius
                            corrupti, dicta soluta vero?
                        </p>
                        <button className="max-lg:w-full mt-8 inline-block rounded-lg bg-green-dark px-8 py-3 text-center text-lg font-bold uppercase  text-light outline-none max-sm:text-sm">
                            Commander
                        </button>
                    </div>
                </div>
                
            </section>
        </div>
    );
}

export default Hero;
