import {
  angular,
  javascript,
  typescript,
  html,
  css,
  tailwind,
  nodejs,
  figma,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Angular",
    icon: angular,
  },
  {
    title: "Node.js",
    icon: nodejs,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "Figma",
    icon: figma,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
];



const experiences = [
  {
    title: "Technology Analyst",
    company_name: "Infosys",
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Redesigned and transitioned legacy systems to modern Angular-based architectures, ensuring improved performance, scalability, and maintainability while maintaining compatibility with existing functionality.",
      "Collaborated with backend developers to design and integrate APIs",
      "Implementing responsive design using Adobe XD designs.",
      "Analysing legacy code and understanding the business logic and converting it to Angular.",
    ],
  },
  {
    title: "Senior Systems Engineer",
    company_name: "Infosys",
    iconBg: "#E6DEDD",
    date: "July 2023 - June 2024",
    points: [
      "Migrated legacy systems to Angular-based architectures",
      "Collaborated within a team of 5 web developers to deliver tailored solutions that met client requirements.",
      "Upgraded Angular from version 8 to the latest version, resulting in significant performance improvements and a better user experience.",
      "Designed and implemented responsive UI screens and developed new functionalities to enhance user interaction and application usability.",
    ],
  },
  {
    title: "Systems Engineer",
    company_name: "Infosys",
    iconBg: "#E6DEDD",
    date: "July 2021 - June 2023",
    points: [
      "– Designed and developed a comprehensive application to assist users in managing insurance for vehicles and properties, including the submission of claim requests for damages.",
      "Collaborated with UX/UI designers to implement visually appealing and user-friendly interfaces, ensuring a seamless user experience.",
      "Integrated RESTful APIs to connect front-end components with back-end services efficiently.",
      "Actively participated in agile development processes, contributing to iterative delivery and continuous improvement.",
    ],
  },
];





export { services,experiences };
