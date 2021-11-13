import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import swal from 'sweetalert';


const Review = () => {
    const [reviewData, setReviewData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData[field] = value;
        setReviewData(newReviewData);
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
    const { user } = useAuth();
    return (
        <div>
            <div className="border-4 border-colorLightGray p-12">

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
    );
};

export default Review;