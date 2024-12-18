import { noImageFound, project1Image, project2Image, project3Image, projectImage10, projectImage11, projectImage12, projectImage13, projectImage14, projectImage15, projectImage16, projectImage17, projectImage4, projectImage5, projectImage7, projectImage8, projectImage9 } from "./assets"

export interface ProjectData {
    id: number,
    projectName: string,
    porjectImage: string,
    description: string,
    moreDes: string,
    subheader: string,
    tryLink: string,
    sorceCodeLink: string,
    rating: number
}

export const projectdata: ProjectData[] = [
    {
        id: 1,
        projectName: "Doctor App",
        porjectImage: project1Image,
        description: "The Doctor App is a user-friendly healthcare solution designed to simplify the interaction between patients and healthcare providers. Key features include appointment scheduling, secure patient records management, telemedicine support, prescription management, health monitoring integration, and secure payment processing. The app ensures efficient and convenient access to medical care, enhancing the overall patient experience.",
        moreDes: "Shubham",
        subheader: "current",
        sorceCodeLink: "https://github.com/shubh435/doctors_app",
        tryLink: "https://github.com/shubh435/doctors_app/releases",
        rating: 5
    },
    {
        id: 2,
        projectName: "Color Generator",
        porjectImage: project2Image,
        description: "The Color Generator is a versatile tool designed to create and explore a wide range of color palettes. Users can generate random colors, customize hues, and save their favorite combinations. Perfect for designers, developers, and artists, this app enhances creativity by providing a seamless way to experiment with and utilize colors in various projects.",
        moreDes: "Shubham",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/color-generator",
        tryLink: "https://color-generator-peach.vercel.app/",
        rating: 3.5

    },
    {
        id: 3,
        projectName: "Travel Web App",
        porjectImage: project3Image,
        description: "The Travel Web App is a comprehensive platform designed to enhance the travel planning experience. It offers features such as destination discovery, itinerary creation, and booking management. Users can explore popular travel destinations, find accommodations, book flights, and plan activities all in one place. With integrated reviews, maps, and travel tips, the app provides a seamless and enjoyable way to organize and manage trips, making travel planning efficient and stress-free.",
        moreDes: "Shubham",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/doctors_app",
        tryLink: "https://travel-web-app-mauve.vercel.app/",
        rating: 4.5

    }
    ,
    {
        id: 4,
        projectName: "Weather App",
        porjectImage: projectImage16,
        description: "Shubham",
        moreDes: "Description",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/weather-app",
        tryLink: "https://electron-react-demo-bzkb.vercel.app",
        rating: 0

    }
    , {
        id: 5,
        projectName: "Responsive startup website",
        porjectImage: projectImage4,
        description: "Designed and developed a modern and responsive website tailored for startups using React JS. The website provides an engaging platform for startups to showcase their  services, and company information effectively.",
        moreDes: "Shubham",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/template-react-tailwind",
        tryLink: "https://template-react-tailwind.vercel.app/",
        rating: 3.6

    }
    , {
        id: 6,
        projectName: "Coktail Api task",
        porjectImage: projectImage5,
        description: "Designed and developed a modern and responsive website tailored for startups using React JS. The website provides an engaging platform for startups to showcase their  services, and company information effectively.",
        moreDes: "Shubham",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/cocktail--api",
        tryLink: "https://cocktail-api-kappa.vercel.app/",
        rating: 2.5

    }
    , {
        id: 7,
        projectName: "Bootstrap Design task",
        porjectImage: noImageFound,
        description: "Designed and developed a modern and responsive website tailored for agency using React JS.",
        moreDes: "Shubham",
        subheader: "2023",
        sorceCodeLink: "https://github.com/shubh435/bootstrap-resp-design",
        tryLink: "https://bootstrap-resp-design.vercel.app/",
        rating: 3

    }
    , {
        id:8,
        projectName: "Band Template",
        porjectImage: projectImage7,
        description: "Designed and developed a modern and responsive website tailored for agency using React JS.",
        moreDes: "Shubham",
        subheader: "2023",
        sorceCodeLink: "https://github.com/shubh435/band--template",
        tryLink: "https://band-template.vercel.app/",
        rating: 3.8

    }
    , {
        id:9,
        projectName: "Eccommerce App",
        porjectImage: projectImage8,
        description: "Designed and developed a modern and responsive eccomerce website using React JS.",
        moreDes: "Shubham",
        subheader: "2023",
        sorceCodeLink: "https://github.com/shubh435/eccomerce-website-ext",
        tryLink: "https://eccomerce-website-ext.vercel.app/",
        rating: 3.9

    }
    , {
        id:10,
        projectName: "Testimonial Practice",
        porjectImage: projectImage12,
        description: "Designed and developed a modern and responsive website using JS.",
        moreDes: "Shubham",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/basic-slidder?tab=readme-ov-file",
        tryLink: "https://shubh435.github.io/basic-slidder/",
        rating: 3.8

    }
    , {
        id:11,
        projectName: "Color Flipper",
        porjectImage: projectImage9,
        description: "Designed and developed a modern and responsive  website using JS.",
        moreDes: "Shubham",
        subheader: "2022",
        sorceCodeLink: "https://color-flipper-henna.vercel.app/",
        tryLink: "https://color-flipper-henna.vercel.app/",
        rating: 3

    }
    , {
        id:12,
        projectName: "React Movie task",
        porjectImage: projectImage10,
        description: "Designed and developed a modern and responsive movie website using React JS.",
        moreDes: "Shubham",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/React-Movie",
        tryLink: "https://react-movie-gules.vercel.app/",
        rating: 3.9

    }
    , {
        id:13,
        projectName: "University demo",
        porjectImage: projectImage11,
        description: "Designed and developed a modern and responsive univeristy study website using JS.",
        moreDes: "Shubham",
        subheader: "2021",
        sorceCodeLink: "https://github.com/shubh435/university?tab=readme-ov-file",
        tryLink: "https://shubh435.github.io/university/",
        rating: 3.9

    }
    , {
        id:14,
        projectName: "Practice tabs web",
        porjectImage: projectImage13,
        description: "Practice tabs web app using js",
        moreDes: "Shubham",
        subheader: "2021",
        sorceCodeLink: "https://github.com/shubh435/my-app",
        tryLink: "https://menu-js-975i.vercel.app/",
        rating: 3.5

    }
    , {
        id:15,
        projectName: "Practice agency web app",
        porjectImage: projectImage14,
        description: "Practice agency demo web app using js",
        moreDes: "Shubham",
        subheader: "2021",
        sorceCodeLink: "https://github.com/shubh435/agency",
        tryLink: "https://agency-sandy.vercel.app/",
        rating: 3.5

    }
    , {
        id:16,
        projectName: "Bookly - Your Personalized Book Recommendation App",
        porjectImage: projectImage15,
        description: "Bookly is a web application designed to help users discover and track their next great read. Featuring an intuitive and user-friendly interface, Bookly allows users to browse a vast collection of books, read detailed descriptions, and receive personalized recommendations based on their reading preferences.",
        moreDes: "Shubham",
        subheader: "2021",
        sorceCodeLink: "https://github.com/shubh435/bookly",
        tryLink: "https://bookly-five.vercel.app/",
        rating: 3.99
    }
    , {
        id:17,
        projectName: "Shopery - Organic eccomerce shop website",
        porjectImage: projectImage17,
        description: "Shopery is an organic e-commerce platform dedicated to providing customers with a wide range of eco-friendly, sustainable, and organic products. The website offers a seamless shopping experience, featuring categories like fresh produce, health supplements, eco-conscious personal care, and sustainable home goods. With a user-friendly interface and a focus on promoting environmentally responsible choices, Shopery aims to make it easy for customers to shop green and support a healthier lifestyle.",
        moreDes: "Shubham",
        subheader: "current working ...",
        sorceCodeLink: "#",
        tryLink: "#",
        rating: 3.99
    }
]