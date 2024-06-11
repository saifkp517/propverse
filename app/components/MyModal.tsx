import Modal from 'react-modal';
import { useState, useRef } from 'react';
import Image from 'next/image';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default function MyModal() {

    const subtitle = useRef<HTMLHeadingElement>(null);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        if (subtitle.current) {
            subtitle.current.style.color = '#f00';
        }
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className="">
            <h1 className="hidden lg:block font-bold text-2xl tracking-tight  o text-center text-gray-700">ENQUIRE NOW</h1>
            <div className="h-full text-center">
                <iframe className="hidden lg:block mx-auto h-24 lg:h-48 mt-6" src="https://lottie.host/embed/ceb864b7-efa4-43ab-8df9-05d32c8d3503/z0ZkrFx1D8.json"></iframe>
                <button className="bg-blueTheme w-full lg:w-auto border border-gray-600 rounded-lg py-2 px-4 text-white mt-8" onClick={openModal}>Interested?</button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={{
                        overlay: {
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            zIndex: 50,
                            height: '100%', // Increased height
                        },
                        content: {
                            marginTop: '5%',
                            height: '80%',
                            padding: '0px',
                            borderRadius: '20px'
                        }
                    }}
                    contentLabel="Example Modal"
                >
                    <div>
                        <div className="grid grid-cols-1 lg:grid-cols-3">
                            <div className="container hidden lg:flex">
                                <Image alt="getintouch" src="/getintouch.jpg" height={1000} width={1000} className=" h-full object-fit" />
                            </div>
                            <div className=" col-span-2 p-12">
                                <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
                                <p className=" o mt-2 text-gray-600">Have an inquiry to discuss about project? Fill out the form our team will contact you</p>

                                <form action="" className="my-20">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 lg:space-x-4">
                                        <div className="">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                            <input type="text" id="email" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="First Name" required />
                                        </div>
                                        <div className="">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                            <input type="text" id="email" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <br />
                                    <div className="grid grid-cols-1 lg:grid-cols-2 space-x-0 lg:space-x-4">
                                        <div className="">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
                                            <input type="tel" id="email" className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5" placeholder="First Name" required />
                                        </div>
                                        <div className="">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5" />
                                        </div>
                                    </div>
                                    <br />
                                    <p className="mt-2 text-gray-600">Preferred Time Slot for a meet</p>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                                        <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => { }} >10:00 AM - 02:00 PM</button>
                                        <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => { }} >02:00 PM - 06:00 PM</button>
                                        <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => { }} >6:00 PM - 10:00 PM</button>
                                    </div>

                                    <br />
                                    <p className=" mt-2 text-gray-600">Investment Amount</p>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                                        <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => { }} >Upto 5 Lacs</button>
                                        <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => { }} >5 - 25 Lacs</button>
                                        <button type="button" className="border border-gray-500 rounded-lg focus:border-blueTheme focus:text-blueTheme focus:font-bold p-5" onClick={() => { }} >25+ Lacs</button>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-20">
                                        <button type="button" className="border col-span-3 p-5 hover:opacity-75 text-white font-semibold bg-blueTheme rounded-lg" onClick={() => { }} >Submit</button>
                                    </div>



                                </form>


                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    )
}