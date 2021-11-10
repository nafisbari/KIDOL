import React from 'react';

import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className=' bg-white overflow-hidden py-4  md:pb-12 relative '>
            <div className=" mx-auto container grid grid-cols-3 items-center">
                <div>
                    <img src="https://i.ibb.co/b1LPx8R/logo-header.png" alt="" />

                </div>
                <div className="hidden lg:block">
                    <nav className="flex items-center justify-center">
                        <NavLink to='/home' className="font-medium text-gray-500 hover:text-colorPink mx-4 text-2xl font-rubik text-colorGray">Home</NavLink>
                        <NavLink to='/home' className="font-medium text-gray-500 hover:text-colorPink mx-4 text-2xl font-rubik text-colorGray">About</NavLink>
                        <NavLink to='/home' className="font-medium text-gray-500 hover:text-colorPink mx-4  text-2xl font-rubik text-colorGray">Shop</NavLink>
                        <NavLink to='/home' className="font-medium text-gray-500 hover:text-colorPink mx-4 text-2xl font-rubik text-colorGray">Contact</NavLink>

                    </nav>

                </div>
                <div className="hidden lg:block">
                    <NavLink to='/login' className="font-medium text-gray-500 hover:text-colorPink mx-4  text-2xl font-rubik text-colorGray ">Login</NavLink>
                </div>
            </div>


        </div>




    );
};

export default Header;