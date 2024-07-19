import { project1Image, project2Image, project3Image } from "./assets"

export interface ProjectData{
    id:number,
    projectName:string,
    porjectImage:string,
    description:string,
    moreDes:string,
    subheader:string,
    tryLink:string,
    sorceCodeLink:string,
    rating:number
}

export const projectdata: ProjectData[] =[
{
    id:1,
    projectName:"Doctor App",
    porjectImage:project1Image,
    description:"The Doctor App is a user-friendly healthcare solution designed to simplify the interaction between patients and healthcare providers. Key features include appointment scheduling, secure patient records management, telemedicine support, prescription management, health monitoring integration, and secure payment processing. The app ensures efficient and convenient access to medical care, enhancing the overall patient experience.",
    moreDes:"Description",
    subheader:"current",
    sorceCodeLink:"https://github.com/shubh435/doctors_app",
    tryLink:"https://drive.google.com/drive/folders/1XcXQ_GUbzN3lzEghGUXZ86m-wnadaOS6?usp=sharing",
    rating:5
},
{
    id:2,
    projectName:"Color Generator",
    porjectImage:project2Image,
    description:"The Color Generator is a versatile tool designed to create and explore a wide range of color palettes. Users can generate random colors, customize hues, and save their favorite combinations. Perfect for designers, developers, and artists, this app enhances creativity by providing a seamless way to experiment with and utilize colors in various projects.",
    moreDes:"Description",
    subheader:"2022",
    sorceCodeLink:"https://github.com/shubh435/color-generator",
    tryLink:"https://color-generator-peach.vercel.app/",
    rating:3

},
{
    id:3,
    projectName:"Travel Web App",
    porjectImage:project3Image,
    description:"The Travel Web App is a comprehensive platform designed to enhance the travel planning experience. It offers features such as destination discovery, itinerary creation, and booking management. Users can explore popular travel destinations, find accommodations, book flights, and plan activities all in one place. With integrated reviews, maps, and travel tips, the app provides a seamless and enjoyable way to organize and manage trips, making travel planning efficient and stress-free.",
    moreDes:"Description",
    subheader:"16 sep 2024",
    sorceCodeLink:"https://github.com/shubh435/doctors_app",
    tryLink:"https://travel-web-app-mauve.vercel.app/",
    rating:4

},
{
    id:3,
    projectName:"Weather App",
    porjectImage:"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    description:"Lorem Ipsum",
    moreDes:"Description",
    subheader:"2022",
    sorceCodeLink:"https://github.com/shubh435/weather-app",
    tryLink:"https://electron-react-demo-bzkb.vercel.app",
    rating:0

}
]