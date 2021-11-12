import React from 'react';
import './info.css'

const Info = () => {
    return (
        <div className="mt-28 container mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="w-11/12 mx-auto border-4 border-solid border-gray-200 hover:border-colorPink transition ease-in-out duration-700 px-8 py-4 background-image-1 ">
                    <img src="https://i.ibb.co/nkMNytm/free-shipping.png " alt="" className="mx-auto mt-8" />
                    <h2 className="text-2xl font-fredoka text-colorGray my-4">
                        Free Shipping
                    </h2>

                    <p className="text-md text-colorGray text-center mb-8">
                        Get "FREE Shipping" at checkout, and your order will arrive in 5-8 days.
                    </p>

                </div>
                <div className="w-11/12 mx-auto border-4 border-solid border-gray-200 hover:border-colorPink transition ease-in-out duration-700 px-8 py-4 background-image-2">
                    <img src="https://i.ibb.co/0Yt2whK/24x7.png " alt="" className="mx-auto mt-8" />
                    <h2 className="text-2xl font-fredoka text-colorGray my-4">
                        Support 24/7
                    </h2>
                    <p className="text-md text-colorGray text-center mb-8">
                        24x7 Website Support. Enjoy the security  around-the-clock, global support team.
                    </p>
                </div>
                <div className="w-11/12 mx-auto border-solid border-4 border-gray-200 hover:border-color3ink transition ease-in-out duration-700 px-8 py-4 background-image-3">
                    <img src="https://i.ibb.co/3kJnqrH/dollar.png" alt="" className="mx-auto mt-8" />
                    <h2 className="text-2xl font-fredoka text-colorGray my-4">
                        Money Return
                    </h2>

                    <p className="text-md text-colorGray text-center mb-8">
                        It's automatic and covers your purchase price plus original shippinge and there's no extra fee for coverage
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Info;