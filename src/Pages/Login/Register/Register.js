import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import InfoCard from '../InfoCard/InfoCard';

const Register = () => {
    const [registerData, setRegisterData] = useState({})

    const { registerUser } = useAuth();
    const location = useLocation();
    const history = useHistory();

    //taking the field values and sending it to firebase auth
    const handleOnChangeR = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    const handleRegisterSubmit = e => {
        console.log(registerData)
        registerUser(registerData.email, registerData.password, location, history, registerData.name)
        e.preventDefault();
    }
    return (
        <div>
            <div className="w-full px-4 lg:px-16 py-8">

                <form onSubmit={handleRegisterSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-left font-fredoka text-4xl text-colorGray mb-4">Register</h2>
                    <p className="text-left mb-12">Create new account today to reap the benefits of a personalized shopping experience.</p>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="username">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Name"
                            name="name"
                            onBlur={handleOnChangeR
                            }
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="email"
                            placeholder="Email"
                            name="email"
                            onBlur={handleOnChangeR}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            onBlur={handleOnChangeR}
                        />

                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-colorPink hover:bg-colorBlue text-white font-bold font-rubik py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition ease-in-out duration-700"
                            type="submit">
                            Sign In
                        </button>

                    </div>

                </form>

                <InfoCard></InfoCard>

            </div>
        </div>
    );
};

export default Register;