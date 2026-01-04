import { projectMedia, sharedMedia } from "./assets";
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
  SiFirebase,
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
  techStack?: string[];
  problem?: string;
  solution?: string;
  role?: string;
}

export const projectdata: ProjectData[] = [
  {
    id: 1,
    projectName: "Doctor Mobile App",
    projectImage: projectMedia.doctorMobile,
    description:
      "Mobile-first doctor companion app featuring real-time appointments, prescription tracking, telehealth calls, and push reminders. Built with React Native for buttery transitions across iOS and Android.",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/doctors_app",
    tryLink: "https://github.com/shubh435/doctors_app/releases",
    rating: 5,
    category: "Mobile",
    technology: "React Native",
    techStack: ["React Native", "TypeScript", "Firebase", "Jest"],
    problem:
      "Clinics struggled with missed appointments and scattered patient communication across SMS, WhatsApp, and calls.",
    solution:
      "Built a unified mobile experience with appointment booking, prescription tracking, and secure messaging powered by Firebase sync.",
    role: "Led mobile architecture, implemented push notifications, and tuned performance for low-end Android devices.",
  },
  {
    id: 1,
    projectName: "MediReminder - Pills Reminder",
    projectImage: projectMedia.mediminderImage,
    description:
      "Never miss a dose with MediReminder! This React Native app helps you manage your medication schedule effortlessly. Set reminders, track your pill intake, and stay on top of your health.",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "private",
    tryLink: "https://medireminder-pills-reminder.vercel.app",
    rating: 5,
    category: "Mobile",
    technology: "React Native",
    techStack: ["React Native", "TypeScript", "Firebase", "Jest"],
    problem:
      "Patients often forget to take their medications on time, leading to health complications and missed doses.",
    solution:
      "Developed a mobile app that allows users to set medication reminders, track their pill intake, and receive notifications when it's time to take their medicine.",
    role: "Led the mobile app development, implemented user-friendly interfaces, and integrated Firebase for real-time data synchronization.",
  },
  {
    id: 2,
    projectName: "Color Palette Generator",
    projectImage: projectMedia.colorPalette,
    description:
      "Interactive color palette generator for designers and developers. Generate random colors, customize hues with HSL sliders, and save favorite combinations to localStorage. Built with vanilla JavaScript for performance.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/color-generator",
    tryLink: "https://color-generator-peach.vercel.app/",
    rating: 3.5,
    category: "Web",
    technology: "JavaScript",
    techStack: ["JavaScript", "CSS3", "localStorage"],
  },
  {
    id: 3,
    projectName: "Travel Planner App",
    projectImage: projectMedia.travelPlanner,
    description:
      "Collaborative travel itinerary builder with destination discovery, interactive maps, and booking coordination. Built with React and Redux Toolkit for real-time state sync across users. Features Mapbox integration for route visualization and offline-friendly trip summaries.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/travel-planner",
    tryLink: "https://travel-web-app-mauve.vercel.app/",
    rating: 4.5,
    category: "Web",
    technology: "React",
    techStack: ["React", "TypeScript", "Redux Toolkit", "Mapbox"],
    problem:
      "Travelers had to juggle spreadsheets and emails to coordinate itineraries across friends and vendors.",
    solution:
      "Centralized itinerary builder with saved routes, vendor embeds, and offline-friendly trip summaries.",
    role: "Owned end-to-end UI implementation, state management, and UX flows for booking and sharing.",
  },
  {
    id: 4,
    projectName: "Weather Forecast App",
    projectImage: projectMedia.weatherDashboard,
    description:
      "Cross-platform desktop weather dashboard built with Electron and React. Features auto-location detection using browser APIs, 7-day forecasts via OpenWeatherMap API, radar overlays with Chart.js visualizations, and offline caching for resilience.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/weather-app",
    tryLink: "https://electron-react-demo-bzkb.vercel.app",
    rating: 3,
    category: "Web",
    technology: "Electron",
    techStack: ["Electron", "React", "Chart.js", "OpenWeatherMap API"],
    problem:
      "Existing weather dashboards were slow on older hardware and lacked offline resilience.",
    solution:
      "Lightweight Electron desktop experience with cached forecasts, radar overlays, and keyboard-first navigation.",
    role: "Implemented desktop packaging, accessibility shortcuts, and performance profiling.",
  },
  {
    id: 5,
    projectName: "Responsive Startup Website",
    projectImage: projectMedia.responsiveStartup,
    description:
      "Reusable startup marketing template built with React and Tailwind CSS. Features composable sections, dark mode toggle, Framer Motion animations, and mobile-first responsive design. Optimized for fast load times with lazy-loaded images and code splitting.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/template-react-tailwind",
    tryLink: "https://template-react-tailwind.vercel.app/",
    rating: 3.6,
    category: "Web",
    technology: "React",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    problem:
      "Early-stage founders needed a reusable marketing template that could be customized in under a day.",
    solution:
      "Composable Tailwind components with CMS-friendly sections, dark mode, and responsive defaults.",
    role: "Created the component library, documentation, and theming system.",
  },
  {
    id: 6,
    projectName: "Cocktail API Explorer",
    projectImage: projectMedia.cocktailExplorer,
    description:
      "Interactive cocktail recipe browser powered by TheCocktailDB API. Built with React featuring debounced search, ingredient filtering, favorites management with localStorage, and responsive card layouts. Showcases RESTful API integration and client-side state management.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/cocktail--api",
    tryLink: "https://cocktail-api-kappa.vercel.app/",
    rating: 2.5,
    category: "Web",
    technology: "React",
    techStack: ["React", "TheCocktailDB API", "localStorage", "CSS3"],
  },
  {
    id: 7,
    projectName: "Bootstrap Agency Website",
    projectImage: sharedMedia.fallback,
    description:
      "Professional agency landing page built with React and Bootstrap 5. Features responsive grid layouts, smooth scrolling navigation, testimonial carousels, and contact forms. Demonstrates mastery of Bootstrap's utility classes and component system for rapid prototyping.",
    moreDes: "Developed by Shubham",
    subheader: "2023",
    sourceCodeLink: "https://github.com/shubh435/bootstrap-resp-design",
    tryLink: "https://bootstrap-resp-design.vercel.app/",
    rating: 3,
    category: "Web",
    technology: "React",
    techStack: ["React", "Bootstrap 5", "React Bootstrap"],
  },
  {
    id: 8,
    projectName: "Band Template",
    projectImage: projectMedia.bandTemplate,
    description:
      "Music band portfolio template built with React featuring tour dates, audio player integration, photo galleries, and merch showcase. Responsive design with hero video backgrounds, parallax effects, and social media integration. Ideal for artists and musicians.",
    moreDes: "Developed by Shubham",
    subheader: "2023",
    sourceCodeLink: "https://github.com/shubh435/band--template",
    tryLink: "https://band-template.vercel.app/",
    rating: 3.8,
    category: "Web",
    technology: "React",
    techStack: ["React", "CSS3", "Responsive Design"],
  },
  {
    id: 9,
    projectName: "E-Commerce App",
    projectImage: projectMedia.ecommerceStorefront,
    description:
      "Full-featured e-commerce platform built with React. Includes product catalog with category filtering, shopping cart with persistent state, responsive checkout flow, and payment integration. Features product search, wishlist functionality, and optimized performance with lazy loading.",
    moreDes: "Developed by Shubham",
    subheader: "2023",
    sourceCodeLink: "https://github.com/shubh435/eccomerce-website-ext",
    tryLink: "https://eccomerce-website-ext.vercel.app/",
    rating: 3.9,
    category: "Web",
    technology: "React",
    techStack: ["React", "Redux", "Stripe", "localStorage"],
  },
  {
    id: 10,
    projectName: "Testimonial Slider",
    projectImage: projectMedia.testimonialSlider,
    description:
      "Interactive testimonial carousel built with vanilla JavaScript and CSS3. Features auto-play, touch swipe support, smooth transitions, and keyboard navigation. Demonstrates DOM manipulation, event handling, and responsive design without frameworks.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink:
      "https://github.com/shubh435/basic-slidder?tab=readme-ov-file",
    tryLink: "https://shubh435.github.io/basic-slidder/",
    rating: 3.8,
    category: "Web",
    technology: "JavaScript",
    techStack: ["JavaScript", "CSS3", "HTML5"],
  },
  {
    id: 11,
    projectName: "Color Flipper",
    projectImage: projectMedia.colorFlipper,
    description:
      "Simple yet elegant random color generator built with vanilla JavaScript. Generates random hex colors on button click, displays color codes, and updates background in real-time. Great example of DOM manipulation and event-driven programming fundamentals.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/color-flipper",
    tryLink: "https://color-flipper-henna.vercel.app/",
    rating: 3,
    category: "Web",
    technology: "JavaScript",
    techStack: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: 12,
    projectName: "React Movie App",
    projectImage: projectMedia.movieApp,
    description:
      "Movie discovery platform powered by TMDB API. Built with React featuring debounced search, genre filters, infinite scroll pagination, detailed movie pages with cast info and trailers, and watchlist functionality. Demonstrates advanced React patterns and API integration.",
    moreDes: "Developed by Shubham",
    subheader: "2022",
    sourceCodeLink: "https://github.com/shubh435/React-Movie",
    tryLink: "https://react-movie-gules.vercel.app/",
    rating: 3.9,
    category: "Web",
    technology: "React",
    techStack: ["React", "TMDB API", "React Router", "CSS3"],
  },
  {
    id: 13,
    projectName: "University Demo",
    projectImage: projectMedia.university,
    description:
      "Educational institution website built with vanilla JavaScript. Features course catalog, faculty directory, campus facilities showcase, admission forms, and event calendar. Demonstrates responsive layouts, form validation, and interactive UI components without frameworks.",
    moreDes: "Developed by Shubham",
    subheader: "2021",
    sourceCodeLink: "https://github.com/shubh435/university?tab=readme-ov-file",
    tryLink: "https://shubh435.github.io/university/",
    rating: 3.9,
    category: "Web",
    technology: "JavaScript",
    techStack: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: 14,
    projectName: "Practice Tabs Web App",
    projectImage: projectMedia.menuShowcase,
    description:
      "Interactive tabbed interface demo built with vanilla JavaScript. Showcases dynamic content loading, smooth transitions between tabs, and efficient DOM manipulation. Demonstrates fundamental UI patterns for organizing content without external libraries.",
    moreDes: "Developed by Shubham",
    subheader: "2021",
    sourceCodeLink: "https://github.com/shubh435/my-app",
    tryLink: "https://menu-js-975i.vercel.app/",
    rating: 3.5,
    category: "Web",
    technology: "JavaScript",
    techStack: ["JavaScript", "HTML5", "CSS3"],
  },
  {
    id: 15,
    projectName: "Practice Agency Web App",
    projectImage: projectMedia.agencyLanding,
    description:
      "Modern agency landing page built with vanilla JavaScript. Features smooth scroll navigation, portfolio grid with hover effects, services section, contact forms with validation, and mobile-responsive design. Demonstrates mastery of CSS Grid, Flexbox, and JavaScript fundamentals.",
    moreDes: "Developed by Shubham",
    subheader: "2021",
    sourceCodeLink: "https://github.com/shubh435/agency",
    tryLink: "https://agency-sandy.vercel.app/",
    rating: 3.5,
    category: "Web",
    technology: "JavaScript",
    techStack: ["JavaScript", "CSS Grid", "Flexbox", "HTML5"],
  },
  {
    id: 16,
    projectName: "Bookly - Personalized Book Recommendation App",
    projectImage: projectMedia.bookly,
    description:
      "Book discovery platform with personalized recommendations. Integrates with Google Books API for searching and browsing titles. Features reading list management, genre-based filtering, book reviews, and recommendation algorithm based on user preferences. Built with React and localStorage for persistent data.",
    moreDes: "Developed by Shubham",
    subheader: "2021",
    sourceCodeLink: "https://github.com/shubh435/bookly",
    tryLink: "https://bookly-five.vercel.app/",
    rating: 3.99,
    category: "Web",
    technology: "React",
    techStack: ["React", "Google Books API", "localStorage", "CSS3"],
  },
  {
    id: 17,
    projectName: "Shopery - Organic E-Commerce Shop",
    projectImage: projectMedia.shoperyBanner,
    description:
      "Eco-friendly e-commerce platform for organic and sustainable products. Built with React featuring product categories (fresh produce, supplements, personal care), advanced filtering, shopping cart, and eco-impact badges. Emphasizes green living with carbon footprint tracking and sustainable packaging info.",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/shopery",
    tryLink: "https://shopery-organic.vercel.app/",
    rating: 3.99,
    category: "Web",
    technology: "React",
    techStack: ["React", "Redux", "Tailwind CSS", "Stripe"],
  },
  {
    id: 18,
    projectName: "Doctor Web App",
    projectImage: projectMedia.doctorWeb,
    description:
      "Responsive admin portal that lets clinics manage patients, slot calendars, prescriptions, and billing with live dashboards. Optimized for web accessibility and secure role-based workflows.",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "https://github.com/Personal-Team-HealthCheckup/doctorApp",
    tryLink: "https://healthcheck-nine.vercel.app/",
    rating: 4.9,
    technology: "React|NextJS",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Supabase"],
    problem:
      "Clinic staff needed a single source of truth for patient onboarding, scheduling, and billing across devices.",
    solution:
      "Responsive admin portal with RBAC, live dashboards, and appointment workflows optimized for tablet and desktop.",
    role: "Architected frontend, defined design tokens, and shipped accessibility fixes for keyboard users.",
  },
  {
    id: 19,
    projectName: "Real Estate Web App",
    projectImage: projectMedia.realEstatePrimary,
    description:
      "Property showcase platform for real estate agents. Built with React and TypeScript featuring Leaflet map integration for location browsing, property search with filters (price, bedrooms, location), favorites list, and lead capture forms. Responsive design optimized for tablets and mobile devices.",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/real-estate-primary",
    tryLink: "https://real-estate-primary.vercel.app/",
    rating: 2.9,
    category: "Web",
    technology: "React",
    techStack: ["React", "TypeScript", "Leaflet", "Tailwind CSS"],
    problem:
      "Agents needed a quick demo tool to showcase curated properties without exposing internal CRM data.",
    solution:
      "Launched a static-friendly catalogue with map previews, saved searches, and lead capture hooks.",
    role: "Owned UI build, routing, and map integrations; added tracking for CTA conversions.",
  },
  {
    id: 20,
    projectName: "Real Estate Landing Page",
    projectImage: projectMedia.realEstateSecondary,
    description:
      "Marketing-focused real estate landing page built with React and Styled Components. Features config-driven hero sections for A/B testing, optimized image loading, property highlights carousel, testimonials, and analytics event tracking. Designed for high conversion rates with localized content support.",
    moreDes: "Developed by Shubham",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/real_estate/",
    tryLink: "https://realestate-pi-one.vercel.app/",
    rating: 3.9,
    category: "Web",
    technology: "React",
    techStack: ["React", "Styled Components", "Analytics"],
    problem:
      "Marketing teams struggled to A/B test hero messaging and CTAs without dev support.",
    solution:
      "Config-driven landing pages with reusable blocks, fast image loading, and localized content.",
    role: "Implemented layout system, image optimization, and analytics events for conversion tracking.",
  },
  {
    id: 21,
    projectName: "CricketCraft Store",
    projectImage: projectMedia.cricketCraft,
    description:
      "E-commerce platform for cricket equipment and merchandise. Built with React featuring product catalog for bats, balls, protective gear, and apparel. Includes shopping cart, order management, product filters by brand and category, and responsive design for seamless mobile shopping.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/crickcraft",
    tryLink: "https://crickcraft.vercel.app/",
    rating: 3.9,
    category: "Web",
    technology: "React",
    techStack: ["React", "CSS3", "localStorage"],
  },
  {
    id: 22,
    projectName: "Gingee Grain E-Commerce",
    projectImage: projectMedia.gingeeGrains,
    description:
      "B2B export platform for premium Bajra (Pearl Millet) products. Built with React featuring product showcase with certifications, nutritional info panels, bulk inquiry forms for international buyers, multilingual support, and SEO optimization. Targets global markets with export documentation and quality assurance details.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/gingee-grain",
    tryLink: "https://gingee-grain.vercel.app/",
    rating: 4.5,
    category: "Web",
    technology: "React",
    techStack: ["React", "SEO", "i18n", "Responsive Design"],
  },
  {
    id: 23,
    projectName: "Lip Sync AI Avatar",
    projectImage: projectMedia.lipSyncDemo,
    description:
      "Real-time AI avatar with lip-sync animation. Built with React integrating text-to-speech APIs and face animation libraries. Features voice synthesis, synchronized mouth movements, customizable avatars, and WebSocket support for conversational interfaces. Ideal for virtual assistants and chatbots.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/lipsync-modal",
    tryLink: "https://lipsync-modal.vercel.app/",
    rating: 4.4,
    category: "Web",
    technology: "React",
    techStack: ["React", "Web Speech API", "Three.js", "WebSocket"],
  },
  {
    id: 24,
    projectName: "Coffee Shop",
    projectImage: projectMedia.coffeeShop,
    description:
      "Online coffee ordering platform built with React. Features menu browsing with customization options (size, milk, extras), shopping cart with order summary, user authentication, order history, payment integration, and pickup/delivery scheduling. Responsive design for mobile ordering on the go.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/cofee-shopify",
    tryLink: "https://cofee-shopify.vercel.app/",
    rating: 3.9,
    category: "Web",
    technology: "React",
    techStack: ["React", "Redux", "Payment Gateway", "Firebase Auth"],
  },
  {
    id: 25,
    projectName: "Physiotherapy Demo",
    projectImage: projectMedia.physiotherapy,
    description:
      "Healthcare service platform for physiotherapy clinics. Built with React featuring appointment booking system, treatment catalog with descriptions, therapist profiles, patient testimonials, and contact forms. Includes service area maps and responsive design for accessibility on all devices.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/Physiotherapy",
    tryLink: "https://physiotherapy-drab.vercel.app/",
    rating: 3.7,
    category: "Web",
    technology: "React",
    techStack: ["React", "CSS3", "Form Validation"],
  },
  {
    id: 26,
    projectName: "AI Pet Care",
    projectImage: projectMedia.aiPetCare,
    description:
      "AI-powered pet care assistant platform. Built with React featuring chatbot for pet health queries, appointment scheduling for vet visits, pet profile management, vaccination reminders, and care tips. Integrates natural language processing for intelligent pet care recommendations.",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/AI-Pet-Care",
    tryLink: "https://ai-pet-care.vercel.app/",
    rating: 3.9,
    category: "Web",
    technology: "React",
    techStack: ["React", "AI/ML", "Chatbot", "Firebase"],
  },
  {
    id: 27,
    projectName: "DreamPlan - Financial Goal Planner",
    projectImage: projectMedia.dreamPlan,
    description:
      "DreamPlan is a smart SIP calculator and financial goal planner that helps users turn their financial dreams into achievable goals. Features include personalized investment recommendations based on salary and goals, dream tracking with progress visualization, and multiple investment strategies (Conservative, Moderate, Aggressive).",
    moreDes: "Developed by Shubham Sarode",
    subheader: "Current",
    sourceCodeLink: "https://github.com/shubh435/Dream-Planner",
    tryLink: "https://dream-plan.vercel.app/",
    rating: 4.5,
    category: "Web",
    technology: "React | TypeScript | Tailwind | Firebase",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "Chart.js"],
    problem:
      "Users struggled to plan and track multiple financial goals simultaneously, often losing motivation without clear progress visualization and personalized investment guidance.",
    solution:
      "Built a comprehensive financial planner with SIP calculations, goal-based investment recommendations, progress tracking dashboards, and multiple risk-profile strategies to help users visualize their path to financial freedom.",
    role: "Full-stack development including UI/UX design, Firebase integration for authentication and data persistence, SIP calculation algorithms, and responsive dashboard implementation.",
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
  group: "Frontend" | "Backend" | "Tools" | "Testing" | "Cloud";
};

