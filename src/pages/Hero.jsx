import React from 'react';
import { motion} from 'framer-motion';
import Bus2 from '../assets/bus5.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    
    const imageVariants = {
        initial: {
            x: "100%",
        },
        animate: {
            x: "3%",
            transition: {
                duration: 3,
                ease:"easeInOut",
            }
        }
    }

  return (
    <div  className='w-full h-[calc(100vh-8ch)] lg:ps-28 md:ps-16 sm:ps-7 ps-4 mt-[8ch] flex items-center justify-center flex-col hero relative'>
        <div className="flex-1 w-full flex items-stretch justify-between gap-12 pb-10">
            <motion.dev className="w-[35%] h-auto rounded-md flex justify-center flex-col space-y-14" 
                initial={{opacity:0, y:-10}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.5, ease: "linear",delay:0.2}} >

                <motion.dev className="space-y-5"
                    initial={{opacity:0, y:-10}}
                    animate={{opacity:1, y:0}}
                    transition={{duration:1, ease: "linear",delay:0.2}}
                >
                    <motion.h1 className='text-7xl font-bold text-neutral-50 leading-[1.15]'
                        initial={{opacity:0, y:-10}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:2, ease: "linear",delay:0.4}}
                    >
                        reserve a Bus
                        <span className=" text-violet-400 tracking-wider">Tickets</span>
                        Now
                    </motion.h1>
                    <motion.p className='text-lg font-normal text-neutral-300 line-clamp-3-text-ellipsis'
                        initial={{opacity:0, y:-10}}
                        animate={{opacity:1, y:0}}
                        transition={{duration:2, ease: "linear",delay:0.6}}
                    >
                       find and book your tickets
                    </motion.p>
                </motion.dev>
                <Link to="/bus/bus-details">
                    <motion.button className="w-fit bg-violet-700 hover:bg-violet-800 text-neutral-50 font-medium py-3 px-6 rounded-md ease-in-out duration-300">
                        Reserve a seat Now
                    </motion.button>
                </Link>
            </motion.dev>

            <div className="w-[70%] h-full rounded-md flex items-end justify-end absolute top-0 -right-48">
                <motion.img 
                  className='w-full aspect-[4/2] object-contain'
                  src={Bus2}
                  alt='bus image'
                  initial="initial"
                  animate="animate"
                  variants={imageVariants}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero