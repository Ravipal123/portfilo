import {DiReact} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress,SiMongodb} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

export const menu = [
    {name:"About"},
    {name:"Skill"},
    {name:"Projects"},
    {name:"Contact"},
];

export const projects = [
    {
        id:1,
        title:'E-Commerce Application',
        image: 'https://i.imgur.com/i1tccSj.jpeg',
        category:'web',
        data:{
            description:`Enhance your online shopping experience with our E-Commerce Application 
            UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
            interface offers easy navigation, personalized recommendations, and secure 
            transactions. Elevate your digital storefront and captivate customers with a visually 
            stunning design tailored to your brand `,
            demoLink:'https://myfirstapp-6e4c3.web.app/',
        },
        stack:[
            {
                name:"ReactJs",
                icon: <DiReact/>,
                iconColor:"skyblue",
            },
            {
                name:"NodeJs",
                icon: <FaNodeJs/>,
                iconColor:"green",
            },
            {
                name:"ExpressJs",
                icon: <SiExpress/>,
            },
            {
                name:"MongoDB",
                icon: <SiMongodb/>,
                iconColor:"limegreen",
            },
        ]
    },
    {
        id:2,
        title:'Rental Property Website',
        image:'https://i.imgur.com/X4LIdMq.jpeg',
        category:'web',
        data:{
            description:`Enhances the property search experience with feactures like dynamic 
            property listings, location and social media sharing capabilities.The platform 
            aims to simply the process of finding or listing properties by offering a 
            user-friendlly interface and a set of interactive tools `,
            demoLink:'https://real-state-nine-delta.vercel.app/',
        },
        stack:[
            {
                name:"ReactJs",
                icon: <DiReact/>,
                iconColor:"skyblue",
            },
            {
                name:"NodeJs",
                icon: <FaNodeJs/>,
                iconColor:"green",
            },
            {
                name:"ExpressJs",
                icon: <SiExpress/>,
            },
            {
                name:"MongoDB",
                icon: <SiMongodb/>,
                iconColor:"limegreen",
            },
        ]
    },
    {
        id:3,
        title:'Task Manager',
        image:'https://i.imgur.com/OHUNpvm.jpeg',
        category:'web',
        data:{
            description:`Intuitive task manager built with Next.js, designed to help 
            you organize your work and boost productivity. Whether you're managing a 
            personal to-do list or collaborating on a team project, TaskFlow offers 
            a seamless experience tailored to your needs. Create, edit, and organize 
            tasks with flexible workflows that adapt to your unique process. `,
            demoLink:'https://task-manager-next-js-self.vercel.app/login',
        },
        stack:[
            {
                name:"NextJs",
                icon: <RiNextjsFill/>,
            },
            {
                name:"NodeJs",
                icon: <FaNodeJs/>,
                iconColor:"green",
            },
            {
                name:"ExpressJs",
                icon: <SiExpress/>,
            },
            {
                name:"MongoDB",
                icon: <SiMongodb/>,
                iconColor:"limegreen",
            }
        ]
    },
    {
        id:4,
        title:'Imeleo Website',
        image:'https://i.imgur.com/WsfdwN5.jpeg',
        category:'Freelance',
        data:{
            description:`Bring your website to life with our fully responsive and animated 
            frontend project. Combining modern design with seamless interactivity, this project
            ensures captivating visuals, smooth animations, and an exceptional user experience.
            Create a dynamic digital presence that aligns perfectly with your brand identity.`,
            demoLink:'https://landingpage-project-peach.vercel.app/',
        },
        stack:[
            {
                name:"NextJs",
                icon: <RiNextjsFill/>,
            },
            {
                name:"NodeJs",
                icon: <FaNodeJs/>,
                iconColor:"green",
            },
            {
                name:"ExpressJs",
                icon: <SiExpress/>,
            },
            {
                name:"MongoDB",
                icon: <SiMongodb/>,
                iconColor:"limegreen",
            }
        ]
    },
    {
        id:5,
        title:'Calender Note',
        image:'https://i.imgur.com/sbkt12h.jpeg',
        category:'web',
        data:{
            description:`Intuitive Calender Task manager built with React.js, designed to help 
            you organize your work and boost productivity. Whether you're managing a 
            personal to-do list or collaborating on a team project, TaskFlow offers 
            a seamless experience tailored to your needs. Create, edit, and organize 
            tasks with flexible workflows that adapt to your unique process. `,
            demoLink:'https://calender1.vercel.app/',
        },
        stack:[
            {
                name:"ReactJs",
                icon: <DiReact/>,
            },
            {
                name:"NodeJs",
                icon: <FaNodeJs/>,
                iconColor:"green",
            },
            {
                name:"ExpressJs",
                icon: <SiExpress/>,
            },
            {
                name:"MongoDB",
                icon: <SiMongodb/>,
                iconColor:"limegreen",
            }
        ]
    },
    {
        id:6,
        title:'Crypto Tracker',
        image:'https://i.imgur.com/e8Fn6Jk.jpeg',
        category:'web',
        data:{
            description:`Bring your Crypto Tracker to life with our fully responsive and animated 
            frontend project. Combining modern design with seamless interactivity, this project
            ensures captivating visuals, smooth animations, and an exceptional user experience.
            Real-time updating of the crpto coins in any language.  `,
            demoLink:'https://github.com/Ravipal123/crypto_project',
        },
        stack:[
            {
                name:"ReactJs",
                icon: <DiReact/>,
            },
            {
                name:"NodeJs",
                icon: <FaNodeJs/>,
                iconColor:"green",
            },
            {
                name:"ExpressJs",
                icon: <SiExpress/>,
            },
            {
                name:"MongoDB",
                icon: <SiMongodb/>,
                iconColor:"limegreen",
            }
        ]
    },

];

export const experience = [
    {
        title:"Frontend Development",
        data:[
            {
                skill:"HTML",
                level:"Experienced",
            },
            {
                skill:"CSS",
                level:"Experienced",
            },
            {
                skill:"JavaScript",
                level:"Experienced",
            },
            {
                skill:"Tailwind",
                level:"Intermediate",
            },
            {
                skill:"Bootstrap",
                level:"Intermediate",
            },
            {
                skill:"React",
                level:"Intermediate",
            },
            {
                skill:"React Native",
                level:"Beginner",
            },
        ]
    },
    {
        title:"Backend Development",
        data:[
            {
                skill:"Node JS",
                level:"Intermediate",
            },
            {
                skill:"MangoDB",
                level:"Intermediate",
            },
            {
                skill:"MySQL",
                level:"Intermediate",
            },
        ]
    },
    {
        title:"Programming Languages",
        data:[
            {
                skill:"C",
                level:"Intermediate",
            },
            {
                skill:"C++",
                level:"Intermediate",
            },
            {
                skill:"Python",
                level:"Intermediate",
            }
        ]
    }
];

export const socialHandles = [
    {
        name:"Github",
        icon:<AiFillGithub/>,
        link:"https://github.com/Ravipal123",
    },
    {
        name:"LinkedIn",
        icon:<AiFillLinkedin/>,
        link:"https://www.linkedin.com/in/ready-to-join-your-company/",
    },
    {
        name:"Instagram",
        icon:<FaInstagram />,
        link:"",
    }
]