import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, googleSignIn, loginUser, logout } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChangeL = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLoginSubmit = e => {
        console.log(loginData)
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }
    return (

        <>

            {/* LOGIN FORM */}
            < div className="w-full px-4 lg:px-16 py-8" >

                <form onSubmit={handleLoginSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-left font-fredoka text-4xl text-colorGray mb-4">Login</h2>
                    <p className="text-left mb-12">Welcome back! Please enter your username and password to login</p>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email"
                            required
                            name="email"
                            onBlur={handleOnChangeL}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="Password"
                            required
                            name="password"
                            onBlur={handleOnChangeL}
                        />

                    </div>



                    <div className="flex items-center justify-between">
                        {user?.email ?
                            <button
                                className="bg-colorPink hover:bg-colorBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition ease-in-out duration-700 font-rubik"
                                type="button" onClick={logout}>
                                Log Out
                            </button>
                            :
                            <button
                                className="bg-colorPink hover:bg-colorBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition ease-in-out duration-700 font-rubik"
                                type="submit">
                                Log In
                            </button>}
                    </div>
                </form>
                <div className="px-8">
                    <div className="mt-8 flex justify-between items-center">
                        <hr className="w-full border-1 border-dashed border-colorGray" />
                        <span className="font-fredoka text-colorGray p-4">OR</span>
                        <hr className="w-full border-1 border-dashed border-colorGray" />
                    </div>
                    <button
                        className="bg-red-800 hover:bg-colorBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition ease-in-out duration-700 font-rubik"
                        onClick={handleGoogleSignIn}>
                        <i className="fab fa-google-plus-g" /> Sign In
                    </button>
                </div>

            </div >
        </>
    );
};

export default Login;