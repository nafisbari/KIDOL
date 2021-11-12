import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MyOrders from './MyOrders/MyOrders';

const DashBoard = () => {

    const [click, setClick] = useState('dashboard');
    const { user, logout } = useAuth();

    return (
        <div>
            {/* top banner */}
            <div className="bg-colorBlue ">
                <img src="https://i.ibb.co/vVcDb2V/curve-bg.png" alt="" />
                <div className="py-20">
                    <h1 className="text-7xl font-fredoka text-white text-center ">My Account</h1>
                    <p className="text-xl font-fredoka text-white  text-center my-4">
                        <Link to='/home' className="hover:text-colorPink"  >Home</Link> <span className="text-colorPink">/ Dashboard</span>
                    </p>
                </div>
            </div>
            {/* top banner end */}


            <div className="container mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4">
                    <div>
                        <div className="grid grid-cols-1 border border-colorGray ">
                            <button className="border-none border-colorGray    p-4 font-fredoka text-colorGray text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" onClick={() => setClick('dashboard')}>
                                Dashboard
                            </button>
                            <button className="border border-colorGray border-b-0 border-l-0 border-r-0  p-4 font-fredoka text-colorGray text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" onClick={() => setClick('order')}>
                                Orders
                            </button>
                            <button className="border border-colorGray p-4 font-fredoka text-colorGray border-b-0 border-l-0 border-r-0  text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" onClick={() => setClick('payment')}>
                                Payment
                            </button>
                            <button className="border border-l-0 border-r-0 border-b-0 border-colorGray p-4 font-fredoka text-colorGray  text-xl hover:bg-colorPink hover:text-white focus:bg-colorPink focus:text-white transform transition duration 700" onClick={logout}>
                                Logout
                            </button>
                        </div>


                    </div>
                    <div className="md:col-span-2 lg:col-span-3">
                        <div className="border border-gray-500 p-8">

                            {/* Landing dashboard */}
                            <div className={`${click === 'dashboard' ? 'block' : 'hidden'} `}>
                                <h2 className="text-2xl mb-4 text-colorGray font-fredoka">
                                    Dashboard
                                </h2>
                                <hr className="border-dashed border-black mb-8" />
                                <p className="leading-7 font-rubik text-md text-colorGray">Hello, <span className="text-colorPink">{user.displayName}</span>
                                    <br />

                                    From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                            </div>

                            {/* My Order Section */}
                            <div className={`${click === 'order' ? 'block' : 'hidden'} `}>
                                <h2 className="text-2xl mb-4 text-colorGray font-fredoka">
                                    My Orders
                                </h2>
                                <hr className="border-dashed border-black mb-8" />
                                <MyOrders />
                            </div>

                            {/* Payment Section */}
                            <div className={`${click === 'payment' ? 'block' : 'hidden'} `}>
                                <h2 className="text-2xl mb-4 text-colorGray font-fredoka">
                                    Payment
                                </h2>
                                <hr className="border-dashed border-black mb-8" />
                                <p className="leading-7 font-rubik text-md text-colorGray">Hello, <span className="text-colorPink">{user.displayName}</span>
                                    <br />

                                    From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default DashBoard;