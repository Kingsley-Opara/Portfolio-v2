import React from 'react'
import Image from 'next/image'
import { community } from '../lib/utilis'
import CommunityEvents from './communityEvents'

function Community() {
  return (
    <div className='mt-15 p-4'>
        <div className='flex space-x-6 text-gray-400 place-content-center justify-center self-center items-center'>
            <span><hr className='w-10'/></span>
            <h4 className='font-mono text-center text-xl'>Community</h4>
        </div>
        <CommunityEvents/>

        
    </div>
  )
}

export default Community