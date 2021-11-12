import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const DashBoard = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const email = user?.email;
    const uri = `https://young-mesa-35196.herokuapp.com/orders?email=${email}`

    useEffect(() => {
        axios
            .get(uri).then((result) => {
                console.log(result.data)
                setOrders(result.data)
            })
        console.log(uri);
    }, []);
    return (
        <div>
            {/* top banner */}
            <div className="bg-colorBlue ">
                <img src="https://i.ibb.co/vVcDb2V/curve-bg.png" alt="" />
                <div className="py-20">
                    <h1 className="text-7xl font-fredoka text-white text-center ">My Account</h1>
                    <p className="text-xl font-fredoka text-white  text-center my-4">
                        <Link to='/home' className="hover:text-colorPink"  >Home</Link> <span className="text-colorPink">/ Dashboard</span>
                    </p>
                </div>
            </div>
            {/* top banner end */}


            <div>
                
            </div>
        </div>

    );
};

export default DashBoard;