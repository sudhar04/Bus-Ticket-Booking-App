import React from 'react'
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';


const Destination = () => {

    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    //const navigate = useNavigate();

    const handleFromChange = (e) => {
        const value = e.target.value;
        setFrom(value);
        localStorage.setItem('from', value);
    }

    const handleToChange = (e) => {
        const value = e.target.value;
        setTo(value);
        localStorage.setItem('to', value); 
    }

    const isDestinationSelected = from && to;

    /* if (from && to) {
    navigate('/depart');  
  } */

  return (
    <div className='w-full space-y-4'>
        {
            !isDestinationSelected
            ?
            (
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10'>
                    <div className="">
                        <label htmlFor="from" className="block mb-2 font-semibold">
                            From
                        </label>
                        <select name="from" value={from} onChange={handleFromChange} id='from' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                            <option value="">select location</option>
                            <option value="chennai">Chennai</option>
                            <option value="cuddalore">Cuddalore</option>
                            <option value="pondicherry">Pondicherry</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="kerala">Kerala</option>
                            <option value="hyderabad">Hyderabad</option>
                        </select>
                    </div>

                    <div className="">
                        <label htmlFor="to" className="block mb-2 font-semibold">
                            To
                        </label>
                        <select name="to" value={to} onChange={handleToChange} id='to' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                            <option value="">select location</option>
                            <option value="chennai">Chennai</option>
                            <option value="cuddalore">Cuddalore</option>
                            <option value="pondicherry">Pondicherry</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="kerala">Kerala</option>
                            <option value="hyderabad">Hyderabad</option>
                        </select>
                    </div>
                </div>
            )
            :
            (
                <div className='space-y-5'>
                    <h1 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium text-center sm:text-left">
                        Your Destination
                    </h1>
                    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <div className="w-fit text-base font-semibold">
                            From:- <span className="ml-1.5 font-medium">{from}</span>
                        </div>
                        <div className="flex-1">
                            <div className="w-full h-[1px] border border-dashed border-neutral-200 dark:border-neutral-800/80">
                            </div>
                        </div>
                        <div className="w-fit text-base font-semibold">
                            To:- <span className="ml-1.5 font-medium">{to}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Destination