import React from 'react';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className=' bg-white overflow-hidden py-4  md:pb-12 relative '>
            <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <img src="https://i.ibb.co/b1LPx8R/logo-header.png" alt="" />
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-sm lg:flex-grow">
                        <NavLink to='/home' className=" block lg:inline-block font-medium text-gray-500 hover:text-colorPink mx-4 text-2xl font-rubik text-colorGray">Home</NavLink>
                        <NavLink to='/home' className=" block  lg:inline-block font-medium text-gray-500 hover:text-colorPink mx-4 text-2xl font-rubik text-colorGray">About</NavLink>
                        <NavLink to='/home' className=" block lg:inline-block font-medium text-gray-500 hover:text-colorPink mx-4  text-2xl font-rubik text-colorGray">Shop</NavLink>
                        <NavLink to='/contact' className=" block lg:inline-block font-medium text-gray-500 hover:text-colorPink mx-4 text-2xl font-rubik text-colorGray">Contact</NavLink>

                    </div>
                    <div>
                        {
                            user?.email ?
                                <><div className="inline-block leading-none flex items-center justify-end">
                                    <h2 className="ininle-block text-2xl text-colorGray font-fredoka mr-2">{user?.displayName}</h2>
                                    <button
                                        className=" inline-block bg-colorPink hover:bg-colorBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out duration-700"
                                        type="button" onClick={logout}>
                                        Log Out
                                    </button></div> </>
                                :
                                <NavLink to='/myAccount' className="inile-block font-medium text-gray-500 hover:text-colorPink mx-4  text-2xl font-rubik text-colorGray "><button
                                    className="inline-block bg-colorPink hover:bg-colorBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  transition ease-in-out duration-700"
                                    type="submit">
                                    Sign In
                                </button></NavLink>
                        }
                    </div>
                </div>
            </nav>


            {/* <div className=" mx-auto container grid grid-cols-3 items-center">
                <div>
                    <img src="https://i.ibb.co/b1LPx8R/logo-header.png" alt="" />

                </div>
                <div className="hidden lg:block">
                    <nav className="flex items-center justify-center">
                        <NavLink to='/home' className="font-medium text-gray-500 hover:text-colorPink mx-4 text-2xl font-rubik text-colorGray">Home</NavLink>
                        <NavLink to='/home' className="font-medium text-gray-500 hover:text-colorPink mx-4 text-2xl font-rubik text-colorGray">About</NavLink>
                        <NavLink to='/home' className="font-medium text-gray-500 hover:text-colorPink mx-4  text-2xl font-rubik text-colorGray">Shop</NavLink>
                        <NavLink to='/contact' className="font-medium text-gray-500 hover:text-colorPink mx-4 text-2xl font-rubik text-colorGray">Contact</NavLink>

                    </nav>

                </div>
                <div className="hidden lg:block text-right">
                    {
                        user?.email ?
                            <><div className="flex items-center justify-end">
                                <h2 className="text-2xl text-colorGray font-fredoka mr-2">{user?.displayName}</h2>
                                <button
                                    className="bg-colorPink hover:bg-colorBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out duration-700"
                                    type="button" onClick={logout}>
                                    Log Out
                                </button></div> </>
                            :
                            <NavLink to='/myAccount' className="font-medium text-gray-500 hover:text-colorPink mx-4  text-2xl font-rubik text-colorGray "><button
                                className="bg-colorPink hover:bg-colorBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  transition ease-in-out duration-700"
                                type="submit">
                                Sign In
                            </button></NavLink>
                    }
                </div>
            </div> */}


        </div>




    );
};

export default Header;