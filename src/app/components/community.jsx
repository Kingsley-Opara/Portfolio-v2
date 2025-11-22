import React from 'react'
import Image from 'next/image'
import { community } from '../lib/utilis'


function Community() {
  return (
    <div className='mt-15 p-4'>
        <div className='flex space-x-6 text-gray-400 place-content-center justify-center self-center items-center'>
            <span><hr className='w-10'/></span>
            <h4 className='font-mono text-center text-xl'>Community</h4>
        </div>
        <div className='mt-10 px-15 flex flex-col space-y-8 max-md:place-content-center'>
        {community.map((item) =>{
            return(
                <div className={`flex space-x-6 
                ${item.id % 2 === 0 ? "flex-row": "flex-row-reverse"}
                place-content-between 
                max-md:flex-col space-y-5 mt-15`} key={item.id}>
                    <div className=''>
                        <Image src={item.image} height={500} 
                        alt='some' width={400} className='rounded-xl'/>

                    </div>
                    
                    <div className='mt-10'>
                        <div className='flex space-x-3 text-sm'>
                            <p className='text-blue-400'>{item.role}</p>
                            <p className='text-blue-400'>{item.community}</p>
                        </div>
                        <div className='mt-5 space-y-5'>
                            <h5 className='text-xs'>{item.date}</h5>
                            
                            <p className='text-2xl'>{item.event}</p>

                            <p className='text-lg'>
                                {item.topic}
                            </p>
                            
                            {/* <button >About</button> */}
                            <div className='flex'>

                                {item.about && 
                                <button className='bg-blue-400 px-3 py-2 w-50 
                                rounded-2xl cursor-pointer hover:bg-black hover:border-1 
                                hover:border-blue-400 
                                hover:shadow-blue-400 hover:shadow-md'>
                                    About

                                </button>}
            


                            </div>
                            
                            
                        </div>
                    </div>

                </div>

            )
        })}

            {/* end */}




        </div>
        
        
    </div>
  )
}

export default Community