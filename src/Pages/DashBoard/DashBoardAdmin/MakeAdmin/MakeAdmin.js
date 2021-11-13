import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';

const MakeAdmin = () => {

    const [email, setEmail] = useState('')
    const handleOnChange = e => {
        setEmail(e.target.value);


    }
    const handleSubmit = e => {
        const user = { email }
        console.log(user)
        axios.put('https://young-mesa-35196.herokuapp.com/users/admin', user)
            .then((res) => {
                console.log(res.data)
                if (res.data.modifiedCount) {
                    swal("Success!", "Admin registered!", "success");
                }
            })
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div>
            <div>
                <h2 className="text-2xl mb-4 text-colorGray font-fredoka">
                    Make Admin
                </h2>
                <hr className="border-dashed border-black mb-8" />
            </div>

            <div className="border-4 border-colorLightGray p-12">

                <form onSubmit={handleSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-left font-fredoka text-4xl text-colorGray mb-4">Enter Email</h2>
                    <p className="text-left mb-12">Enter the email adress of the person whom you would like to make an admin.</p>
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
                            onBlur={handleOnChange}
                        />
                    </div>
                    <button
                        className="bg-colorPink hover:bg-colorBlue text-white font-bold font-rubik py-2 px-4 rounded focus:outline-none focus:shadow-outline  transition ease-in-out duration-700"
                        type="submit">
                        Make Admin
                    </button>
                </form>
            </div>

        </div >
    );
};

export default MakeAdmin;