import React from 'react';

const QuestForm = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2  p-8  mt-32">
            <div className="hidden md:block  w-11/12  ">
                <img src="https://i.ibb.co/pjywh6P/quest.png" className="-mb-12 mx-auto " alt="" />
            </div>
            <div className="bg-colorLightGray lg:bg-white rounded-xl p-8 my-auto">
                <h1 className="font-fredoka text-4xl lg:text-6xl text-colorPink text-center">
                    Send A Quest
                </h1>
                <form className=" ">

                    <div className="  px-3 mb-8 mt-4 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" htmlFor="grid-first-name">
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="text"
                            placeholder="Name" />

                    </div>
                    <div className=" px-3 mb-8 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" htmlFor="grid-last-name">
                            Email
                        </label>
                        <input
                            className="rounded-xl appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="text"
                            placeholder="Email" />
                    </div>


                    <div className=" px-3 mb-8 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-2" htmlFor="grid-first-name">
                            Phone
                        </label>
                        <input
                            className="rounded-xl appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            type="number"
                            placeholder="Phone" />

                    </div>
                    <div className=" px-3 mb-8">
                        <label className="ml-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Subject
                        </label>
                        <textarea
                            className="rounded-xl appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-20"
                            type="text"
                            placeholder="Subject"
                        />
                    </div>

                    <div className=" px-3 mb-4 ">
                        <label className="ml-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="description">
                            Desccription
                        </label>
                        <textarea
                            className="rounded-xl appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-28 "
                            type="text"
                            placeholder="How can we help you?" />
                    </div>


                </form>
            </div>
        </div>
    );
};

export default QuestForm;