import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useToys from '../../../hooks/useToys';

const ToyDetails = () => {
    const { toyId } = useParams();
    const { toys } = useToys();
    const [click, setClick] = useState('information');
    const toy = toys.filter(toy => (toy._id) == (toyId));
    console.log(toy[0]);


    return (
        <div className="container mx-auto p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                <div className="bg-colorToys py-20 px-24 ">
                    <img src={toy[0]?.img} className="mx-auto w-full " alt="" />
                </div>
                <div>
                    <h1 className="font-rubik text-2xl text-black-700 font-bold mb-2">{toy[0]?.name}</h1>
                    <h1 className="font-fredoka text-3xl text-colorPink mb-2 ">${toy[0]?.price}</h1>
                    <p>{toy[0]?.review}</p>

                    <div>
                        <hr className=" mt-8" />
                        <div className="flex items-center justify-between p-8 ">
                            <p className="font-fredoka text-colorGray">Free Shipping</p>
                            <p className="font-fredoka text-colorGray">Support 24/7</p>
                            <p className="font-fredoka text-colorGray">Money Return</p>
                        </div>
                        <hr className="" />
                    </div>

                    <div className="my-8">
                        <p className="font-rubik text-colorGray text-justify leading-8">{toy[0]?.shortDesc}</p>
                    </div>

                    <div>
                        <Link to={`/order/${toy[0]?._id}`}><button
                            className="bg-colorPink hover:bg-colorBlue text-white hover:text-colorGray font-bold  my-4 mb-12 rounded-full py-4 px-16  focus:outline-none focus:shadow-outline  transition ease-in-out duration-700 font-rubik"
                            type="submit">
                            Buy Now
                        </button></Link>
                    </div>

                    <div>
                        <p className="font-rubik text-colorGray text-start font-bold">SKU : <span className="text-gray-400">{toy[0]?.sku}</span></p>
                        <p className="font-rubik text-colorGray text-start font-bold">Catagories : <span className="text-gray-400">Toys</span></p>
                        <p className="font-rubik text-colorGray text-start font-bold">Tags : <span className="text-gray-400">Toys</span></p>
                        <p className="font-rubik text-colorGray text-start font-bold">Share : <span className="text-gray-400">{toy[0]?.sku}</span></p>

                    </div>
                </div>
            </div>

            <div className="mt-28">
                <div className="w-1/3 mx-auto">
                    <button className="bg-white rounded px-6 py-4 hover:bg-colorPink text-colorGray hover:text-white transform transition duration 700 focus:bg-colorPink focus:text-white font-rubik " onClick={() => setClick('information')}>
                        <p className="  font-fredoka text-center inline-block mx-6">Information</p>
                    </button>
                    <button className="bg-white rounded px-6 py-4 hover:bg-colorPink text-colorGray hover:text-white  hover:text-white transform transition duration 700 focus:bg-colorPink focus:text-white font-rubik " onClick={() => setClick("review")}>
                        <p className=" text-center font-fredoka text-center inline-block mx-6">Information</p>
                    </button>
                </div>

                <div className={`${click === 'information' ? 'block' : 'hidden'} border-4 border-colorLightGray p-12`}>
                    <p className="font-rubik text-colorGray text-justify leading-8">{toy[0]?.longDescOne}
                        <br />
                        <br />

                        {toy[0]?.longDescTwo}</p>
                </div>
                <div className={`${click === 'review' ? 'block' : 'hidden'} border-4 border-colorLightGray p-12`}>
                    <p className="font-rubik text-colorGray text-justify leading-8">{toy[0]?.longDescOne}</p>


                </div>
            </div>

        </div>
    );
};

export default ToyDetails;