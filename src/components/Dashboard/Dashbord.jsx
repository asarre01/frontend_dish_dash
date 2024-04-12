import React from "react";

function Dashbord() {
    return (
        <section className=" w-full ">
            <div className=" w-full border-b-2 border-orange-dark pb-2">
                <h1 className=" text-3xl font-bold text-orange-dark tracking-widest">
                    DashBoard
                </h1>
            </div>
            <div className=" px-4 py-10 lg:grid grid-cols-4 flex flex-wrap justify-center items-center gap-4">
                <div className=" py-10 rounded-lg  bg-green-dark text-center text-xl font-bold text-white">
                    <h1>Total Vendu</h1>
                    <h1 className="text-4xl">120 250 XOF</h1>
                </div>
                <div className=" py-10 rounded-lg  bg-orange-dark text-center text-xl font-bold text-white">
                    <h1>Commandes en cours</h1>
                    <h1 className="text-4xl">12</h1>
                </div>
            </div>
        </section>
    );
}

export default Dashbord;
