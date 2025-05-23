import { noImageFound, project1Image, project2Image, project3Image, projectImage10, projectImage11, projectImage12, projectImage13, projectImage14, projectImage15, projectImage16, projectImage17, projectImage4, projectImage5, projectImage7, projectImage8, projectImage9 } from "./assets"

export interface ProjectData {
    id: number,
    projectName: string,
    projectImage: string,
    description: string,
    moreDes: string,
    subheader: string,
    tryLink: string,
    sourceCodeLink: string,
    rating: number
}

export const projectdata: ProjectData[] = [
    {
        id: 1,
        projectName: "Doctor App",
        projectImage: project1Image,
        description: "The Doctor App is a user-friendly healthcare solution designed to simplify the interaction between patients and healthcare providers. Key features include appointment scheduling, secure patient records management, telemedicine support, prescription management, health monitoring integration, and secure payment processing. The app ensures efficient and convenient access to medical care, enhancing the overall patient experience.",
        moreDes: "Developed by Shubham",
        subheader: "Current",
        sourceCodeLink: "https://github.com/shubh435/doctors_app",
        tryLink: "https://github.com/shubh435/doctors_app/releases",
        rating: 5
    },
    {
        id: 2,
        projectName: "Color Palette Generator",
        projectImage: project2Image,
        description: "The Color Palette Generator is a versatile tool designed to create and explore a wide range of color palettes. Users can generate random colors, customize hues, and save their favorite combinations. Perfect for designers, developers, and artists, this app enhances creativity by providing a seamless way to experiment with and utilize colors in various projects.",
        moreDes: "Developed by Shubham",
        subheader: "2022",
        sourceCodeLink: "https://github.com/shubh435/color-generator",
        tryLink: "https://color-generator-peach.vercel.app/",
        rating: 3.5
    },
    {
        id: 3,
        projectName: "Travel Planner App",
        projectImage: project3Image,
        description: "The Travel Planner App is a comprehensive platform designed to enhance the travel planning experience. It offers features such as destination discovery, itinerary creation, and booking management. Users can explore popular travel destinations, find accommodations, book flights, and plan activities all in one place. With integrated reviews, maps, and travel tips, the app provides a seamless and enjoyable way to organize and manage trips, making travel planning efficient and stress-free.",
        moreDes: "Developed by Shubham",
        subheader: "2022",
        sourceCodeLink: "https://github.com/shubh435/doctors_app",
        tryLink: "https://travel-web-app-mauve.vercel.app/",
        rating: 4.5
    },
    {
        id: 4,
        projectName: "Weather Forecast App",
        projectImage: projectImage16,
        description: "The Weather Forecast App provides accurate and up-to-date weather information for any location. Users can view current weather conditions, hourly forecasts, and extended forecasts. The app also includes features such as weather alerts, radar maps, and customizable weather widgets.",
        moreDes: "Developed by Shubham",
        subheader: "2022",
        sourceCodeLink: "https://github.com/shubh435/weather-app",
        tryLink: "https://electron-react-demo-bzkb.vercel.app",
        rating: 3
    },
    {
        id: 5,
        projectName: "Responsive Startup Website",
        projectImage: projectImage4,
        description: "Designed and developed a modern and responsive website tailored for startups using React JS. The website provides an engaging platform for startups to showcase their services and company information effectively.",
        moreDes: "Developed by Shubham",
        subheader: "2022",
        sourceCodeLink: "https://github.com/shubh435/template-react-tailwind",
        tryLink: "https://template-react-tailwind.vercel.app/",
        rating: 3.6
    },
    {
        id: 6,
        projectName: "Cocktail API Task",
        projectImage: projectImage5,
        description: "Developed a modern and responsive website using React JS to interact with a cocktail API. The website allows users to search for cocktail recipes, view detailed information about each cocktail, and save their favorite recipes.",
        moreDes: "Developed by Shubham",
        subheader: "2022",
        sourceCodeLink: "https://github.com/shubh435/cocktail--api",
        tryLink: "https://cocktail-api-kappa.vercel.app/",
        rating: 2.5
    },
    {
        id: 7,
        projectName: "Bootstrap Design Task",
        projectImage: noImageFound,
        description: "Designed and developed a modern and responsive website tailored for an agency using React JS and Bootstrap.",
        moreDes: "Developed by Shubham",
        subheader: "2023",
        sourceCodeLink: "https://github.com/shubh435/bootstrap-resp-design",
        tryLink: "https://bootstrap-resp-design.vercel.app/",
        rating: 3
    },
    {
        id: 8,
        projectName: "Band Template",
        projectImage: projectImage7,
        description: "Designed and developed a modern and responsive website template for bands using React JS.",
        moreDes: "Developed by Shubham",
        subheader: "2023",
        sourceCodeLink: "https://github.com/shubh435/band--template",
        tryLink: "https://band-template.vercel.app/",
        rating: 3.8
    },
    {
        id: 9,
        projectName: "E-commerce App",
        projectImage: projectImage8,
        description: "Designed and developed a modern and responsive e-commerce website using React JS. The website provides a seamless shopping experience with features such as product search, detailed product pages, and a secure checkout process.",
        moreDes: "Developed by Shubham",
        subheader: "2023",
        sourceCodeLink: "https://github.com/shubh435/eccomerce-website-ext",
        tryLink: "https://eccomerce-website-ext.vercel.app/",
        rating: 3.9
    },
    {
        id: 10,
        projectName: "Testimonial Slider",
        projectImage: projectImage12,
        description: "Designed and developed a modern and responsive testimonial slider using JavaScript. The slider allows users to view and navigate through various testimonials.",
        moreDes: "Developed by Shubham",
        subheader: "2022",
        sourceCodeLink: "https://github.com/shubh435/basic-slidder?tab=readme-ov-file",
        tryLink: "https://shubh435.github.io/basic-slidder/",
        rating: 3.8
    },
    {
        id: 11,
        projectName: "Color Flipper",
        projectImage: projectImage9,
        description: "Designed and developed a modern and responsive color flipper website using JavaScript. The website allows users to generate random colors and view their hex codes.",
        moreDes: "Developed by Shubham",
        subheader: "2022",
        sourceCodeLink: "https://color-flipper-henna.vercel.app/",
        tryLink: "https://color-flipper-henna.vercel.app/",
        rating: 3
    },
    {
        id: 12,
        projectName: "React Movie App",
        projectImage: projectImage10,
        description: "Designed and developed a modern and responsive movie website using React JS. The website allows users to search for movies, view detailed information, and watch trailers.",
        moreDes: "Developed by Shubham",
        subheader: "2022",
        sourceCodeLink: "https://github.com/shubh435/React-Movie",
        tryLink: "https://react-movie-gules.vercel.app/",
        rating: 3.9
    },
    {
        id: 13,
        projectName: "University Demo",
        projectImage: projectImage11,
        description: "Designed and developed a modern and responsive university study website using JavaScript. The website provides information about various courses, faculties, and campus facilities.",
        moreDes: "Developed by Shubham",
        subheader: "2021",
        sourceCodeLink: "https://github.com/shubh435/university?tab=readme-ov-file",
        tryLink: "https://shubh435.github.io/university/",
        rating: 3.9
    },
    {
        id: 14,
        projectName: "Practice Tabs Web App",
        projectImage: projectImage13,
        description: "Developed a practice web app using JavaScript to demonstrate the use of tabs for organizing content.",
        moreDes: "Developed by Shubham",
        subheader: "2021",
        sourceCodeLink: "https://github.com/shubh435/my-app",
        tryLink: "https://menu-js-975i.vercel.app/",
        rating: 3.5
    },
    {
        id: 15,
        projectName: "Practice Agency Web App",
        projectImage: projectImage14,
        description: "Developed a practice web app using JavaScript to demonstrate the creation of a modern and responsive agency website.",
        moreDes: "Developed by Shubham",
        subheader: "2021",
        sourceCodeLink: "https://github.com/shubh435/agency",
        tryLink: "https://agency-sandy.vercel.app/",
        rating: 3.5
    },
    {
        id: 16,
        projectName: "Bookly - Personalized Book Recommendation App",
        projectImage: projectImage15,
        description: "Bookly is a web application designed to help users discover and track their next great read. Featuring an intuitive and user-friendly interface, Bookly allows users to browse a vast collection of books, read detailed descriptions, and receive personalized recommendations based on their reading preferences.",
        moreDes: "Developed by Shubham",
        subheader: "2021",
        sourceCodeLink: "https://github.com/shubh435/bookly",
        tryLink: "https://bookly-five.vercel.app/",
        rating: 3.99
    },
    {
        id: 17,
        projectName: "Shopery - Organic E-commerce Shop",
        projectImage: projectImage17,
        description: "Shopery is an organic e-commerce platform dedicated to providing customers with a wide range of eco-friendly, sustainable, and organic products. The website offers a seamless shopping experience, featuring categories like fresh produce, health supplements, eco-conscious personal care, and sustainable home goods. With a user-friendly interface and a focus on promoting environmentally responsible choices, Shopery aims to make it easy for customers to shop green and support a healthier lifestyle.",
        moreDes: "Developed by Shubham",
        subheader: "Current",
        sourceCodeLink: "#",
        tryLink: "#",
        rating: 3.99
    }
]
