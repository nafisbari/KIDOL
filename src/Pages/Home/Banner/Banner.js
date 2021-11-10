import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="">
            <div className="background-header-img">
                <img src="https://i.ibb.co/vVcDb2V/curve-bg.png" alt="" />
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-12">
                    <div>
                        
                        
                    </div>

                    <div className="mt-36 pr-12">
                        <h4 className="font-fredoka font-bold text-colorGray text-xl md:text-3xl lg:text-3xl mb-12"> New Arrivals</h4>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-fredoka font-bold text-colorGray ">
                            Best kids Store
                            <br />& Online Shop
                        </h1>
                        <button className="bg-white text-colorGray text-lg font-bold px-16 py-4 rounded-full text-white font-fredoka hover:bg-colorBlue hover:text-white mt-12 transition ease-in-out duration-700"> Discover Now</button>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 px-8 py-8 lg:px-12 lg:py-8 mx-auto">
                <div><img src="https://i.ibb.co/ZTQJcqh/logo-1.png " alt="" /></div>
                <div className="ml-2"><img src="https://i.ibb.co/VpkwQyL/logo-2.png " alt="" /></div>
                <div className="hidden md:block ml-2"><img src="https://i.ibb.co/ByR20NC/logo-3.png " alt="" /></div>
                <div className="hidden lg:block ml-2"><img src="https://i.ibb.co/GvRtZBW/logo-4.png " alt="" /></div>
                <div className="hidden xl:block ml-4"><img src="https://i.ibb.co/ZYp1Gcg/logo-5.png " alt="" /></div>
                <div className="hidden xl:block ml-8"><img src="https://i.ibb.co/j3J0mcp/logo-6.png " alt="" /></div>
            </div>
            <hr />


        </div>

    );
};

export default Banner;