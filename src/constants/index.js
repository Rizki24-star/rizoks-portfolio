import {
  aksesmu,
  contact,
  css,
  del,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  market,
  nextjs,
  nodejs,
  pricewise,
  react,
  restaurant,
  school,
  summiz,
  tailwindcss,
  typescript,
  bootstrap,
  laravel,
  flutter,
  nuxt,
  vue,
  youtube,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Frontend",
  },
  {
    imageUrl: flutter,
    name: "Flutter",
    type: "Mobile",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: nuxt,
    name: "Nuxt",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "Aksesmu",
    icon: aksesmu,
    iconBg: "#E8F8F5",
    date: "August 2023 - December 2023",
    points: [
      "Utilized frontend technology Nuxt.js for developing the Aksesmu company profile website.",
      "Conducted migration from Nuxt 2 to Nuxt 3 to leverage the latest features and enhance website performance.",
      "Implemented Typescript to improve code security, productivity, and scalability.",
      "Leveraged the responsive and mobile-first features of Nuxt 3 to unify mobile and desktop views into a single integrated project.",
      "Adjusted project structure and UI components to simplify and improve complexity.",
      "Develop the detailed store feature in Aksesmu Store GIS.",
      "Integration of Google Maps API to display maps and determine the nearest stockpoint location based on user input.",
      "Utilized mapping technology to display detailed information about stockpoints, regions, and member locations.",
      "Utilized backend APIs to fetch and update data from related databases",
    ],
  },
  {
    title: "Web Developer",
    company_name: "SIAPPARA",
    icon: del,
    iconBg: "#a2d2ff",
    date: "June 2022 - August 2022",
    points: [
      "Maintain Humbang Hasundutan district government levy collection system application",
      "Develop new features in Siappara v2 such as tenant management, contract generation and management, and bill generation.",
      "Using HTML, CSS, Jacscript, Laravel framework and MySQL database",
    ],
  },
  {
    title: "Web Developer",
    company_name: "LPPM IT Del",
    icon: del,
    iconBg: "#a2d2ff",
    date: "June 2022 - August 2022",
    points: [
      "Building a website-based E-Learning application to support online learning at SD N 16 Unjur during the pandemic which includes the features of: Managing classes, Subjects, Materials, Collection of assignments, exercises, quizzes, and discussion forums",
      "Using Laravel framework and MySQL database",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Rizki24-star",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/rizki-okto-s-583365229/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-blue",
    name: "SatuPintu App",
    description:
      "i'm Building a mobile application and web service for regional levy collection that allows local governments to manage and generate their own levies in each department dynamically according to their regulations, and also enable non-cash payments that are integrated with payment gateway",
    link: "https://github.com/orgs/eretribusi-satupintu/repositories",
  },
  {
    iconUrl: youtube,
    theme: "btn-back-red",
    name: "YouTube Clone Application ",
    description:
      'Creating a replica of the "YouTube" video platform, which allows users to access videos available on YouTube using data from RapidAPI.',
    link: "https://github.com/Rizki24-star/Youtube-Clone",
  },
  {
    iconUrl: restaurant,
    theme: "btn-back-black",
    name: "Restaurant Cashier Application (KasirApp)",
    description:
      "Building a web-based restaurant cashier system application for food ordering and payment calculation.",
    link: "https://github.com/Rizki24-star/kasir-app.git",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-pink",
    name: "Delhub",
    description:
      "Building a management system for Final Projects, and Practical Work for academic purposes at IT Del.",
    link: "https://github.com/Kelompok-4-PA-3/Delhub",
  },
  {
    iconUrl: school,
    theme: "btn-back-yellow",
    name: "Beta Marsikkola",
    description:
      "Website-based E-Learning application built to help implement online learning at SD N 16 Unjur, Samosir Regency which allows users to upload materials, assignments, submission, create quizzes, discussion forums and assessments.",
    link: "https://github.com/PKM-SD-UNJUR/sikkola-app",
  },
  {
    iconUrl: market,
    theme: "btn-back-green",
    name: "SIAPPARA v2",
    description:
      "Application for collecting regional market levies in Humbang Hasundutan district, which allows paying market levies electronically",
    link: "https://siappara.humbanghasundutankab.go.id/",
  },
];
