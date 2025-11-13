import React from 'react'
import { services } from '../lib/utilis';
import { GoDash } from "react-icons/go";

function Services() {
  return (
    <div className='mt-20 p-5' id='service'>
        <div className='font-mono text-center space-y-4'>
            <div className='text-gray-300 self-center place-content-center flex justify-center align-middle space-x-2'>
                <hr className='w-10 self-center'/>
                <span className='text-gray-400'> Services</span>
            </div>
            <div className='text-xl'>Specialized In</div>
        </div>
        <div className='mt-10  grid grid-cols-3 gap-5 mx-auto 
        place-items-center max-md:grid-cols-1'>
          {services.map((service) =>{
            return(
              <div className='bg-white shadow-lg text-black dark:bg-gray-900 space-y-5 px-2
              dark:text-white flex flex-col w-80 h-60 self-center text-center align-middle font-mono' key={service.id}>

                <div className='self-center flex text-center mt-4 rounded-full bg-purple-300 p-3'>
                  {service.logo}
                </div>
                <p className='text-sm font-bold'>{service.title}</p>
                <p className='text-sm'>{service.text}</p>

              </div>
            )

          })}
        </div>
    </div>
  )
}

export default Services;