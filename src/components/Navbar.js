import React from 'react'
import { Link } from 'react-router-dom';

import Logo from "../assets/logo.png"
import { LiaTimesSolid } from 'react-icons/lia';
import { FaBars, FaPhone } from 'react-icons/fa6';
import Theme from '../components/Theme';

const Navbar = () => {

    const [open, setOpen] = React.useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/bus", label: "Bus" },
        { href: "/bus/bus-details", label: "Services" },
    ]

    const handleClick = () => {
        setOpen(!open);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    React.useEffect(() => {
    if (open) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
    }, [open]);
    return (
        <div className='w-full h-[8ch] bg-neutral-100 dark:bg-neutral-900 flex items-center md:flex-row lg:px-28 md:px-16 sm:px-7 px-4 fixed top-0 z-50'>
            {/* Logo section */}
            <Link to={"/"} className='mr-16'>
                <img src={Logo} alt="logo" className="w-28 h-auto object-contain" />
            </Link>

            {/* Toggle button */}
            <button onClick={handleClick} className="flex-1 lg:hidden text-neutral-600 dark:text-neutral-300 ease-in-out duration-300 flex items-center justify-end">
                {
                    open ?
                        <LiaTimesSolid className='text-xl' />
                        :
                        <FaBars className='text-xl' />
                }
            </button>

            {/* Navigation links */}
            <div className={`md:flex md:flex-row md:static absolute top-[8ch] left-0 w-full md:w-auto z-40 bg-neutral-100 dark:bg-neutral-900 md:bg-transparent md:shadow-none shadow-lg transition-all duration-300 ease-in-out ${open ? 'flex flex-col p-6 gap-6' : 'hidden'}`}>
                <ul className="list-none flex md:items-center items-start gap-x-5 gap-y-3 md:gap-y-1 flex-wrap md:flex-row flex-col text-base text-neutral-600 dark:text-neutral-500 font-medium">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.href}
                                onClick={handleClose}
                                className="hover:text-violet-600 ease-in-out duration-300"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="flex md:items-center items-start gap-x-5 gap-y-2 flex-wrap md:flex-row flex-col text-base font-medium text-neutral-800">
                    
                    {/* Mobile help button – shows only on small screens */}
                    <div className="md:hidden w-full mt-3 bg-violet-600 rounded-md px-5 py-3 text-center text-sm text-white">
                        <p className="text-xs font-light">Need Help?</p>
                        <p className="text-sm font-medium">+91-9283746510</p>
                    </div>
                    
                    {/* Floating Help Button – Top Right for Desktop */}
                    <div className="hidden lg:flex fixed top-4 right-4 z-50 items-center gap-3">
                        <div className="flex items-center bg-violet-600 rounded-md px-4 py-2 shadow-lg text-white  gap-2">
                         <FaPhone className="text-white text-sm" />
                            <div className="space-y-0.5">
                                <p className="text-xs font-light leading-none">Need Help?</p>
                                <p className="text-sm font-medium leading-none">+91-9283746510</p>
                            </div>
                        </div>

                     {/* Theme */}
                    <Theme />
                </div>

                    
                   
                </div>
               
            </div>

            {open && (
                <div 
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
                    onClick={handleClose}
                />
            )}

        </div>
    )
}

export default Navbar