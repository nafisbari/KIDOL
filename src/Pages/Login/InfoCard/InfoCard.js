import React from 'react';

const InfoCard = () => {
    return (
        
            <div className="my-8 w-full bg-colorLightGray p-8">
            <h3 className="text-xl font-bold text-colorGray text-left mb-4">SIGN UP TODAY AND YOU WILL BE ABLE TO: </h3>
            <p className="text-sm text-colorGray text-left mb-8">The Loke Buyer Protection has you covered from click to delivery. Sign up
                or sign in and you will be able to:</p>

            <ul>
                <li className="text-left text-lg text-colorGray font-rubik font-medium"><i className="far fa-check-circle text-lg text-colorBlue mr-4" /> Speed your way through checkout</li>
                <br />
                <li className="text-left text-lg text-colorGray font-rubik font-medium"><i className="far fa-check-circle text-lg text-colorBlue mr-4" /> Track your orders easily</li>
                <br />
                <li className="text-left text-lg text-colorGray font-rubik font-medium"><i className="far fa-check-circle text-lg text-colorBlue mr-4" /> Keep a record of all your purchases</li>
            </ul>
        </div>
        
    );
};

export default InfoCard;