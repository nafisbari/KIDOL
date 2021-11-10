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
                            <p className="text-white text-justify">Kidol is a leading global toy company and owner of one of the strongest portfolios of children’s and family entertainment franchises in the world available in more than 150 countries in collaboration with the world’s leading retail and e-commerce companies.

                            </p>
                            <p className="text-white text-left mt-4">
                                <Link to='/'><i className="fab fa-facebook-f mx-4 text-lg hover:text-colorPink transition duration-300 ease-in-out " /></Link>
                                <Link to='/' ><i className="fab fa-twitter mx-4 text-lg hover:text-colorPink transition duration-300 ease-in-out " /></Link>
                                <Link to='/'><i className="fab fa-tumblr mx-4 text-lg hover:text-colorPink transition duration-300 ease-in-out " /></Link>
                                <Link to='/'><i className="fab fa-instagram-square mx-4 text-lg hover:text-colorPink transition duration-300 ease-in-out " /></Link>
                            </p>

                        </div>

                    </div>
                    <div className="lg:w-3/4 mx-auto mb-12">
                        <h4 className="text-xl font-bold text-white mb-8 text-left font-fredoka">Quick Links</h4>
                        <div>
                            <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Helpline</p></Link>
                            <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Courses</p></Link>
                            <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- About</p></Link>
                            <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Support</p></Link>
                            <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Event</p></Link>
                        </div>

                    </div>
                    <div>
                        <div className="lg:w-3/4 mx-auto mb-12">
                            <h4 className="text-xl font-bold text-white mb-8 text-left font-fredoka">Other Pages</h4>
                            <div>
                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Contact</p></Link>
                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Blogs</p></Link>
                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Event</p></Link>
                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out " >- FAQ</p></Link>

                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Speakers</p></Link>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="lg:w-3/4 mx-auto mb-12">
                            <h4 className="text-xl font-bold text-white mb-8 text-left font-fredoka">Compnay</h4>
                            <div>
                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Kidol</p></Link>
                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Shop</p></Link>
                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Help</p></Link>
                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Log In</p></Link>
                                <Link to='/'><p className="text-white mb-2 text-left hover:text-colorPink transition duration-300 ease-in-out ">- Location</p></Link>
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <div>
                            <h4 className="text-xl font-bold text-white mb-8 text-left font-fredoka">Payment</h4>
                            <p className="text-white text-justify ">30+ Payment Options for our Customers, Easy Checkout, Better Conversions, Secure OTP based access
                                .

                            </p>
                        </div>
                        <Link to='/'><img src="https://i.ibb.co/qmjH6x9/payment.png " alt="" className="mt-8" /></Link>
                    </div>
                </div>


            </div>
            <div>
                <p className="text-white p-4 text-center"> ©2021 <span className="text-colorPink">KIDOL.</span> Made with <i className="fas fa-heart text-red-600" />  by Nafis</p>
            </div>
        </div>
    );
};

export default Footer;