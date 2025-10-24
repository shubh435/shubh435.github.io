import {
  noImageFound,
  project18,
  project19,
  project1Image,
  project20,
  project21,
  project22,
  project23,
  project24,
  project25,
  project26,
  project2Image,
  project3Image,
  projectImage10,
  projectImage11,
  projectImage12,
  projectImage13,
  projectImage14,
  projectImage15,
  projectImage16,
  projectImage17,
  projectImage4,
  projectImage5,
  projectImage7,
  projectImage8,
  projectImage9,
} from "./assets";
import {
  FaReact,
  FaGithub,
  FaGitlab,
  FaAws,
  FaNode,
  FaGit,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiJest,
  SiExpress,
  SiMongodb,
  SiCypress,
  SiTailwindcss,
  SiMaterialdesign,
} from "react-icons/si";
import { MdMobileFriendly } from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { GiCube } from "react-icons/gi";
export interface ProjectData {
  id: number;
  projectName: string;
  projectImage: string;
  description: string;
  moreDes: string;
  subheader: string;
  tryLink: string;
  sourceCodeLink: string;
  rating: number;
  technology?: string;
  category?: "Mobile" | "Web";
}

export const projectdata: ProjectData[] = [
  {
    id: 1,
    projectName: "Doctor Mobile App",
    projectImage: project1Image,
    description:
      "The Doctor App is a user-friendly healthcare solution designed to simplify the interaction between patients and healthcare providers. Key features include appointment scheduling, secure patient records management, telemedicine support, prescription management, health monitoring integration, and secure payment processing. The app ensures efficient and convenient access to medical care, enhancing the overall patient experience.",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/doctors_app",
    tryLink: "https://github.com/shubh435/doctors_app/releases",
    rating: 5,
    category: "Mobile",
    technology: "React Native",
  },

  {
    id: 2,
    projectName: "Color Palette Generator",
    projectImage: project2Image,
    description:
      "The Color Palette Generator is a versatile tool designed to create and explore a wide range of color palettes. Users can generate random colors, customize hues, and save their favorite combinations. Perfect for designers, developers, and artists, this app enhances creativity by providing a seamless way to experiment with and utilize colors in various projects.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/color-generator",
    tryLink: "https://color-generator-peach.vercel.app/",
    rating: 3.5,
  },
  {
    id: 3,
    projectName: "Travel Planner App",
    projectImage: project3Image,
    description:
      "The Travel Planner App is a comprehensive platform designed to enhance the travel planning experience. It offers features such as destination discovery, itinerary creation, and booking management. Users can explore popular travel destinations, find accommodations, book flights, and plan activities all in one place. With integrated reviews, maps, and travel tips, the app provides a seamless and enjoyable way to organize and manage trips, making travel planning efficient and stress-free.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/doctors_app",
    tryLink: "https://travel-web-app-mauve.vercel.app/",
    rating: 4.5,
  },
  {
    id: 4,
    projectName: "Weather Forecast App",
    projectImage: projectImage16,
    description:
      "The Weather Forecast App provides accurate and up-to-date weather information for any location. Users can view current weather conditions, hourly forecasts, and extended forecasts. The app also includes features such as weather alerts, radar maps, and customizable weather widgets.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/weather-app",
    tryLink: "https://electron-react-demo-bzkb.vercel.app",
    rating: 3,
  },
  {
    id: 5,
    projectName: "Responsive Startup Website",
    projectImage: projectImage4,
    description:
      "Designed and developed a modern and responsive website tailored for startups using React JS. The website provides an engaging platform for startups to showcase their services and company information effectively.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/template-react-tailwind",
    tryLink: "https://template-react-tailwind.vercel.app/",
    rating: 3.6,
  },
  {
    id: 6,
    projectName: "Cocktail API Task",
    projectImage: projectImage5,
    description:
      "Developed a modern and responsive website using React JS to interact with a cocktail API. The website allows users to search for cocktail recipes, view detailed information about each cocktail, and save their favorite recipes.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/cocktail--api",
    tryLink: "https://cocktail-api-kappa.vercel.app/",
    rating: 2.5,
  },
  {
    id: 7,
    projectName: "Bootstrap Design Task",
    projectImage: noImageFound,
    description:
      "Designed and developed a modern and responsive website tailored for an agency using React JS and Bootstrap.",
    moreDes: "Developed by Shubham",
    subheader: "2023",
    sourceCodeLink: "https://github.com/shubh435/bootstrap-resp-design",
    tryLink: "https://bootstrap-resp-design.vercel.app/",
    rating: 3,
  },
  {
    id: 8,
    projectName: "Band Template",
    projectImage: projectImage7,
    description:
      "Designed and developed a modern and responsive website template for bands using React JS.",
    moreDes: "Developed by Shubham",
    subheader: "2023",
    sourceCodeLink: "https://github.com/shubh435/band--template",
    tryLink: "https://band-template.vercel.app/",
    rating: 3.8,
  },
  {
    id: 9,
    projectName: "E-commerce App",
    projectImage: projectImage8,
    description:
      "Designed and developed a modern and responsive e-commerce website using React JS. The website provides a seamless shopping experience with features such as product search, detailed product pages, and a secure checkout process.",
    moreDes: "Developed by Shubham",
    subheader: "2023",
    sourceCodeLink: "https://github.com/shubh435/eccomerce-website-ext",
    tryLink: "https://eccomerce-website-ext.vercel.app/",
    rating: 3.9,
  },
  {
    id: 10,
    projectName: "Testimonial Slider",
    projectImage: projectImage12,
    description:
      "Designed and developed a modern and responsive testimonial slider using JavaScript. The slider allows users to view and navigate through various testimonials.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink:
      "https://github.com/shubh435/basic-slidder?tab=readme-ov-file",
    tryLink: "https://shubh435.github.io/basic-slidder/",
    rating: 3.8,
  },
  {
    id: 11,
    projectName: "Color Flipper",
    projectImage: projectImage9,
    description:
      "Designed and developed a modern and responsive color flipper website using JavaScript. The website allows users to generate random colors and view their hex codes.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://color-flipper-henna.vercel.app/",
    tryLink: "https://color-flipper-henna.vercel.app/",
    rating: 3,
  },
  {
    id: 12,
    projectName: "React Movie App",
    projectImage: projectImage10,
    description:
      "Designed and developed a modern and responsive movie website using React JS. The website allows users to search for movies, view detailed information, and watch trailers.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/React-Movie",
    tryLink: "https://react-movie-gules.vercel.app/",
    rating: 3.9,
  },
  {
    id: 13,
    projectName: "University Demo",
    projectImage: projectImage11,
    description:
      "Designed and developed a modern and responsive university study website using JavaScript. The website provides information about various courses, faculties, and campus facilities.",
    moreDes: "Developed by Shubham",
    subheader: "2021",
    sourceCodeLink: "https://github.com/shubh435/university?tab=readme-ov-file",
    tryLink: "https://shubh435.github.io/university/",
    rating: 3.9,
  },
  {
    id: 14,
    projectName: "Practice Tabs Web App",
    projectImage: projectImage13,
    description:
      "Developed a practice web app using JavaScript to demonstrate the use of tabs for organizing content.",
    moreDes: "Developed by Shubham",
    subheader: "2021",
    sourceCodeLink: "https://github.com/shubh435/my-app",
    tryLink: "https://menu-js-975i.vercel.app/",
    rating: 3.5,
  },
  {
    id: 15,
    projectName: "Practice Agency Web App",
    projectImage: projectImage14,
    description:
      "Developed a practice web app using JavaScript to demonstrate the creation of a modern and responsive agency website.",
    moreDes: "Developed by Shubham",
    subheader: "2021",
    sourceCodeLink: "https://github.com/shubh435/agency",
    tryLink: "https://agency-sandy.vercel.app/",
    rating: 3.5,
  },
  {
    id: 16,
    projectName: "Bookly - Personalized Book Recommendation App",
    projectImage: projectImage15,
    description:
      "Bookly is a web application designed to help users discover and track their next great read. Featuring an intuitive and user-friendly interface, Bookly allows users to browse a vast collection of books, read detailed descriptions, and receive personalized recommendations based on their reading preferences.",
    moreDes: "Developed by Shubham",
    subheader: "2021",
    sourceCodeLink: "https://github.com/shubh435/bookly",
    tryLink: "https://bookly-five.vercel.app/",
    rating: 3.99,
  },
  {
    id: 17,
    projectName: "Shopery - Organic E-commerce Shop",
    projectImage: projectImage17,
    description:
      "Shopery is an organic e-commerce platform dedicated to providing customers with a wide range of eco-friendly, sustainable, and organic products. The website offers a seamless shopping experience, featuring categories like fresh produce, health supplements, eco-conscious personal care, and sustainable home goods. With a user-friendly interface and a focus on promoting environmentally responsible choices, Shopery aims to make it easy for customers to shop green and support a healthier lifestyle.",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "#",
    tryLink: "#",
    rating: 3.99,
  },
  {
    id: 18,
    projectName: "Doctor Web App",
    projectImage: project18,
    description:
      "The Doctor App is a user-friendly healthcare solution designed to simplify the interaction between patients and healthcare providers. Key features include appointment scheduling, secure patient records management, telemedicine support, prescription management, health monitoring integration, and secure payment processing. The app ensures efficient and convenient access to medical care, enhancing the overall patient experience.",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "https://github.com/Personal-Team-HealthCheckup/doctorApp",
    tryLink: "https://healthcheck-nine.vercel.app/",
    rating: 4.9,
    technology: "React|NextJS",
  },
  {
    id: 19,
    projectName: "Realestate Web App",
    projectImage: project19,
    description:
      "The Realestate App is a user-friendly property showcasing solution designed to simplify the interaction between client and realestate providers.Basic UI to showcase with responsive",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "https://github.com/Personal-Team-HealthCheckup/doctorApp",
    tryLink: "https://healthcheck-nine.vercel.app/",
    rating: 2.9,
    technology: "React",
  },
  {
    id: 20,
    projectName: "Real Estate Web App",
    projectImage: project20,
    description:
      "The Realestate App is a user-friendly property showcasing solution designed to simplify the interaction between client and realestate providers.Basic UI to showcase with responsive",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/real_estate/",
    tryLink: "https://realestate-pi-one.vercel.app/",
    rating: 3.9,
    technology: "React",
  },
  {
    id: 21,
    projectName: "CricketCraft",
    projectImage: project21,
    description:
      "CricketCraft is a responsive web app designed to showcase cricket-related products with a clean and user-friendly interface. It serves as a basic yet effective platform for browsing and ordering selected cricket items.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/crickcraft",
    tryLink: "https://crickcraft.vercel.app/",
    rating: 3.9,
    technology: "React",
  },
  {
    id: 22,
    projectName: "Gingee Grain",
    projectImage: project22,
    description:
      "Gingee Grain is a professional, export-focused website designed to showcase premium Bajra (Pearl Millet) products for international buyers. It highlights product details, certifications, nutritional benefits, and export readiness with a clean, responsive, and SEO-friendly design.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/gingee-grain",
    tryLink: "https://gingee-grain.vercel.app/",
    rating: 4.5,
    technology: "React",
  },
  {
    id: 23,
    projectName: "Lip Sync AI Avatar",
    projectImage: project23,
    description:
      "Lip Sync AI Avatar is an interactive React web app that synchronizes an animated avatar’s lip movements with spoken text in real time. It integrates AI-driven voice-to-animation technology, offering a smooth and engaging user experience for conversational interfaces and virtual assistants.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/lipsync-modal",
    tryLink: "https://lipsync-modal.vercel.app/",
    rating: 4.4,
    technology: "React",
  },
  {
    id: 24,
    projectName: "Coffee Shop",
    projectImage: project24,
    description:
      "Coffee Shop is a modern web application designed to provide a seamless online ordering experience for coffee enthusiasts. It features a user-friendly interface, a variety of coffee options, and a secure payment gateway.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/cofee-shopify",
    tryLink: "https://cofee-shopify.vercel.app/",
    rating: 3.9,
    technology: "React",
  },
  {
    id: 25,
    projectName: "Physiotherapy Demo",
    projectImage: project25,
    description:
      "Physiotherapy Demo is a modern web application designed to provide a seamless online experience for physiotherapy services. It features a user-friendly interface, a variety of treatment options, and a secure payment gateway.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/Physiotherapy",
    tryLink: "https://physiotherapy-drab.vercel.app/",
    rating: 3.7,
    technology: "React",
  },
  {
    id: 26,
    projectName: "AI Pet Care",
    projectImage: project26,
    description:
      "AI Pet Care is a modern web application designed to provide a seamless online experience for pet care services. It features a user-friendly interface, a variety of treatment options, and a secure payment gateway.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/AI-Pet-Care",
    tryLink: "https://ai-pet-care.vercel.app/#",
    rating: 3.9,
    technology: "React",
  },
];

