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