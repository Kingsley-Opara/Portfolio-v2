"use client"
import React, { useState, useEffect } from 'react'
import { CiDark} from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMoon } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdLaptopChromebook } from "react-icons/md";
import { useTheme } from 'next-themes';
import { navbarList } from '../lib/utilis';

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [activeSession, setActiveSession] = useState("home")

    const handleScroll = () =>{
        const scrollPostion = window.scrollY + window.innerHeight / 3

        let current = "home"

        for (const section of navbarList){
            const sec = document.getElementById(section.id)

            if (sec && sec.offsetTop <= scrollPostion){
                console.log("hi")
                current = section.id
                
                
            }
            setActiveSession(current)
            
            
        }
        
        

        
    }

    useEffect(() => {
        setMounted(true)
        window.addEventListener("scroll", handleScroll)
        console.log(activeSession)
        return () => window.removeEventListener("scroll", handleScroll)
        
        
    }, []);
    if (!mounted) return null;
  return (
    <div className='my-4'>
        <nav className='flex place-content-between'>
            <div className='flex space-x-2 pl-6 mt-2'>
                <div className='font-sansita text-lg text-blue-600'>
                    Kingsley

                </div>
                <div className='font-monda text-lg font-bold pt-1'>
                    Udochukwu
                </div>
            </div>
            <div className='mt-3 font-sansita max-md:hidden text-lg'>
                <ul className='flex space-x-5'>
                    {navbarList.map((item)=>{
                        return(
                            <li className={`cursor-pointer 
                            hover:text-blue-400
                            ${activeSession === item.id ? "text-blue-400": ""} `} 
                            key={item.id}>
                                <a href={`#${item.link}`}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>

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
                    className=' text-sm cursor-pointer font-mono max-md:text-sm'>
                        <button className='px-2 border-2 border-black dark:border-white 
                        rounded-xl lg:text-xs py-1 cursor-pointer p-6 h-9'>
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