import React from 'react'
import Navbar from '../components/navbar'
import MobileNavbar from '../components/mobileNavbar'
import CommunityEvents from '../components/communityEvents'

function Page() {
  return (
    <div>
        <Navbar/>
        <MobileNavbar/>
        <main className='mt-10'>
            <h5 className='text-2xl font-semibold ml-10 font-sansita'>
                Contributions to 
                <span className='text-blue-400'> Communities</span></h5>
                <div className='ml-10 w-[90%] mt-5 leading-normal'>
                    <p className='font-mono'>
                        I am dedicated in building and contributing to tech
                        communities in my locality. I'm currently the 
                        <span className='text-blue-400'><a href="https://ingressive.org/"> I4G</a></span> Lead
                        Student Ambassador in my school: 
                        <span className='text-blue-400'><a href="https://ingressive.org/"> Alex Ekwueme Federal University .</a></span>
                        While holding this position, I organise tech events for my local student community.
                        
                    </p>

                    <p className='font-mono mt-5'>
                      I have also spoken on various tech events on topics ranging
                      from the application and adpotion of DevOps to AI related topics.
                      This has further sharpen my public speaking skills and have addressed
                      multiple audiences.


                    </p>
                    <p className='font-mono mt-5'>
                      The following are some communities events that I can keep track of:
                    </p>
                </div>
                <CommunityEvents/>
        </main>
    </div>
  )
}

export default Page