export const skills: Skill[] = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400" />,
    level: "Advanced",
    category: "Frontend",
    group: "Frontend",
  },
  {
    name: "React Native",
    icon: <MdMobileFriendly className="text-pink-400" />,
    level: "Advanced",
    category: "Frontend",
    group: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    level: "Advanced",
    category: "Frontend",
    group: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    level: "Advanced",
    category: "Frontend",
    group: "Frontend",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-500" />,
    level: "Advanced",
    category: "Frontend",
    group: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    level: "Advanced",
    category: "Frontend",
    group: "Frontend",
  },
  {
    name: "Material UI",
    icon: <SiMaterialdesign className="text-indigo-400" />,
    level: "Advanced",
    category: "Frontend",
    group: "Frontend",
  },
  {
    name: "Node.js",
    icon: <FaNode className="text-green-500" />,
    level: "Advanced",
    category: "Backend",
    group: "Backend",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-white" />,
    level: "Advanced",
    category: "Backend",
    group: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    level: "Intermediate",
    category: "Backend",
    group: "Backend",
  },
  {
    name: "AWS",
    icon: <FaAws className="text-orange-400" />,
    level: "Intermediate",
    category: "Cloud",
    group: "Cloud",
  },
  {
    name: "CI/CD",
    icon: <AiOutlineDeploymentUnit className="text-teal-300" />,
    level: "Advanced",
    category: "DevOps",
    group: "Tools",
  },
  {
    name: "Git",
    icon: <FaGit className="text-red-500" />,
    level: "Advanced",
    category: "Version Control",
    group: "Tools",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-300" />,
    level: "Advanced",
    category: "Version Control",
    group: "Tools",
  },
  {
    name: "GitLab",
    icon: <FaGitlab className="text-orange-500" />,
    level: "Intermediate",
    category: "Version Control",
    group: "Tools",
  },
  {
    name: "Jest",
    icon: <SiJest className="text-red-400" />,
    level: "Advanced",
    category: "Testing",
    group: "Testing",
  },
  {
    name: "Enzyme",
    icon: <SiCypress className="text-lime-400" />,
    level: "Intermediate",
    category: "Testing",
    group: "Testing",
  },
  {
    name: "Three.js",
    icon: <GiCube className="text-green-300" />,
    level: "Intermediate",
    category: "Frontend",
    group: "Frontend",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-orange-500" />,
    level: "Intermediate",
    category: "Cloud",
    group: "Cloud",
  },
];

