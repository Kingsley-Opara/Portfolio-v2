"use client"
import React, { useState, useEffect } from 'react'
import { CiDark} from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMoon } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdLaptopChromebook } from "react-icons/md";
import { useTheme } from 'next-themes';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
  return (
    <div className='my-4'>
        <nav className='flex place-content-between '>
            <div className='flex space-x-2 pl-6 mt-2'>
                <div className='font-sansita text-lg text-blue-600'>
                    Kingsley

                </div>
                <div className='font-monda text-lg font-bold pt-1'>
                    Udochukwu
                </div>
            </div>
            <div className='mt-3 font-sansita max-md:hidden text-sm'>
                <li className='flex space-x-5'>
                    <ul className='cursor-pointer hover:text-blue-400'>
                        Services
                    </ul>
                    <ul className='cursor-pointer hover:text-blue-400'>
                        Portfolio
                    </ul>
                    <ul className='cursor-pointer hover:text-blue-400'>
                        Blog
                    </ul>
                    <ul className='cursor-pointer hover:text-blue-400'>
                        Experenice
                    </ul>
                </li>
            </div>
            <div className='flex space-x-10 mr-3 max-md:space-x-5'>
                <div className='p-1 mt-3 rounded-full border-2 
                dark:border-white border-black h-fit w-fit max-md:mt-2 flex space-x-2 px-2 relative'>
                    <CiDark className='text-lg max-md:text-xs cursor-pointer'/>
                    <FaAngleDown 
                        onClick={() =>{setShowNavbar(!showNavbar)}}
                        className='cursor-pointer'/>
                    <div className={`absolute top-10 right-4 dark:bg-white dark:text-black h-fit p-1 w-[7rem] space-y-2 
                        ${!showNavbar && "hidden"}`}>
                        <div
                            onClick={() =>{setShowNavbar(!showNavbar), setTheme("dark"), console.log(document.documentElement.classList.value)}} 
                            className='flex space-x-2 hover:bg-blue-300 cursor-pointer'>
                            <IoIosMoon/>
                        <p className='text-xs'>Dark theme</p>

                        </div>
                        <div 
                            onClick={() =>{setShowNavbar(!showNavbar), setTheme("light")}}
                            className='flex space-x-2 hover:bg-blue-300 cursor-pointer'>
                            <CiLight/>
                            <p className='text-xs'>Light Theme</p>

                        </div>
                        <div
                            onClick={() =>{setShowNavbar(!showNavbar), setTheme("system")}} 
                            className='flex space-x-2 hover:bg-blue-300 cursor-pointer'>
                            <MdLaptopChromebook/>
                            <p className='text-xs'>System Default</p>

                        </div>

                    </div>
                    
                </div>
                
                <div className='mt-3 max-md:mt-2'>
                    <a href="/resume.pdf" download={"Opara Resume"} 
                    className=' text-lg cursor-pointer font-mono max-md:text-sm'>
                        <button className='px-2 border-2 border-black dark:border-white 
                        rounded-lg lg:text-xs py-1 cursor-pointer'>
                            Resume
                        </button>

                    </a>

                </div>

            </div>

        </nav>

        <hr  className='mt-3'/>

    </div>
  )
}

export default Navbar