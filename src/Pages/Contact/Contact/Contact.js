import React from 'react';
import { Link } from 'react-router-dom';
import QuestForm from '../QuestForm/QuestForm';

const Contact = () => {
    return (
        <>
            <div className="bg-colorBlue ">
                <img src="https://i.ibb.co/vVcDb2V/curve-bg.png" alt="" />
                <div className="py-20">
                    <h1 className="text-7xl font-fredoka text-white text-center ">Contact Us</h1>
                    <p className="text-xl font-fredoka text-white  text-center my-4">
                        <Link to='/home' className="hover:text-colorPink"  >Home</Link> <span className="text-colorPink">/ Contact</span>
                    </p>
                </div>
            </div>
            <div className="container mx-12 bg-colorLightGray py-16 px-8 lg:px-20 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 p-3">
                    <div className="rounded-xl shadow-md bg-white p-5">
                        <img className="mx-auto my-6" src="https://i.ibb.co/88S2cPn/contact-1.png " alt="" />
                        <h1 className="my-5 font-fredoka text-center text-colorGray text-4xl">Address</h1>
                        <h4 className="font-fredoka text-center text-colorGray text-xl">Dhaka, Bangladesh</h4>
                    </div>
                    <div className="rounded-xl shadow-md bg-white p-5">
                        <img className="mx-auto my-6"  src="https://i.ibb.co/yWcns0D/contact-2.png " alt="" />
                        <h1 className=" my-5 font-fredoka text-center text-colorGray text-4xl">Phone</h1>
                        <h4 className="font-fredoka text-center text-colorGray text-xl">+00 123 456 789</h4>
                    </div>
                    <div className="rounded-xl shadow-md bg-white p-5">
                        <img className="mx-auto my-6" src="https://i.ibb.co/HqGRjmV/contact-3.png " alt="" />
                        <h1 className="my-5 font-fredoka text-center text-colorGray text-4xl">Email</h1>
                        <h4 className="font-fredoka text-center text-colorGray text-xl">admin@admin.com</h4>
                    </div>
                </div>
                <QuestForm></QuestForm>
            </div>
            

        </>
    );

};

export default Contact;