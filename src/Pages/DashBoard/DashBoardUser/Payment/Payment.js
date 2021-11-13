import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const Payment = () => {
    const { user } = useAuth();
    return (
        <div>
            <div className="">
                <h2 className="text-2xl mb-4 text-colorGray font-fredoka">
                    Payment
                </h2>
                <hr className="border-dashed border-black mb-8" />
                <p className="leading-7 font-rubik text-md text-colorGray">Hello, <span className="text-colorPink">{user.displayName}</span>
                    <br />

                    We are glad to let you know that soon you will be able to pay online through secure payment gateways.</p>

                <div className="bg-red-100 border-l-4 my-12 border-red-600 text-orange-700 p-4" role="alert">
                    <p className="font-bold">
                        <i className="fab fa-cc-visa mx-1 text-2xl text-blue-900" />
                        <i className="fab fa-cc-paypal mx-1 text-2xl text-blue-900" />
                        <i className="fab fa-cc-mastercard mx-1 text-2xl text-blue-900" />
                        <i className="fab fa-cc-amex mx-1 text-2xl text-blue-900" />
                        <i className="fab fa-cc-apple-pay mx-1 text-2xl text-blue-900" />
                    </p>
                    <h4 className="text-xl text-red-500 font-fredoka  ">
                        Payment Gateways Coming Soon!!!
                    </h4>
                </div>


            </div>
        </div>
    );
};

export default Payment;