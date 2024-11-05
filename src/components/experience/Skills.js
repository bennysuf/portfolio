import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { DiRubyRough } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
// import { SiPostgresql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSqlite } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiRubysinatra } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscJson } from "react-icons/vsc";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";

const skillSet = [
  {
    id: 1,
    name: "Javascript",
    icon: <IoLogoJavascript className="skill-icon" />,
    type: "language",
    category: "frontend",
  },
  {
    id: 2,
    name: "React.js",
    icon: <FaReact className="skill-icon" />,
    type: "framework",
    category: "frontend",
  },
  {
    id: 3,
    name: "Ruby",
    icon: <DiRubyRough className="skill-icon" />,
    type: "language",
    category: "backend",
  },
  {
    id: 4,
    name: "Rails",
    icon: <SiRubyonrails className="skill-icon" />,
    type: "framework",
    category: "backend",
  },
  {
    id: 14,
    name: "Java",
    icon: <FaJava className="skill-icon" />,
    type: "language",
    category: "backend",
  },
  {
    id: 13,
    name: "Spring-Boot",
    icon: <BiLogoSpringBoot className="skill-icon" />,
    type: "framework",
    category: "backend",
  },
  // {
  //   id: 5,
  //   name: "Python",
  //   icon: <FaPython className="skill-icon" />,
  //   type: "language",
  //   category: "backend",
  // },
  {
    id: 6,
    name: "HTML",
    icon: <AiFillHtml5 className="skill-icon" />,
    type: "language",
    category: "frontend",
  },
  {
    id: 7,
    name: "CSS",
    icon: <DiCss3 className="skill-icon" />,
    type: "language",
    category: "frontend",
  },
  {
    id: 8,
    name: "SQL",
    icon: <AiOutlineConsoleSql className="skill-icon" />,
    type: "language",
    category: "backend",
  },
  {
    id: 12,
    name: "MongoDB",
    icon: <SiMongodb className="skill-icon" />,
    type: "database",
    category: "backend",
  },
  {
    id: 9,
    name: "PostgreSQL",
    // icon: <SiPostgresql className="skill-icon"/>,
    icon: <BiLogoPostgresql className="skill-icon" />,
    type: "database",
    category: "backend",
  },
  {
    id: 10,
    name: "SQLite",
    icon: <SiSqlite className="skill-icon" />,
    type: "database",
    category: "backend",
  },
  {
    id: 11,
    name: "Sinatra",
    icon: <SiRubysinatra className="skill-icon" />,
    type: "API",
    category: "backend",
  },
  {
    id: 17,
    name: "REST API",
    icon: <TbApi className="skill-icon" />,
    type: "API",
    category: "backend",
  },
  {
    id: 15,
    name: "JSON",
    icon: <VscJson className="skill-icon" />,
    type: "API",
    category: "frontend",
  },
  {
    id: 16,
    name: "Firebase",
    icon: <SiFirebase className="skill-icon" />,
    type: "deployment",
    category: "devops",
  },

  // {
  //     id: ,
  //     name: "",
  //     icon: "",
  //     type: "",
  //     category: "",
  // },
];

export default skillSet;
