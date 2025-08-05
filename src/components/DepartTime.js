import React from 'react'
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';


const DepartTime = () => {

    const [departBus,setDepartBus] = useState('');
   // const navigate = useNavigate();

const calculateArriveAtTime = (departureTime) => {
    const [time, meridian] = departureTime.split(' ');
    let [hours, minutes] = time.split(':').map(Number);

    // Convert to 24-hour
    if (meridian === 'PM' && hours !== 12) {
      hours += 12;
    } else if (meridian === 'AM' && hours === 12) {
      hours = 0;
    }

    // Add 5 hours
    hours += 5;

    // Wrap around if >= 24
    if (hours >= 24) {
      hours -= 24;
    }

    // Convert back to 12-hour format
    const isPM = hours >= 12;
    const displayHours = hours % 12 || 12;
    const displayMeridian = isPM ? 'PM' : 'AM';

    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${displayMeridian}`;
  };

    
    const handleDepartBusChange = (e) => {
        const value = e.target.value;
        setDepartBus(value);
        localStorage.setItem('departureTime', value);
        localStorage.setItem('arriveAt', calculateArriveAtTime(value));

        /* if (value) {
        navigate('/checkout');  
      } */
    }
    
  return (
    <div className='w-full space-y-4'>
        {
            !departBus
            ?
            (
                <div className='w-full grid grid-cols-2 gap-10'>
                    <div className="">
                        <label htmlFor="departbus" className="block mb-2 font-semibold">
                            Depart Time
                        </label>
                        <select name="departbus" value={departBus} onChange={handleDepartBusChange} id='departbus' className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900">
                            <option value="">select a Time</option>
                            <option value="04:00 AM">04:00 AM</option>
                            <option value="04:00 PM">04:00 PM</option>
                            <option value="06:30 PM">06:30 PM</option>
                            <option value="05:00 AM">05:00 AM</option>
                            <option value="09:30 AM">09:30 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                        </select>
                    </div>
                </div>
            )
            :
            (
                <div className='space-y-5'>
                    <div className="w-full flex items-center gap-x-3">
                        <div className="w-fit text-base font-semibold">
                            Bus Depart at:- <span className="ml-1.5 font-medium">{departBus}</span>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default DepartTime