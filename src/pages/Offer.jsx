import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaCopy} from "react-icons/fa";
import Save from "../assets/save.png";

const Offer = () => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("GTECH08")
        .then(() => {
            setCopied(true);
            setTimeout(() => {
                setCopied(false)
            }, 2000);
        })
        .catch((err) => {
            console.log('Failed to copy ',err)
        })
    }

  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]'>
        <div className="w-full items-center flex justify-between">
            <h1 className="text-2xl font-medium mb-6">
                Special Offer
            </h1>
            <Link to={"/offer"} className="text-violet-600">view all</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-16">
            <div className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-md">
                <img src={Save} alt='save img' className="w-32 sm:w-40 md:w-52 aspect-[2/1] object-contain object-center" /> 
                <div className="flex flex-1 flex-col space-y-5">
                    <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                       Get 40% OFF 
                    </h1> 

                    <div className="flex items-center gap-x-5">
                        <div className="w-fit border border-dashed px-4 py-1 border-neutral-300 dark:border-neutral-800 bg-violet-500/10 dark:bg-violet-800/5 rounded-md p-3">
                            {
                                copied
                                ?
                                <span className="text-green-600">Copied</span>
                                :
                                <span className="text-violet-600">GTECH08</span>
                            }
                        </div>

                        <button onClick={handleCopy}  className="text-xl text-violet-600">
                            <FaCopy />
                        </button>
                    </div>
                    <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
                        Valid till : <span className="text-sm font-medium">19th April</span>
                    </p>   
                </div>         
            </div>


             <div className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-md">
                <img src={Save} alt='save img' className="w-32 sm:w-40 md:w-52 aspect-[2/1] object-contain object-center" /> 
                <div className="flex flex-1 flex-col space-y-5">
                    <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">
                       Get 40% OFF 
                    </h1> 

                    <div className="flex items-center gap-x-5">
                        <div className="w-fit border border-dashed px-4 py-1 border-neutral-300 dark:border-neutral-800 bg-violet-500/10 dark:bg-violet-800/5 rounded-md p-3">
                            {
                                copied
                                ?
                                <span className="text-green-600">Copied</span>
                                :
                                <span className="text-violet-600">GTECH08</span>
                            }
                        </div>

                        <button onClick={handleCopy}  className="text-xl text-violet-600">
                            <FaCopy />
                        </button>
                    </div>
                    <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">
                        Valid till : <span className="text-sm font-medium">19th April</span>
                    </p>   
                </div>         
            </div>
        </div>
    </div>
  )
}

export default Offer