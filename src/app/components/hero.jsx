"use client"
import React from 'react'
// import kingsley from "/kingsley.jpg"
import Image from 'next/image'
import { FaGithub, FaLinkedinIn} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function Hero() {
  return (
    <main className='mt-20 p-4 w-full'>
        <div className='flex 
        place-content-between px-10 
        w-full max-md:flex-col-reverse'>
            <div className='w-[50%] max-md:w-full max-md:text-center max-md:mt-20'>
                <p className='text-sm font-mono overflow-auto whitespace-pre'>
                    -  MY  NAME  IS
                </p>
                <p className='text-xl mt-3 font-mono'>
                    <span className='text-black dark:text-white'>Kingsley</span>
                    <span className='text-purple-500'> Udochukwu</span>
                </p>
                <p className='mt-4 font-mono text-sm'>
                    Creative FullStack Developer with over 3 years of exprience in 
                    enetrprise companies and startups. Proficient in building versatile
                    and robust Frontend and Backend Systems, while also crafting user experiences
                    that feel effortless and responsive. 

                </p>
                <div className='mt-5'>
                    <ul className='flex space-x-6 max-md:mx-auto max-md:self-center max-md:place-content-center'>
                        <li className='cursor-pointer'>
                            <FaGithub/>
                        </li>
                        <li className='cursor-pointer'>
                            <FaXTwitter/>
                        </li>
                        <li className='cursor-pointer'>
                            <FaLinkedinIn/>
                        </li>
                    </ul>

                </div>


            </div>
            <div className='mr-20 max-md:mx-auto max-md:self-center mt-10'>
                <div className='relative max-lg:hidden lg:mt-10'>
                    <Image src={"/image/back.png"} alt='some' width={200} height={200}/>
                </div>
                <div className='absolute bottom-18 max-md:bottom-0 max-lg:hidden max-2xl:top-40 max-2xl:bottom-8'>
                    <Image 
                    src={'/image/kingsleyy.png'} 
                    width={200} 
                    height={200}
                    className='' 
                    alt='some'/>
                </div>
                <div className='lg:hidden'>
                    <Image 
                    src={'/image/kingsleyy.png'} 
                    width={200} 
                    height={200}
                    className='' 
                    alt='some'/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Hero