import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css'

const ReviewsAll = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://young-mesa-35196.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className="mt-28 bg-colorRev">
            <div className="container mx-auto p-12">
                <div>
                    <div className="mx-auto mb-16 w-1/2">
                        <Link to='/'><h1 className="font-fredoka text-4xl text-colorGray text-center hover:text-colorPink transform transition duration 700 w-1/2 mx-auto mb-8">
                            Testimonials
                        </h1></Link>
                        <p className="text-lg font-rubik text-center mb-20">This is some of the trending products, shop now for more exciting offers and collection for you children! </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {
                            review.map(reviews => <div>
                                <div className="bg-white rounded-xl rounded-bl-none p-9 background-review-image">

                                    <p className="text-justify font-rubik">{reviews.desc}</p></div>
                                <img src="https://template.hasthemes.com/kidol/kidol/assets/img/testimonial/shape1.png" className="-mt-2" alt="" />
                                <div className="ml-4 -mt-3 flex items-center ">
                                    <div className=" mr-3 bg-white rounded-full h-12 w-12 flex items-center justify-center ">
                                        <img src="https://i.ibb.co/gVBypdW/profile.png" className="w-2/3 " alt="" />
                                    </div>
                                    <div>
                                        <p className="text-colorGray text-lg font-fredoka">{reviews.name}</p>
                                        <p className="text-colorGray font-rubik">Customer</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>


            </div>
            <img src="https://template.hasthemes.com/kidol/kidol/assets/img/testimonial/shape2.png" alt="" />
        </div>
    );
};

export default ReviewsAll;