import { SiRuby,SiPython, SiCss3, SiPhp, SiNodedotjs, SiSymfony, SiMysql, SiHtml5, SiJavascript, SiLaravel, SiReact } from "react-icons/si";
import { FaJava } from "react-icons/fa";


export type skillProps ={
    name:string;
    icon:React.ReactNode,
}

export const SkillDetails =[
    {
        name: "HTML5",
        icon: <SiHtml5 size={40}/>,
    },
    {
        name: "CSS",
        icon: <SiCss3 size={40}/>,
    },
    {
        name: "PHP",
        icon: <SiPhp size={40}/>,
    },
    {
        name: "Javascript",
        icon: <SiJavascript size={40}/>,
    },
    {
        name: "NodeJS",
        icon: <SiNodedotjs size={40}/>,
    },
    {
        name: "React",
        icon: <SiReact size={40}/>,
    },
    {
        name: "Symfony",
        icon: <SiSymfony size={40}/>,
    },
    {
        name: "Laravel",
        icon: <SiLaravel size={40}/>,
    },
    {
        name: "MYSQL",
        icon: <SiMysql size={40}/>,
    },    {
        name: "Ruby",
        icon: <SiRuby size={40}/>,
    },
    {
        name: "Java",
        icon: <FaJava size={40}/>,
    },
    {
        name: "Python",
        icon: <SiPython size={40}/>,
    },
]