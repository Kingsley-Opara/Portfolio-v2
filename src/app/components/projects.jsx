"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import { projects } from "../lib/utilis";
import { Typewriter } from "react-simple-typewriter";


export default function EmblaSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align:"start" });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.on("select", () => console.log(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  return (
    <div className="relative mt-30" id="projects">
      <div className="font-mono flex space-x-3 pl-12">
        <hr className="w-10 text-black  dark:text-white text-bold mt-3"/>
        <div className="text-gray-400 text-lg">
          My Works
        </div>

      </div>
      <div className="text-gray-400 text-lg text-bold pl-12 mt-5 font-mono">
        Featured Portfolio
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-2">
          {projects.map((project) => (
            
           
            <div
              key={project.id}
              className="flex-[0_0_50%] max-md:flex-[0_0_100%] min-w-0 flex h-140 flex-col items-center 
              space-y-1 justify-center place-content-center align-middle mt-0"
            >
              
              <div className="text-center text-purple-400 font-sansita text-xl mt-1">
                <span className="text-gray-500">Project Type: </span>
                <Typewriter
                  words= 
                  {project.projectType === "Frontend" ? 
                    ["Frontend", "UI Design", 'Next.js'] : 
                    ["Backend", "API", "Python"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={120}
                  delaySpeed={1000}
                />
              </div>
              {/* <div className="">
                <Image src={project.image} alt="image" height={400} width={500}/>

              </div>
              <div className="text-center text-sm font-mono p-3 indent-0 bg-gray-900 w-140 text-white ml-2">
                <p>{project.description}</p>
              </div> */}


              <a href={project.link} className="flex mt-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm  md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-500">
                  <Image className="object-cover max-md:object-contain w-full rounded-t-lg h-120 max-md:h-auto md:h-auto md:w-120 max-md:w-80 max-md:flex-row md:rounded-none md:rounded-s-lg" src={project.image} alt="" height={400} width={600}/>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                  </div>
              </a>

            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-500/40 text-white px-3 py-1 rounded-full text-2xl cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-500/40 text-white px-3 py-1 text-2xl rounded-full cursor-pointer"
      >
        ›
      </button>

      
    </div>
  );
}
