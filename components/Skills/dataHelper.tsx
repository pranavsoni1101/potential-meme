import React from 'react';

import { SiTypescript, SiNetlify, SiJavascript, 
    SiMysql, SiChakraui, SiNextdotjs,
    SiMaterialui, SiExpress, SiVisualstudiocode
   } from "react-icons/si"
import { DiMongodb, DiLinux } from "react-icons/di";
import { FaNodeJs, FaReact, FaPython, 
    FaGithub, FaWindows, FaJava, 
    FaBootstrap 
   } from "react-icons/fa";

export const programmingSkills = [
    {
        name: "Javascript",
        icon: <SiJavascript />
    },
    {
        name: "Typescript",
        icon: <SiTypescript />
    },
    {
        name: "Python",
        icon: <FaPython />
    },
    {
        name: "Java",
        icon: <FaJava />
    },
]

export const libraries = [
    {
        name: "NodeJS",
        icon: <FaNodeJs />
    },
    {
        name: "ReactJS",
        icon: <FaReact />
    },
    {
        name: "NextJS",
        icon: <SiNextdotjs />
    },
    {
        name: "ExpressJS",
        icon: <SiExpress />
    },
    {
        name: "Chakra Ui",
        icon: <SiChakraui />
    },
    {
        name: "Material Ui",
        icon: <SiMaterialui />
    },
    {
        name: "Bootstrap",
        icon: <FaBootstrap />
    },
]

export const tools = [
    
    {
        name: "GitHub",
        icon: <FaGithub />
    },
    {
        name: "Netlify",
        icon: <SiNetlify />
    },
    {
        name: "VS Code",
        icon: <SiVisualstudiocode />
    },
    {
        name: "Linux",
        icon: <DiLinux />
    },
    {
        name: "Windows",
        icon: <FaWindows />
    }
];

export const databases = [
    {
        name: "MongoDb",
        icon: <DiMongodb />
    },
    {
        name: "Mysql",
        icon: <SiMysql />
    },
]