import React, { useState } from 'react';
import useToys from '../../../../hooks/useToys';
import swal from 'sweetalert';
import axios from 'axios';

const ManageProducts = () => {

    const { toys, setToys } = useToys();
    console.log(toys)

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
                    const uri = `https://young-mesa-35196.herokuapp.com/toys/${id}`;

                    axios.delete(uri)
                        .then(async (res) => {
                            if (res.data.deletedCount > 0) {
                                swal("Your order has been deleted! Hope to see you soon!", {
                                    icon: "success",
                                });
                                const remainingToys = toys.filter(toy => toy._id !== id);
                                await setToys(remainingToys);
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
    return (
        <div>
            <div>
                <h2 className="text-2xl mb-4 text-colorGray font-fredoka">
                    Manage Products
                </h2>
                <hr className="border-dashed border-black mb-8" />

                <div className="overflow-x-scroll">
                    <table className="table-auto border">
                        <thead className="">
                            <tr className=" bg-colorLightGray">
                                <th className="px-6 py-2 text-colorPink font-fredoka">
                                    Product Image
                                </th>
                                <th className="px-6 py-2 text-colorPink font-fredoka">
                                    Product Name
                                </th>
                                <th className="px-6 py-2 text-colorPink font-fredoka">
                                    Price
                                </th>
                                <th className="px-6 py-2 text-colorPink font-fredoka">
                                    Rating
                                </th>

                                <th className="px-6 py-2 text-colorPink font-fredoka">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            {toys.map(toy => <tr className="whitespace-nowrap border-l-0 border-r-0 border border-colorGray">
                                <td className=" px-6 py-4 text-sm text-gray-500">
                                    <img src={toy.img} alt="" />
                                </td>
                                <td className=" px-6 py-4 text-sm text-gray-500">
                                    {toy.name}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm text-gray-900">
                                        {toy.price}
                                    </div>
                                </td>
                                <td className="px-6 py-4 ">
                                    <div className="text-sm text-gray-500 ml-4">
                                        {toy.review}
                                    </div>
                                </td>

                                <td className="px-6 py-4"> <button className="ml-4" onClick={() => handleDelete(toy._id)}>
                                    <i className="fas fa-trash-alt text-red-700 hover:text-red-400 text-2xl " />
                                </button>


                                </td>

                            </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;