import React from "react";
import {FaApple} from "react-icons/fa"

const Article = () => {
    return (
        <section className="grid md:grid-cols-2">
            <div className="m-5 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/ipad-pro/promo_ipadpro_avail__s271j89g8kii_small_2x.jpg" alt="" />

                <div className="flex flex-col absolute top-1 text-white w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl">iPad Pro</h1>
                    <p className="text-sm font-semibold md:text-lg">Unbelievably thin. Incredibly powerful.</p>

                    <div className="flex gap-5 mt-2">
                        <button className="text-sm font-bold bg-blue-500 p-1 rounded-2xl text-white md:text-xl md:p-2">Learn more</button>
                        <button className="text-sm w-20 font-bold border border-blue-500 rounded-2xl p-1 bg-white text-blue-500 md:text-xl md:p-2">Buy</button>
                    </div>
                </div>
            </div>

            <div className="m-5 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail__b9etp10v9tn6_small_2x.jpg" alt="" />
                <div className="flex flex-col absolute top-1 w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl flex items-center"><FaApple />Watch</h1>
                    <p className="text-xs font-semibold md:text-sm">SERIES 10</p>
                    <p className="text-sm font-semibold md:text-lg">Thinstant classic.</p>

                    <div className="flex gap-5 mt-2">
                        <button className="text-sm font-bold bg-blue-500 p-1 rounded-2xl text-white md:text-xl md:p-2">Learn more</button>
                        <button className="text-sm font-bold border border-blue-500 rounded-2xl p-1 bg-white text-blue-500 md:text-xl md:p-2">Buy</button>
                    </div>
                </div>
            </div>

            <div className="m-5 relative">
                <img className="h-full" src="https://www.apple.com/in/education/mac/images/overview/hero/hero_dsb1__dagkm4t9ni82_medium_2x.jpg" alt="" />
                <div className="absolute bottom-5 w-full text-center">
                    <button className="text-sm font-bold bg-blue-500 p-1 rounded-2xl text-white md:text-xl md:p-2">Learn more</button>


                </div>

            </div>

            <div className="m-5 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_small_2x.jpg" alt="" />

                <div className="flex flex-col absolute bottom-5 text-white w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl">AirPods 4</h1>
                    <p className="text-xs font-semibold md:text-lg">Iconic. Now supersonic.</p>
                    <p className="text-sm font-semibold md:text-lg">Available with Active Noise Cancellation.</p>

                    <div className="flex gap-5 mt-2">
                        <button className="text-sm font-bold bg-blue-500 p-1 rounded-2xl text-white md:text-xl md:p-2">Learn more</button>
                        <button className="text-sm font-bold border border-blue-500 rounded-2xl p-1 bg-white text-blue-500 md:text-xl md:p-2">Buy</button>
                    </div>
                </div>

            </div>

            <div className="m-5 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_medium_2x.jpg" alt="" />

                <div className="flex flex-col absolute top-5 text-white w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl">MacBook Pro</h1>
                    <p className="text-xs font-semibold md:text-lg">A work of smart.</p>

                    <div className="flex gap-5 mt-2">
                        <button className="text-sm font-bold bg-blue-500 p-1 rounded-2xl text-white md:text-xl md:p-2">Learn more</button>
                        <button className="text-sm font-bold border border-blue-500 rounded-2xl p-1 bg-white text-blue-500 md:text-xl md:p-2">Buy</button>
                    </div>
                </div>

            </div>

            <div className="m-5 relative">
                <img src="https://www.apple.com/v/home/cf/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg" alt="" />

                <div className="flex flex-col absolute top-5  w-full items-center">
                    <h1 className="text-xl font-bold md:text-4xl flex items-center"><FaApple />Trade In</h1>
                    <p className="text-xs font-semibold md:text-lg">Upgrade and save. It's that easy.</p>

                    <div className="flex mt-2">
                        <button className="text-sm font-bold bg-blue-500 p-1 rounded-2xl text-white md:text-xl md:p-2">Get your estimate</button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Article;