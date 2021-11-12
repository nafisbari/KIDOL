import React from 'react';
import { Link } from 'react-router-dom';
import './toy.css'



const Toy = ({ toy }) => {
    const { name, img, price, shortDesc, review } = toy;
   
    return (
        <div>
            <div className="w-11/12 mx-auto   px-8 py-12 bg-colorToys h-full rounded">

                <div className="h-1/2 mb-8" >
                    <img src={img} className="mx-auto hover-img " alt="" />
                </div>

                <p> Rating: {review}</p>
                <Link to='/'><h3 className="text-left text-xl font-bold mt-4 font-rubik text-colorGray hover:text-colorPink transition ease-in-out duration-700">{name}</h3></Link>
                <h3 className="text-left text-lg font-medium mt-4 font-rubik text-colorGray">{shortDesc.slice(0, 50)}</h3>
                <p className="text-left text-lg font-bold mt-4 font-rubik text-colorGray">$ {price}</p>
                <button
                    className="bg-colorPink hover:bg-colorBlue text-white hover:text-colorGray font-bold py-2 px-4 my-4 mb-12 rounded-xl focus:outline-none focus:shadow-outline w-1/2 transition ease-in-out duration-700"
                    type="submit">
                    Buy Now
                </button>


            </div>

        </div>

    );
};

export default Toy;