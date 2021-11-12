import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Login from '../Login/Login'
import Register from '../Register/Register';

const MyAccount = () => {
    const { authError } = useAuth();
    return (
        <>

            <div className="bg-colorBlue ">
                <img src="https://i.ibb.co/vVcDb2V/curve-bg.png" alt="" />
                <div className="py-20">
                    <h1 className="text-7xl font-fredoka text-white text-center ">My Account</h1>
                    <p className="text-xl font-fredoka text-white  text-center my-4">
                        <Link to='/home' className="hover:text-colorPink"  >Home</Link> <span className="text-colorPink">/ My Account</span>
                    </p>
                </div>
            </div>

            <div className="p-8 mx-auto w-2/3">


                {/* Alert for Successful Login */}
                {/* {user.email && <div className="bg-green-100 border-t-4 border-green-400 rounded-b text-green-900 px-4 py-3 shadow-md mb-4 bg-green-100" role="alert">
                    <div className="flex">
                        <div><i className="far fa-check-circle text-lg text-green-900 mr-4" /></div>
                        <div>
                            <p className="font-bold font-fredoka  text-lg">Sign In Successfull</p>
                        </div>
                    </div>
                </div>}  */}

                {/* For Error Message */}

                {authError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex items-center mx-auto" role="alert">
                    <div className="py-1"><svg className="fill-current h-6 w-6 text-red-700 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                    <strong className="font-bold">{authError}</strong>
                </div>}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:divide-x-2 divide-gray-200 p-8 ">
                <Login></Login>
                <Register></Register>
            </div>
        </>
    );
};

export default MyAccount;