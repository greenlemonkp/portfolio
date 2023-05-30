import {
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  travel,
  interview,
  todo,
  url,
  carrent,
  jobit,
  tripguide,
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Expat-ations",
    school_name: "Lighthouse Labs",
    icon: travel,
    iconBg: "#383E56",
    date: "April 2023",
    points: [
      "Final group project for Lighthouse Labs.",
      "Smart app that compares multiple cities for travellers in various living factors",
      "Smart city suggestions by OpenAI's ChatGPT",
      "Tech Stack: NextJS, TailwindCSS, MUI, ChartJS",
    ],
  },
  {
    title: "Interview Scheduler",
    school_name: "Lighthouse Labs",
    icon: interview,
    iconBg: "#E6DEDD",
    date: "January 2023",
    points: [
      "React Project for Lighthouse Labs",
      "Interview scheduler app with edit and cancel functions",
      "Tech Stack: ReactJS",
    ],
  },
  {
    title: "Smart TODO App",
    school_name: "Lighthouse Labs",
    icon: todo,
    iconBg: "#383E56",
    date: "December 2022",
    points: [
      "Mid-term project for Lightouse Labs.",
      "Smart TODO app with auto categorization into Film, Restaurants, Books, Products, and General",
      "Auto-feature powered by multiple APIs. Friendly drag-n-drop feature added for convenience",
      "Tech Stack: EJS, Express, jQuery, Axios, Sass.",
    ],
  },
  {
    title: "TinyApp",
    school_name: "Lighthouse Labs",
    icon: url,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Project for Lighthouse Labs that allows users to shorten long URLs.",
      "Tech Stack: EJS, bjcryptjs, cookie-session, NodeJS, Express",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
