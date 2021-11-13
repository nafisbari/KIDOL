import axios from 'axios';
import React, { useState } from 'react';
import swal from 'sweetalert';

const AddProduct = () => {
    const [product, setProduct] = useState();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product }
        newProduct[field] = value;
        console.log('New Product', newProduct)
        setProduct(newProduct)

    }
    const handleProductSubmit = e => {
        console.log(product);
        axios.post('https://young-mesa-35196.herokuapp.com/toys', product)
            .then((result) => {
                console.log(result)
                if (result.data.insertedId) {
                    swal("Success!", "Product has been added!", "success");
                }
                else {
                    swal("Ooops!!!", " Something went wrong. Please try again after sometime", "warning");
                }
            })
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div>
            <div>
                <h2 className="text-2xl mb-4 text-colorGray font-fredoka">
                    Add Product
                </h2>
                <hr className="border-dashed border-black mb-8" />
                <form onSubmit={handleProductSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-left font-fredoka text-4xl text-colorGray mb-4">Add Products</h2>
                    <p className="text-left mb-12">Add your desired product here.</p>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="username">
                            Product Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            required
                            placeholder="Product Name"
                            name="name"
                            onBlur={handleOnChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="username">
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="number"
                            required
                            placeholder="Product Price"
                            name="price"
                            onBlur={handleOnChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="username">
                            Image
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            required
                            placeholder="Product Image url"
                            name="img"
                            onBlur={handleOnChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="username">
                            Description
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            required
                            placeholder="Tell us about the product"
                            name="shortDesc"
                            onBlur={handleOnChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                            Details
                        </label>
                        <textarea
                            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            required
                            placeholder="More about the product"
                            name="longDescOne"
                            onBlur={handleOnChange}
                        />

                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-colorPink hover:bg-colorBlue text-white font-bold font-rubik py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition ease-in-out duration-700"
                            type="submit">
                            Submit
                        </button>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddProduct;