import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import {QRCodeCanvas} from 'qrcode.react';
import { useState } from 'react';
import Confetti from 'react-confetti';
const Checkout = () => {
    const from = localStorage.getItem('from') || 'Chennai';
    const to = localStorage.getItem('to') || 'Bangalore';
    const departureTime = localStorage.getItem('departureTime') || '04:00 PM';
    const seats = localStorage.getItem('seats') || 0;
    const amount = localStorage.getItem('amount') || 0;
    const arriveAt = localStorage.getItem('arriveAt') || 'N/A';
    const [showBookingCard, setShowBookingCard] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleBooking = () => {
        setShowBookingCard(true); 
        setShowConfetti(true);

        setTimeout(() => setShowConfetti(false), 10000);
    };

  return (
    <div  className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10'>
        {showConfetti && <Confetti />}
        <div className="grid grid-cols-5 gap-16 items-start">
            <div className="col-span-3 space-y-7 pr-20">
                <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                    Passenger Information
                </h2>
                <form  className="space-y-6">
                    <div className="">
                    <label htmlFor="fullname" className="block mb-2 font-semibold">
                        Full Name
                    </label>
                    <input type="text" id='fullname'placeholder='e.g. RS Official' name='fullname' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>

                    <div className="">
                    <label htmlFor="email" className="block mb-2 font-semibold">
                        Email Address
                    </label>
                    <input type="email" id='email'placeholder='e.g. RS Official19@gmail.com' name='email' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    <small className="block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal">
                        You will get your tickets via this email address
                    </small>
                    </div>

                     <div className="">
                    <label htmlFor="phone" className="block mb-2 font-semibold">
                        Phone Number
                    </label>
                    <input type="tel" id='phone'placeholder='e.g. +91-9283746510' name='phone' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>
                     <div className="">
                    <label htmlFor="altphone" className="block mb-2 font-semibold">
                        Alternate Phone Number
                    </label>
                    <input type="tel" id='altphone'placeholder='e.g. +91-9283746510' name='altphone' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900" />
                    </div>
                </form>
            </div>

            <div className="col-span-2 space-y-8">
                <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
                    <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-b-2 border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
                        Your Booking Status
                    </h2>
                    <div className="space-y-8 pb-3">
                        <div className="space-y-4">
                            <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                Your Destination
                            </h6>

                            <div className="w-full flex items-center gap-x-3">
                                <div className="w-fit text-base font-medium">
                                    From:- <span className="ml-1.5">{from}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                                </div>
                                <div className="w-fit text-base font-medium">
                                    To:- <span className="ml-1.5">{to}</span>
                                </div>
                            </div>

                            <div className="w-full flex items-center gap-x-3">
                                <div className="w-fit text-base font-medium">
                                    Depart at:- <span className="ml-1.5">{departureTime}</span>
                                </div>
                                <div className="flex-1">
                                    <div className="w-full h-[1px] border border-dashed border-neutral-400 dark:border-neutral-700/80"></div>
                                </div>
                                <div className="w-fit text-base font-medium">
                                    Arrive at:- <span className="ml-1.5">{arriveAt}</span>
                                </div>
                            </div>

                            
                        </div>

                        <div className="space-y-4">
                            <div className="w-full flex items-center justify-between">
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        Total No of Seats
                                    </h6>

                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        {seats} <span className="text-xs">
                                            (Driver side)
                                        </span>
                                    </h6>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        Total Amount
                                    </h6>

                                    <h6 className="text-base text-neutral-700 dark:text-neutral-200 font-medium">
                                        RS. {amount}
                                    </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="w-full px-8 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md flex items-center justify-center gap-x-2" onClick={handleBooking}>
                    Processed to pay <FaArrowRightLong />
                </button>

                {showBookingCard && (
                <div className="mt-10 p-6 rounded-lg shadow-md border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h2 className="text-xl font-semibold text-center mb-4">🎫 Booking Confirmed ✅</h2>

                    <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <p><strong>From:</strong> {localStorage.getItem('from')}</p>
                    <p><strong>To:</strong> {localStorage.getItem('to')}</p>
                    <p><strong>Depart At:</strong> {localStorage.getItem('departureTime')}</p>
                    <p><strong>Arrive At:</strong> {localStorage.getItem('arriveAt')}</p>
                    <p><strong>Seats:</strong> {localStorage.getItem('seats')} (Driver side)</p>
                    <p><strong>Amount Paid:</strong> ₹{localStorage.getItem('amount')}</p>
                    </div>

                    <div className="mt-6 flex justify-center">
                    <QRCodeCanvas value={`From:${localStorage.getItem('from')}, To:${localStorage.getItem('to')}, Depart:${localStorage.getItem('departureTime')}`} />
                    </div>

                    <p className="mt-4 text-xs text-center text-neutral-500 dark:text-neutral-600">
                    Show this QR code at boarding
                    </p>

                    <h1 className='text-center'>🎉 Happy Journey 🎊</h1>
                </div>
        )}

            </div>
        </div>
    </div>
  )
}

export default Checkout