export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Shubham rebuilt our React Native app with a modular architecture and cut our crash rate to almost zero. He is the engineer you call when the deadline is scary.",
    name: "Sakshi Gahlaut",
    role: "Project Manager",
    company: "Builder.ai",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=SG",
  },

  {
    id: 3,
    quote:
      "Shubham is a highly skilled developer with a strong work ethic. He consistently delivers high-quality code on time and is a pleasure to work with.",
    name: "Raghav Chopra ",
    role: "Technical Delivery Manager",
    company: "Builder.ai",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=RC",
  },

  {
    id: 3,
    quote:
      "From accessibility to analytics, Shubham thinks about the entire product experience. He elevated our design system and mentored our junior devs.",
    name: "Sachin Basanwar ",
    role: "MANAGING DIRECTOR",
    company: "Extended Web App Tech",
    avatar: "https://api.dicebear.com/8.x/initials/svg?seed=SB",
  },
];

export type BlogPost = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "My React Native Coding Interview Experience: Weather App Challenge",
    description:
      "A detailed walkthrough of my React Native coding interview for a mid-level position, including the problem statement, my approach, challenges faced, and key takeaways.",
    tags: ["React Native", "Performance", "Tooling"],
    link: "https://javascript.plainenglish.io/my-react-native-coding-interview-experience-weather-app-challenge-760c5ed5b4b5",
  },
  {
    id: 2,
    title:
      "React Native Animation: Build a Bouncing Ball Loader in React Native",
    description:
      "Learn how to create a bouncing ball loader animation in React Native using the Animated API. This tutorial covers setting up the animation, configuring easing functions, and integrating it into your app for a polished user experience.",
    tags: ["React Native", "Animation", "UI/UX"],
    link: "https://javascript.plainenglish.io/react-native-animation-build-a-bouncing-ball-loader-in-react-native-de998811e488",
  },
  {
    id: 3,
    title: "Authentication Using Express, TypeScript, Node.js, and MongoDB",
    description:
      "A comprehensive guide on implementing user authentication in a web application using Express.js, TypeScript, Node.js, and MongoDB. This article covers setting up the server, creating user models, handling registration and login, and securing routes with JWT.",
    tags: ["Node.js", "Express", "Authentication"],
    link: "https://medium.com/@shubh435/authentication-using-express-typescript-node-js-and-mongodb-4c0963010042",
  },
];
