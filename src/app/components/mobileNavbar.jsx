"use client"
import React from 'react'
import { TiSpannerOutline } from "react-icons/ti";
import { FaBriefcase } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { Tooltip } from "react-tooltip";

function MobileNavbar() {
  return (
    <div className='dark:bg-white lg:hidden bg-black text-white
    fixed dark:text-black bottom-10 w-fit rounded-full px-5 left-1/2 -translate-x-1/2'>
        <li className='flex space-x-12 py-4'>
            <ul
                data-tooltip-id="my-tooltip" 
                data-tooltip-content="Service" 
                className='cursor-pointer hover:text-blue-400 dark:text-black'>
                <Tooltip id="my-tooltip" place='top'></Tooltip>
                <TiSpannerOutline />
                
                
            </ul>
            <ul 
                data-tooltip-id="portfolio-tooltip" 
                data-tooltip-content="Portfolio" 
                className='cursor-pointer hover:text-blue-400 dark:text-black'
            >
                <Tooltip id="portfolio-tooltip" place='top'></Tooltip>

                <FaBriefcase/>
            </ul>
            <ul 
                data-tooltip-id="blog-tooltip" 
                data-tooltip-content="Blog" 
                className='cursor-pointer hover:text-blue-400 dark:text-black'>
                <Tooltip id="blog-tooltip" place='top'></Tooltip>
                <FaBlog/>
            </ul>
            <ul 
                data-tooltip-id="home-tooltip" 
                data-tooltip-content="Home" 
                className='cursor-pointer hover:text-blue-400 dark:text-black'>
                <Tooltip id="home-tooltip" place='top'></Tooltip>
                <CiHome/>
            </ul>
        </li>

    </div>
  )
}

export default MobileNavbar