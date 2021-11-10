import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return (
        <>
            <div className="bg-colorBlue ">
                <img src="https://i.ibb.co/vVcDb2V/curve-bg.png" alt="" />
                <div className="py-20">
                    <h1 className="text-7xl font-fredoka text-white text-center ">My Account</h1>
                    <p className="text-xl font-fredoka text-white  text-center my-4">
                        <Link to='/home' className="hover:text-colorPink"  >Home</Link> <span className="text-colorPink">/ Dashboard</span>
                    </p>
                </div>
            </div>
          

        </>

    );
};

export default DashBoard;