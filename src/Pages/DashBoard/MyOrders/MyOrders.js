import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import swal from 'sweetalert';

const MyOrders = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    const email = user?.email;
    const uri1 = `https://young-mesa-35196.herokuapp.com/orders?email=${email}`

    //getting the order data
    useEffect(() => {
        axios
            .get(uri1).then((result) => {
                console.log(result.data);
                setOrders(result.data);
            })

    }, [uri1]);

    //to delete an order by user
    const handleDelete = id => {
        // const proceed = window.confirm('Are you sure, you want to delete?')
        swal({
            title: "Are you sure you want to cancel your order?",
            text: "Once deleted, you will not get the order delivered!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const uri = `https://young-mesa-35196.herokuapp.com/orders/${id}`;
                    fetch(uri, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then( async data => {
                            if (data.deletedCount > 0) {
                                swal("Your order has been deleted! Hope to see you soon!", {
                                    icon: "success",
                                });

                                const remainingOrders = orders.filter(orders => orders._id !== id);
                                await setOrders(remainingOrders);
                            }
                            else {
                                swal("Operation failed. Please try again later. ");
                            }
                        })

                }
                else {
                    swal("Your order will be delivered soon!");
                }
            });

    }

    
    return (
        <div>
            <div className="container flex justify-center mx-auto">
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="border-b border-gray-200 shadow">
                            <table className="divide-y divide-gray-300 ">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-2 text-colorPink font-fredoka">
                                            Order Number
                                        </th>
                                        <th className="px-6 py-2 text-colorPink font-fredoka">
                                            Product Name
                                        </th>
                                        <th className="px-6 py-2 text-colorPink font-fredoka">
                                            Quantity
                                        </th>
                                        <th className="px-6 py-2 text-colorPink font-fredoka">
                                            Status
                                        </th>
                                        <th className="px-6 py-2 text-colorPink font-fredoka">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-300">

                                    {
                                        orders.map(order => <tr key={orders[0]._id} className="whitespace-nowrap">
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {order._id}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-900">
                                                    {order.toyName}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 ">
                                                <div className="text-sm text-gray-500 ml-4">
                                                    {order.price}
                                                </div>
                                            </td>

                                            <td className="px-6 py-4">
                                                {order.status}
                                            </td>
                                            <td className="px-6 py-4"> <button className="ml-4" onClick={() => handleDelete(order._id)}>
                                                <i className="fas fa-trash-alt text-red-700 hover:text-red-400  " />
                                            </button>
                                            </td>
                                        </tr>)
                                    }



                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;