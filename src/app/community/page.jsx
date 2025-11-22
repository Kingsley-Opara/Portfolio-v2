import React from 'react'
import Navbar from '../components/navbar'
import MobileNavbar from '../components/mobileNavbar'

function Page() {
  return (
    <div>
        <Navbar/>
        <MobileNavbar/>
        <main className='mt-10'>
            <h5 className='text-2xl font-semibold ml-10 font-sansita'>
                Contributions to 
                <span className='text-blue-400'> Community</span></h5>
                <div className='ml-10 w-[80%] mt-5 leading-normal'>
                    <p className='font-mono'>
                        I am dedicated in building and contributing to tech
                        communities in my locality. I'm currently the 
                        <span className='text-blue-400'><a href="https://ingressive.org/"> I4G</a></span> Lead
                        Student Ambassador in my school: 
                        <span className='text-blue-400'><a href="https://ingressive.org/"> Alex Ekwueme Federal University</a></span>
                        
                    </p>
                </div>
        </main>
    </div>
  )
}

export default Page