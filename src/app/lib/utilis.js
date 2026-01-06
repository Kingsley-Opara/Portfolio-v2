import { SiPython, SiDjango, SiFastapi, SiSolidity } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact, FaDocker } from "react-icons/fa";
import { IoFlowerOutline } from "react-icons/io5";
import { TbWorldDown } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { IoIosAppstore } from "react-icons/io";


export const skills = [
    {
        title: "Python",
        logo: <SiPython/>
    },
    {
        title: "Django",
        logo: <SiDjango/>
    },
    {
        title: "FastAPI",
        logo: <SiFastapi/>
    },
    {
        title: "Solidity",
        logo: <SiSolidity/>
    },
    {
        title: "Next.js",
        logo: <RiNextjsLine/>
    },
    {
      title: "React.js",
      logo: <FaReact/>
    },
    {
        title: "Docker",
        logo: <FaDocker/> 
    },
    {
        title: "Community",
        logo: <IoFlowerOutline/>
    },
    {
        title: "Technical writing",
        logo: <IoFlowerOutline/>
    }
]

export const services = [
    {
        id: 1,
        title: "Web Development",
        logo: <TbWorldDown className="text-center"/>,
        text: "Crafting user expriences that feel effortless and responsive with emphasis on 'design-driven' development and highly functional user interfaces"
    },

    {
        id: 2,
        title: "DevOps Engineer",
        logo: <VscAzureDevops/>,
        text: "Bridging development and operations gaps through seamless integration, automation and continuous delivery practices"
    },

    {
        id: 3,
        title: "App Development",
        logo: <IoIosAppstore/>,
        text: "Design, build and maintain high performance, cross-platform mobile application using flutter framework to deliver seamless user experience across Android and IOS platform"
    },
]

export const projects = [
    {
        id: 1,
        image: '/image/techrity.jpeg',
        title: "Techrity",
        link: "https://mentlyfetest.netlify.app/",
        description: `
        Techrity is a dashboard that helps mentors to  easily assign tasks to their
        students, something more like a project management dashboard. Offers varieties
        of options including light/dark mode features. Tech stack includes: 
        Next.js and TailwindCSS
        `,
        projectType: "Frontend"
    },
    {
        id: 2,
        image: '/image/fintech.jpeg',
        title: "Fintech Savings and Investment App",
        link: "https://fintechsavings.netlify.app/dashboard",
        description: `
        This is a highly responsive fintech savings and investment dashboard that offers
        smooth user flow and follows modern practices of building frontend applications.
        Ofers varities of features including: Next.js and Tailwind CSS.
        `,
        projectType: "Frontend"

    },
    {
        id: 3,
        image: '/image/jobpilot.jpeg',
        title: "Jobpilot",
        link: "https://job-listing-application.netlify.app/",
        description: `
        Jobpilot is a mobile responsive and job listing application that
        allows users to search, filter and also apply for jobs. It offers
        a smooth user flow and well paginated data. Tech Stack includes:
        Next.js, Tailwind CSS and Remotive API. 
        `,
        projectType: "Frontend"
    },
    {
        id: 4,
        image: '/image/manage.png',
        title: "Manage",
        link: "https://main--kingsley-tailwind-landingpage.netlify.app/",
        description: `
        Manage is a basic responsive landing page. Tech stack includes: HTML5,
        TailwindCSS and Javascript. 
        `,
        projectType: "Frontend"
    },
    {
        id: 5,
        image: "image/carol.png",
        title: "Carol of Nine Lessons",
        link: "https://fecamds-aefunai.netlify.app/",
        description: `
        A Full Stack event registration web application for  FECAMDS AE-FUNAI  christmas carol . 
        Highly responsive and built using modern technologies such as: Next.js, Django, Django Ninja , 
        PayStack, Neon Serverless Database and TailwindCSS.  This event registration application is 
        integrated with paystack and accepts real time payment. 
        Offers varieties of options including light/dark mode using Next-themes and smooth user flow.
        `,
        projectType: "Full-Stack"

    }
]

export const navbarList = [
    {
        id: 1,
        name: "Services",
        link: "services"
    },

    {
        id: 2,
        name: "Portfolio",
        link: "projects"
    },
    {
        id: 3,
        name: "Blog",
        link: "#blog"
    },
    {
        id: 4,
        name: "Community",
        link: "/community"
    },
]

export const community = [
    {
        id: 1,
        role: "Speaker",
        community: "GDG",
        date: "November 2023",
        event: "DevFest Abakaliki 2023",
        image: "/image/devfest.jpeg",
        topic: "Understanding Kubernetes Architecture", 
        about: true
        
    },

    {
        id: 2,
        role: "Speaker",
        community: "GDG",
        date: "November 2025",
        event: "Google I/O Extended After-party Aba",
        image: "/image/googleIOEX.jpeg",
        topic: "Optimising Gemini with Domain Specific Data", 
        about: true
        
    },

    {
        id: 3,
        role: "Speaker",
        community: "GDG",
        date: "November 2024",
        event: "Build with AI",
        image: "/image/buildWithAI.jpeg",
        topic: "Understanding How LLM's Work and Gemini API Structure", 
        about: true
        
    }
]