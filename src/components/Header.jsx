import React from "react";

const Header = () => {

    return (

        <header className="relative">

            <img className="h-full" src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_bts_2025__kjxalx8t7ia2_medium_2x.jpg" alt="" />

            <div className="flex flex-col gap-1 items-center w-full absolute top-1 p-2 md:top-10 md:gap-2">

                <h1 className="bg-blue-500 text-white w-20 p-2 rounded-3xl font-bold text-sm md:text-3xl md:p-2 md:w-44">Buy Mac or iPad for college</h1>
                <h2 className="bg-blue-500 text-white w-48 p-1 text-center rounded-3xl font-semibold text-xs  md:text-xl md:w-72 md:p-2">With education savings</h2>
                <h1 className="bg-blue-500 text-white w-32 text-center p-2 rounded-3xl font-bold text-sm md:text-3xl md:w-52 md:p-2">Choose Airpods or an eligible accessories</h1>
                <button className="border border-blue-500 p-1 rounded-2xl text-blue-500 bg-white w-16 md:text-lg font-semibold">Shop</button>

            </div>

        </header>
    )

}

export default Header;