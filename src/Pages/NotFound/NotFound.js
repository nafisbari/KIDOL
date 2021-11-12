import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="image-background">
            <Link to='/'>
                <button
                    className=" mx-auto bg-colorPink hover:bg-colorBlue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition ease-in-out duration-700 font-rubik">
                    Back Home
                </button></Link>
        </div>
    );
};

export default NotFound;