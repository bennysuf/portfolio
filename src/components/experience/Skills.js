import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { DiRubyRough } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiPostgresql } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiRubysinatra } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import {VscJson} from "react-icons/vsc"

const skillSet = [
  {
    id: 1,
    name: "Javascript",
    icon: <IoLogoJavascript />,
    type: "language",
    category: "frontend",
  },
  {
    id: 2,
    name: "React.js",
    icon: <FaReact />,
    type: "framework",
    category: "frontend",
  },
  {
    id: 3,
    name: "Ruby",
    icon: <DiRubyRough />,
    type: "language",
    category: "backend",
  },
  {
    id: 4,
    name: "Rails",
    icon: <SiRubyonrails />,
    type: "framework",
    category: "backend",
  },
  {
    id: 5,
    name: "Python",
    icon: <FaPython />,
    type: "language",
    category: "backend",
  },
  {
    id: 6,
    name: "HTML",
    icon: <AiFillHtml5 />,
    type: "language",
    category: "frontend",
  },
  {
    id: 7,
    name: "CSS",
    icon: <DiCss3 />,
    type: "language",
    category: "frontend",
  },
  {
    id: 8,
    name: "SQL",
    icon: <AiOutlineConsoleSql />,
    type: "language",
    category: "backend",
  },
  {
    id: 9,
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    type: "database",
    category: "backend",
  },
  {
    id: 10,
    name: "SQLite",
    icon: <SiSqlite />,
    type: "database",
    category: "backend",
  },
  {
    id: 11,
    name: "Sinatra",
    icon: <SiRubysinatra />,
    type: "API",
    category: "backend",
  },
  {
    id: 12,
    name: "REST API",
    icon: <TbApi />,
    type: "API",
    category: "backend",
  },
  {
    id: 13,
    name: "JSON",
    icon: <VscJson />,
    type: "API",
    category: "frontend",
  },
  {
    id: 14,
    name: "Firebase",
    icon: <SiFirebase />,
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
