import React from 'react';
import { Link } from 'react-router-dom';
import useToys from '../../../hooks/useToys';

const AllToys = () => {

    const { toys } = useToys();
    return (
        <div className="">
            <div className="bg-colorBlue ">
                <img src="https://i.ibb.co/vVcDb2V/curve-bg.png" alt="" />
                <div className="py-20">
                    <h1 className="text-7xl font-fredoka text-white text-center ">Shop</h1>
                    <p className="text-xl font-fredoka text-white  text-center my-4">
                        <Link to='/home' className="hover:text-colorPink"  >Home</Link> <span className="text-colorPink">/ All Products</span>
                    </p>
                </div>
            </div>
            <div className="mt-52 mb-40 container mx-auto  ">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12">
                    {
                        toys.map(toy =>
                            <div className="w-11/12 mx-auto   px-8 py-12 bg-colorToys h-full rounded">

                                <div className="h-1/2 mb-8" >
                                    <img src={toy.img} className="mx-auto hover-img " alt="" />
                                </div>

                                <div>
                                    <p> Rating: {toy.review}</p>
                                    <Link to='/'><h3 className="text-left text-xl font-bold mt-4 font-rubik text-colorGray hover:text-colorPink transition ease-in-out duration-700">{toy.name.slice(0, 20)}</h3></Link>
                                    <h3 className="text-left text-lg font-medium mt-4 font-rubik text-colorGray">{toy.shortDesc.slice(0, 50)}</h3>
                                    <p className="text-left text-lg font-bold mt-4 font-rubik text-colorGray">$ {toy.price}</p>
                                </div>
                                <Link to={`/toyDetails/${toy._id}`}><button
                                    className="bg-colorPink hover:bg-colorBlue text-white hover:text-colorGray font-bold py-2 px-4 my-4 mb-12 rounded-xl focus:outline-none focus:shadow-outline w-1/2 transition ease-in-out duration-700 font-bold font-rubik"
                                    type="submit">
                                    Buy Now
                                </button></Link>


                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllToys;