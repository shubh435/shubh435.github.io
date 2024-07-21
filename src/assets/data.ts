import { noImageFound, project1Image, project2Image, project3Image, projectImage10, projectImage11, projectImage12, projectImage13, projectImage4, projectImage5, projectImage7, projectImage8, projectImage9 } from "./assets"

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
        moreDes: "Description",
        subheader: "current",
        sorceCodeLink: "https://github.com/shubh435/doctors_app",
        tryLink: "https://drive.google.com/drive/folders/1XcXQ_GUbzN3lzEghGUXZ86m-wnadaOS6?usp=sharing",
        rating: 5
    },
    {
        id: 2,
        projectName: "Color Generator",
        porjectImage: project2Image,
        description: "The Color Generator is a versatile tool designed to create and explore a wide range of color palettes. Users can generate random colors, customize hues, and save their favorite combinations. Perfect for designers, developers, and artists, this app enhances creativity by providing a seamless way to experiment with and utilize colors in various projects.",
        moreDes: "Description",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/color-generator",
        tryLink: "https://color-generator-peach.vercel.app/",
        rating: 3

    },
    {
        id: 3,
        projectName: "Travel Web App",
        porjectImage: project3Image,
        description: "The Travel Web App is a comprehensive platform designed to enhance the travel planning experience. It offers features such as destination discovery, itinerary creation, and booking management. Users can explore popular travel destinations, find accommodations, book flights, and plan activities all in one place. With integrated reviews, maps, and travel tips, the app provides a seamless and enjoyable way to organize and manage trips, making travel planning efficient and stress-free.",
        moreDes: "Description",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/doctors_app",
        tryLink: "https://travel-web-app-mauve.vercel.app/",
        rating: 4

    }
    ,
    {
        id: 4,
        projectName: "Weather App",
        porjectImage: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        description: "Lorem Ipsum",
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
        moreDes: "Description",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/template-react-tailwind",
        tryLink: "https://template-react-tailwind.vercel.app/",
        rating: 4

    }
    , {
        id: 6,
        projectName: "Coktail Api task",
        porjectImage: projectImage5,
        description: "Designed and developed a modern and responsive website tailored for startups using React JS. The website provides an engaging platform for startups to showcase their  services, and company information effectively.",
        moreDes: "Description",
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
        moreDes: "Description",
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
        moreDes: "Description",
        subheader: "2023",
        sorceCodeLink: "https://github.com/shubh435/band--template",
        tryLink: "https://band-template.vercel.app/",
        rating: 4

    }
    , {
        id:9,
        projectName: "Eccommerce App",
        porjectImage: projectImage8,
        description: "Designed and developed a modern and responsive eccomerce website using React JS.",
        moreDes: "Description",
        subheader: "2023",
        sorceCodeLink: "https://github.com/shubh435/eccomerce-website-ext",
        tryLink: "https://eccomerce-website-ext.vercel.app/",
        rating: 4

    }
    , {
        id:10,
        projectName: "Testimonial Practice",
        porjectImage: projectImage12,
        description: "Designed and developed a modern and responsive website using JS.",
        moreDes: "Description",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/basic-slidder?tab=readme-ov-file",
        tryLink: "https://shubh435.github.io/basic-slidder/",
        rating: 4

    }
    , {
        id:11,
        projectName: "Color Flipper",
        porjectImage: projectImage9,
        description: "Designed and developed a modern and responsive  website using JS.",
        moreDes: "Description",
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
        moreDes: "Description",
        subheader: "2022",
        sorceCodeLink: "https://github.com/shubh435/React-Movie",
        tryLink: "https://react-movie-gules.vercel.app/",
        rating: 4

    }
    , {
        id:13,
        projectName: "University demo",
        porjectImage: projectImage11,
        description: "Designed and developed a modern and responsive univeristy study website using JS.",
        moreDes: "Description",
        subheader: "2021",
        sorceCodeLink: "https://github.com/shubh435/university?tab=readme-ov-file",
        tryLink: "https://shubh435.github.io/university/",
        rating: 4

    }
    , {
        id:14,
        projectName: "Practice tabs web",
        porjectImage: projectImage13,
        description: "Practice tabs web app using js",
        moreDes: "Description",
        subheader: "2021",
        sorceCodeLink: "https://github.com/shubh435/my-app",
        tryLink: "https://menu-js-975i.vercel.app/",
        rating: 3.5

    }
    , {
        id:15,
        projectName: "Practice agency web app",
        porjectImage: projectImage13,
        description: "Practice agency demo web app using js",
        moreDes: "Description",
        subheader: "2021",
        sorceCodeLink: "https://github.com/shubh435/agency",
        tryLink: "https://agency-sandy.vercel.app/",
        rating: 3.5

    }
]