export const experiences = [
  {
    title: "Product Engineer",
    company: "Shuru Technologies Private Limited",
    location: "Remote",
    period: "Jul 2025 - Present",
    description: [
      "Developing scalable and modular React Native applications for both Android and iOS platforms",
      "Writing clean, testable, and maintainable code using TypeScript and Jest",
    ],
    technologies: ["React Native", "TypeScript", "Jest"],
  },
  {
    title: "Senior Software Engineer",
    company: "ATUM Information Technologies",
    location: "Pune",
    period: "Feb 2025 - Jun 2025",
    description: [
      "Integrated RESTful APIs with pagination, loading states, and advanced image optimization (lazy loading, compression), improving performance by 25%",
      "Collaborated with designers, QA, backend engineers, and product managers to deliver pixel-perfect, high-quality features",
      "Maintained code quality using TypeScript, implemented best practices, and enforced standards through peer reviews and CI/CD pipelines",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "CI/CD",
      "Firebase",
      "Jest",
      "Enzyme",
      "AWS",
    ],
  },
  {
    title: "Software Engineer",
    company: "Extended Web App Tech",
    location: "Hyderabad",
    period: "Jul 2022 - Jan 2025",
    description: [
      "Built scalable web and mobile applications using React.js, React Native, and TypeScript",
      "Led a team of 5–10 developers on internal initiatives while contributing significantly to client projects",
      "Created reusable UI components using HOCs, custom hooks, and Redux Toolkit for state management",
      "Achieved 100% unit test coverage using Jest and React Testing Library",
      "Successfully published 2+ mobile apps on the App Store and Google Play Store",
    ],
    technologies: [
      "React",
      "React Native",
      "Redux Toolkit",
      "Jest",
      "Firebase",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Blastoserve Scientific",
    location: "Aurangabad",
    period: "Feb 2022 - May 2022",
    description: [
      "Developed cross-platform desktop applications using Electron.js",
      "Enhanced responsive UI components using HTML, CSS, JavaScript, and React.js",
    ],
    technologies: ["Electron.js", "JavaScript", "HTML", "CSS", "React.js"],
  },
  {
    title: "Associate Software Engineer",
    company: "Teztecch",
    location: "Nagpur",
    period: "Sep 2021 - Dec 2021",
    description: [
      "Built dynamic websites using HTML, CSS, JavaScript, and WordPress",
      "Maintained and updated live Detox and portfolio web applications with real-time data integration",
    ],
    technologies: ["JavaScript", "WordPress", "HTML", "CSS"],
  },
];

export type Skill = {
  name: string;
  icon: JSX.Element;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
};

export const skills: Skill[] = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "React Native",
    icon: <MdMobileFriendly className="text-pink-400" />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    level: "Advanced",
    category: "Programming",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    level: "Advanced",
    category: "Programming",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "Material UI",
    icon: <SiMaterialdesign className="text-indigo-400" />,
    level: "Advanced",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: <FaNode className="text-green-500" />,
    level: "Advanced",
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-white" />,
    level: "Advanced",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    level: "Intermediate",
    category: "Database",
  },
  {
    name: "AWS",
    icon: <FaAws className="text-orange-400" />,
    level: "Intermediate",
    category: "DevOps",
  },
  {
    name: "CI/CD",
    icon: <AiOutlineDeploymentUnit className="text-teal-300" />,
    level: "Advanced",
    category: "DevOps",
  },
  {
    name: "Git",
    icon: <FaGit className="text-red-500" />,
    level: "Advanced",
    category: "Version Control",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-300" />,
    level: "Advanced",
    category: "Version Control",
  },
  {
    name: "GitLab",
    icon: <FaGitlab className="text-orange-500" />,
    level: "Intermediate",
    category: "Version Control",
  },
  {
    name: "Jest",
    icon: <SiJest className="text-red-400" />,
    level: "Advanced",
    category: "Testing",
  },
  {
    name: "Enzyme",
    icon: <SiCypress className="text-lime-400" />,
    level: "Intermediate",
    category: "Testing",
  },
  {
    name: "Three.js",
    icon: <GiCube className="text-green-300" />,
    level: "Intermediate",
    category: "Frontend",
  },
];
