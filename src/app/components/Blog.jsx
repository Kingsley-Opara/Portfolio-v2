import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className="container mx-auto mt-30 ml-6 w-full" >
        <div className="font-mono flex space-x-3 pl-12">
            <hr className="w-10 text-black  dark:text-white text-bold mt-3"/>
            <div className="text-gray-400 text-lg">
                My Blogs
            </div>

        </div>


        <div className="mt-10 w-[100vw]">

            <a href="#" className="flex flex-col items-center 
            bg-neutral-primary-soft p-2 border dark:border-gray-600 border-gray-700
            rounded-2xl shadow-xs md:flex-row max-md:max-w-[80%] max-md:ml-5 md:w-[50%]">
                <Image className="object-cover w-full rounded-base h-100 md:h-auto md:w-48 mb-4 md:mb-0" 
                src="/image/blog/semantic.jpg" 
                width={400}
                height={400}
                alt=""/>

                <div className="flex flex-col justify-between md:p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight 
                    text-heading">Streamlining your design process today.</h5>
                    <p className="mb-6 text-body">In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.</p>
                    <div>
                        <button type="button" className="inline-flex items-center w-auto text-body 
                        bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium 
                        hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium 
                        leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                            Read more

                        </button>
                    </div>
                </div>
            </a>

      </div>
    </div>
  )
}

export default Blog
