import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="background-footer ">
            <div className="background-footer-img   ">
                <div className="px-8 py-8 md:px-24 md:py-16 lg:grid grid-cols-6 gap-4 container mx-auto mt-4">
                    <div className="col-span-2 mb-12">
                        <div className=" mb-4 ">
                            <img src="https://i.ibb.co/ggqZfCh/logo-footer.png " alt="" />
                        </div>
                        <div>
                            <p className="text-white text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut at quam nisi in, est quos possimus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut at quam nisi in, est quos possimus.

                            </p>
                            <p className="text-white text-left mt-4">
                                <Link><i className="fab fa-facebook-f mx-4 text-lg hover:text-colorPink " /></Link>
                                <Link><i className="fab fa-twitter mx-4 text-lg hover:text-colorPink " /></Link>
                                <Link><i className="fab fa-tumblr mx-4 text-lg hover:text-colorPink " /></Link>
                                <Link><i className="fab fa-instagram-square mx-4 text-lg hover:text-colorPink " /></Link>
                            </p>

                        </div>

                    </div>
                    <div className="lg:w-3/4 mx-auto mb-12">
                        <h4 className="text-xl font-bold text-white mb-8 text-left font-fredoka">Quick Links</h4>
                        <div>
                            <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Helpline</p></Link>
                            <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Courses</p></Link>
                            <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- About</p></Link>
                            <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Support</p></Link>
                            <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Event</p></Link>
                        </div>

                    </div>
                    <div>
                        <div className="lg:w-3/4 mx-auto mb-12">
                            <h4 className="text-xl font-bold text-white mb-8 text-left font-fredoka">Other Pages</h4>
                            <div>
                                <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Contact</p></Link>
                                <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Blogs</p></Link>
                                <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Event</p></Link>
                                <Link><p className="text-white mb-2 text-left hover:text-colorPink " >- FAQ</p></Link>

                                <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Speakers</p></Link>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="lg:w-3/4 mx-auto mb-12">
                            <h4 className="text-xl font-bold text-white mb-8 text-left font-fredoka">Compnay</h4>
                            <div>
                                <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- KIDOL</p></Link>
                                <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Shop</p></Link>
                                <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Help</p></Link>
                                <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Log In</p></Link>
                                <Link><p className="text-white mb-2 text-left hover:text-colorPink ">- Location</p></Link>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-8 text-left font-fredoka">Payment</h4>
                            <p className="text-white text-justify ">Lorem, ipsum dolor sit amet consectetur adipisicing elit.Ipsam ut at quam nisi in, est quos possimus.

                            </p>
                        </div>
                        <Link><img src="https://i.ibb.co/qmjH6x9/payment.png " alt="" className="mt-8" /></Link>
                    </div>
                </div>


            </div>
            <div>
                <p className="text-white p-4"> ©2021 <span className="text-colorPink">KIDOL.</span> Made with <i className="fas fa-heart text-red-600" />  by Nafis</p>
            </div>
        </div>
    );
};

export default Footer;