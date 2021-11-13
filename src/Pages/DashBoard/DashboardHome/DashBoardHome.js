import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashBoardHome = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="">
                <h2 className="text-2xl mb-4 text-colorGray font-fredoka">
                    Dashboard
                </h2>
                <hr className="border-dashed border-black mb-8" />
                <p className="leading-7 font-rubik text-md text-colorGray">Hello, <span className="text-colorPink">{user.displayName}</span>
                    <br />

                    From your account dashboard. you can easily check & view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
            </div>
        </div>
    );
};

export default DashBoardHome;