import React from "react";

const Hero = () => {
    return (

        <section>

            <div className="relative my-10">
                <img src="https://www.apple.com/v/home/cf/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_medium_2x.jpg" alt="" />

                <div className="absolute top-1 flex flex-col w-full items-center md:top-20">
                    <h1 className="text-xl md:text-5xl font-bold p-1">iPhone</h1>
                    <p className="text-sm md:text-2xl font-semibold p-1">Meet the iPhone 16 family.</p>

                    <div className="flex gap-5 p-1">
                        <button className="bg-blue-500 text-white font-semibold p-1 rounded-2xl text-sm md:text-xl md:p-2">Learn more</button>
                        <button className="border-blue-500 border p-1 rounded-2xl text-blue-500 font-semibold text-sm bg-white md:text-xl md:p-2">Shop iPhone</button>
                    </div>

                    <p className="font-semibold text-sm text-pink-800 p-1 md:text-xl md:mt-5">Built for Apple Intelligence</p>

                </div>
            </div>

            <div className="relative">

                <img src="https://www.apple.com/v/home/cf/images/heroes/macbook-air/hero_macbook_air_avail__fpm99qgohx2e_medium_2x.jpg" alt="" />

                <div className="absolute top-1 flex flex-col w-full items-center md:top-20">
                    <h1 className="text-xl font-bold p-1 md:text-5xl">MacBook Air</h1>
                    <p className="text-sm font-semibold p-1 md:text-2xl">Sky blue colour.</p>
                    <p className="text-sm font-semibold p-1 md:text-2xl">Sky high performance with M4.</p>

                    <div className="flex gap-5 p-2">
                        <button className="bg-blue-500 text-white font-semibold p-1 rounded-xl text-sm md:text-xl md:p-2">Learn more</button>
                        <button className="border-blue-500 border p-1 rounded-2xl text-blue-500 font-semibold text-sm bg-white md:text-xl md:p-2">Shop iPhone</button>
                    </div>

                    <p className="font-semibold text-sm text-pink-800 p-2 mt-20 md:text-xl md:mt-5">Built for Apple Intelligence</p>
                </div>
            </div>

        </section>

    )
}

export default Hero;