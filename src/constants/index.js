import {
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  expat,
  interviewApp,
  todoApp,
  threejs,
  stack,
  backend,
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
    title: "Full Stack Developer",
    icon: stack,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

  {
    title: "Frontend Developer",
    icon: frontend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const projects = [
  {
    name: "Expat-ations",
    description:
      "Created by Lighthouse Labs Web Dev students Hillary Forget, Joon Lee, Christian Alphonse and Clayton Van Imschoot for finals project. It allows users to compare cities on many elements and features ChatGPT suggested cities",
    tags: [
      {
        name: "Next JS",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: expat,
    source_code_link: "https://github.com/hillaryforget/Expat-ations",
  },
  {
    name: "Interview Scheduler",
    description:
      "React application that allows users to book an appointment with interviewers. It features user friendly UI and allows users to easily choose an interviewer and set up time. Also it has convenient Edit and Cancel buttons ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "Storybook",
        color: "pink-text-gradient",
      },
    ],
    image: interviewApp,
    source_code_link: "https://github.com/greenlemonkp/scheduler",
  },
  {
    name: "Smart ToDo App",
    description:
      "A simple To Do app that features auto-categorization using several APIs. TODO will be placed in the single category if API returns one, users will have options when there is multiple match.",
    tags: [
      {
        name: "Axios",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todoApp,
    source_code_link: "https://github.com/greenlemonkp/SmartTodoApp",
  },
];

export { services, technologies, projects };
