import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useAuth from '../../../hooks/useAuth';
import useToys from '../../../hooks/useToys';
import swal from 'sweetalert';


const Order = () => {
    const { orderId } = useParams();
    const { user } = useAuth();
    const { toys } = useToys();
    const orderedToy = toys.filter(toy => (toy._id) == (orderId));
    console.log(orderedToy[0]);

    const [orderedData, setOrderedData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrderedData = { ...orderedData };
        newOrderedData[field] = value;
        console.log('it is', newOrderedData)
        setOrderedData(newOrderedData);
    }

    const handleOrderSubmit = e => {
        //collecting default data
        const orderData = {
            ...orderedData,
            name: user.displayName,
            email: user.email,
            toyName: orderedToy[0]?.name,
            price: orderedToy[0]?.price,
            status: "Pending",
            img: orderedToy[0]?.img

        }

        console.log(orderData)
        axios
            .post('https://young-mesa-35196.herokuapp.com/orders', orderData)
            .then((result) => {
                console.log(result)
                if (result.data.insertedId) {
                    swal("Success!", "Your order has been placed successfully!", "success");

                } else {
                    swal("Ooops!!!", " Something went wrong. Please try again after sometime", "warning");
                }

            })
        e.preventDefault();
        e.target.reset();
    }

    return (
        <div>
            <div className="bg-colorBlue ">
                <img src="https://i.ibb.co/vVcDb2V/curve-bg.png" alt="" />
                <div className="py-20">
                    <h1 className="text-7xl font-fredoka text-white text-center ">Shop</h1>
                    <p className="text-xl font-fredoka text-white  text-center my-4">
                        <Link to='/home' className="hover:text-colorPink"  >Home</Link> <span className="text-colorPink">/ Order Summary</span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-6">

                {/* order data form */}
                <div className="order-last lg:order-first">
                    <form onSubmit={handleOrderSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-left font-fredoka text-4xl text-colorGray mb-4">Order Information</h2>
                        <p className="text-left mb-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio, incidunt!.</p>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Name"
                                disabled
                                defaultValue={user.displayName}
                                name="name"
                            //onBlur={handleOnChange}
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
                                disabled
                                defaultValue={user.email}
                                name="email"
                            //onBlur={handleOnChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                                Your Phone
                            </label>
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="Number"
                                placeholder="Your Phone"
                                name="phone"
                                required
                                onBlur={handleOnChange}
                            />

                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                                Shipping Address
                            </label>
                            <textarea
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Shipping address"
                                name="address"
                                required
                                onBlur={handleOnChange}
                            />

                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                                Order Quantity
                            </label>
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="Number"
                                placeholder="Quantity"
                                name="quantity"
                                required
                                onBlur={handleOnChange}
                            />

                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">

                            </label>
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder=""
                                name="toyName"
                                defaultValue={orderedToy[0]?.name}
                                //onBlur={handleOnChange}
                                hidden
                            />
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder=""
                                name="price"
                                defaultValue={orderedToy[0]?.price}
                                //onBlur={handleOnChange}
                                hidden
                            />
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder=""
                                name="status"
                                defaultValue="Pending"
                                //onBlur={handleOnChange}
                                hidden
                            />
                            <input
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder=""
                                name="img"
                                defaultValue={orderedToy[0]?.img}
                                //onBlur={handleOnChange}
                                hidden
                            />

                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-colorPink hover:bg-colorBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition ease-in-out duration-700 font-rubik"
                                type="submit">
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>

                {/* Product Summary */}
                <div className="px-16 mx-auto pt-6 order-first lg:order-last">
                    <h2 className="text-left font-fredoka text-4xl text-colorGray mb-4">Order Summary</h2>
                    <h2 className="font-rubik text-2xl text-colorGray mb-5 text-left">
                        {orderedToy[0]?.name}
                    </h2>
                    <h2 className="font-fredoka text-2xl text-colorPink mb-5 text-left">
                        $ {orderedToy[0]?.price}
                    </h2>
                    <div className=" bg-colorToys rounded-lg p-20 mb-9 ">
                        <img src={orderedToy[0]?.img} className="mx-auto w-full" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Order;