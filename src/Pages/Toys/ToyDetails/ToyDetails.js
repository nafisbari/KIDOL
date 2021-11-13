import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useToys from '../../../hooks/useToys';
import swal from 'sweetalert';

const ToyDetails = () => {
    const { toyId } = useParams();
    const { toys } = useToys();
    const { user } = useAuth();

    const [click, setClick] = useState('information');
    const [reviewData, setReviewData] = useState({})


    const toy = toys.filter(toy => (toy._id) == (toyId));
    console.log(toy[0]);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData[field] = value;
        setReviewData(newReviewData);
        e.preventDefault();
    }
    const handleReviewSubmit = e => {
        //collecting default data
        const review = {
            ...reviewData,
            name: user.displayName,
            email: user.email,


        }
        console.log(review)
        axios
            .post('https://young-mesa-35196.herokuapp.com/reviews', review)
            .then((result) => {
                console.log(result)
                if (result.data.insertedId) {
                    swal("Success!", "Your review has been posted successfully!", "success");

                } else {
                    alert('Ooops!! Something went wrong. Please try again after sometime ');
                }

            })

        e.preventDefault();
        e.target.reset();
    }

    return (
        <div className="container mx-auto p-12">
            {/* Product Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
                <div className="bg-colorToys py-20 px-24 ">
                    <img src={toy[0]?.img} className="mx-auto w-full " alt="" />
                </div>
                <div>
                    <h1 className="font-rubik text-2xl text-black-700 font-bold mb-2">{toy[0]?.name}</h1>
                    <h1 className="font-fredoka text-3xl text-colorPink mb-2 ">${toy[0]?.price}</h1>
                    <p>{toy[0]?.review} <i className="fas fa-star text-yellow-500" /></p>

                    <div>
                        <hr className=" mt-8" />
                        <div className="flex items-center justify-between p-8 ">
                            <p className="font-fredoka text-colorGray">Free Shipping</p>
                            <p className="font-fredoka text-colorGray">Support 24/7</p>
                            <p className="font-fredoka text-colorGray">Money Return</p>
                        </div>
                        <hr className="" />
                    </div>

                    <div className="my-8">
                        <p className="font-rubik text-colorGray text-justify leading-8">{toy[0]?.shortDesc}</p>
                    </div>

                    <div>
                        <Link to={`/order/${toy[0]?._id}`}><button
                            className="bg-colorPink hover:bg-colorBlue text-white hover:text-colorGray font-bold  my-4 mb-12 rounded-full py-4 px-16  focus:outline-none focus:shadow-outline  transition ease-in-out duration-700 font-rubik"
                        >
                            Buy Now
                        </button></Link>
                    </div>

                    <div>
                        <p className="font-rubik text-colorGray text-start font-bold">SKU : <span className="text-gray-400">{toy[0]?.sku}</span></p>
                        <p className="font-rubik text-colorGray text-start font-bold">Catagories : <span className="text-gray-400">Toys</span></p>
                        <p className="font-rubik text-colorGray text-start font-bold">Tags : <span className="text-gray-400">Toys</span></p>
                        <p className="font-rubik text-colorGray text-start font-bold">Share : <span className="text-gray-400">{toy[0]?.sku}</span></p>

                    </div>
                </div>
            </div>

            <div className="mt-28">
                <div className="w-1/3 mx-auto">
                    <button className="bg-white rounded px-6 py-4 hover:bg-colorPink text-colorGray hover:text-white transform transition duration 700 focus:bg-colorPink focus:text-white font-rubik " onClick={() => setClick('information')}>
                        <p className="  font-fredoka text-center inline-block mx-6">Information</p>
                    </button>
                    <button className="bg-white rounded px-6 py-4 hover:bg-colorPink text-colorGray hover:text-white  hover:text-white transform transition duration 700 focus:bg-colorPink focus:text-white font-rubik " onClick={() => setClick("review")}>
                        <p className=" text-center font-fredoka text-center inline-block mx-6">Review</p>
                    </button>
                </div>
                {/* Information product */}
                <div className={`${click === 'information' ? 'block' : 'hidden'} border-4 border-colorLightGray p-12`}>
                    <p className="font-rubik text-colorGray text-justify leading-8">{toy[0]?.longDescOne}
                        <br />
                        <br />

                        {toy[0]?.longDescTwo}</p>
                </div>

                {/* Review */}
                <div className={`${click === 'review' ? 'block' : 'hidden'} border-4 border-colorLightGray p-12`}>

                    {/* review form */}
                    <form onSubmit={handleReviewSubmit} className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-left font-fredoka text-4xl text-colorGray mb-4">Review</h2>
                        <p className="text-left mb-12">Post your review and experience with us.</p>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="username">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder={user.displayName}
                                disabled
                                name="name"
                                onBlur={handleOnChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder={user.email}
                                disabled
                                name="email"
                                onBlur={handleOnChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="password">
                                Description
                            </label>
                            <textarea
                                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                required
                                placeholder="Write your review/experience here"
                                name="desc"
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

        </div>
    );
};

export default ToyDetails;