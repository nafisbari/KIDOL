import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import swal from 'sweetalert';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [monitorOrder, setmonitorOrder] = useState(true);
    const uri = 'https://young-mesa-35196.herokuapp.com/orders';
    useEffect(() => {
        axios
            .get(uri).then((result) => {
                console.log(result.data);
                setOrders(result.data);
            })

    }, [monitorOrder]);


    const handleDelete = id => {

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

                    axios.delete(uri)
                        .then((res) => {
                            if (res.data.deletedCount > 0) {
                                swal("Your order has been deleted! Hope to see you soon!", {
                                    icon: "success",
                                });
                                const remainingOrders = orders.filter(orders => orders._id !== id);
                                setOrders(remainingOrders);
                            }
                            else {
                                swal("Operation failed. Please try again later. ");
                            }
                        })

                }
                else {
                    swal("Operation Cancelled!");
                }
            });

    }

    //status update
    const handleApprove = id => {
        const uri = `https://young-mesa-35196.herokuapp.com/orders/${id}`;
        axios.put(uri, { status: "Shipped" })
            .then(res => {
                console.log(res);
                swal("Success!", "Order Approved!", "success");
                setmonitorOrder(!monitorOrder)
            })
    }



    return (
        <div>
            <div>
                <h2 className="text-2xl mb-4 text-colorGray font-fredoka">
                    Manage All Orderss
                </h2>
                <hr className="border-dashed border-black mb-8" />
            </div>


            <div className="overflow-x-scroll">
                <table className="table-auto border ">
                    <thead className="">
                        <tr className=" bg-colorLightGray">
                            <th className="px-6 py-2 text-colorPink font-fredoka">
                                User Name
                            </th>
                            <th className="px-6 py-2 text-colorPink font-fredoka">
                                Contact
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
                    <tbody>

                        {orders.map(order => <tr className="whitespace-nowrap border-l-0 border-r-0 border border-colorGray">
                            <td className=" px-6 py-4 text-sm text-gray-500">
                                {order.name}
                            </td>
                            <td className=" px-6 py-4 text-sm text-gray-500">
                                {order.phone}
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
                                <i className="fas fa-trash-alt text-red-700 hover:text-red-400 text-2xl " />
                            </button>
                                <button className="ml-4" onClick={() => handleApprove(order._id)}>
                                    <i className="fas fa-check-circle text-green-700 hover:text-green-400 text-2xl " />
                                </button>

                            </td>

                        </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;