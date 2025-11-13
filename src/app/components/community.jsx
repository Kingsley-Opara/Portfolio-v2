import React from 'react'
import Image from 'next/image'

function Community() {
  return (
    <div className='mt-15 p-4'>
        <div className='flex space-x-6 text-gray-400 place-content-center justify-center self-center items-center'>
            <span><hr className='w-10'/></span>
            <h4 className='font-mono text-center text-xl'>Community</h4>
        </div>
        <div className='mt-20 px-15'>
            <div className='flex space-x-6 flex-row-reverse 
            place-content-between max-md:flex-col space-y-5'>
                <div className=''>
                    <Image src={"/image/devfest.jpeg"} height={500} alt='some' width={400}/>

                </div>
                
                <div>
                    <div className='flex space-x-3 text-sm'>
                        <p className='text-blue-400'>Speaker</p>
                        <p className='text-blue-400'>GDG</p>
                    </div>
                    <div className='mt-5 space-y-5'>
                        <h5 className='text-xs'>November 2024</h5>
                        
                        <p className='text-2xl'>DevFest Abakaliki 2023</p>

                        <p className='text-lg'>
                            Spoke on Understanding the Kubernetes Architecture
                        </p>
                        
                        {/* <button >About</button> */}
                        
                        
                    </div>
                </div>

            </div>
        </div>
        
        
    </div>
  )
}

export default Community