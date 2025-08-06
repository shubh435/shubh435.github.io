import React from "react";
import { navigateTo } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { fiverImage, freelancerImage, upworkImage } from "../assets/assets";

const services = [
  {
    title: "Responsive Web Apps",
    desc: "Pixel-perfect UIs built with React, Tailwind CSS, and Next.js.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform apps using React Native, integrated with Firebase or REST APIs.",
  },
  {
    title: "Full Stack Projects",
    desc: "MERN stack apps with backend APIs, authentication, and database.",
  },
  {
    title: "Code Quality & CI/CD",
    desc: "Integrated SonarQube, test cases, GitHub Actions for high-quality delivery.",
  },
  {
    title: "Freelance Consulting",
    desc: "1-on-1 consulting, debugging, performance optimization, and project guidance.",
  },
  {
    title: "Custom Feature Development",
    desc: "Feature modules for SaaS, CRM, booking, or social platforms.",
  },
];

const platforms = [
  { link: "https://www.fiverr.com/", image: fiverImage, alt: "Fiverr" },
  { link: "https://www.upwork.com/", image: upworkImage, alt: "Upwork" },
  {
    link: "https://www.freelancer.com/",
    image: freelancerImage,
    alt: "Freelancer",
  },
];

export default function FreelancingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Freelance Services I Offer
        </h1>
        <p className="text-lg text-gray-300">
          Let’s build something impactful together. I offer frontend and mobile
          development services tailored to your business needs.
        </p>
        <button
          onClick={() => {
            navigateTo("#footer", navigate);
          }}
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Me
        </button>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2 text-white">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Platforms */}
      <div className="max-w-4xl mx-auto text-center mt-24">
        <h2 className="text-2xl font-bold mb-4">Available On</h2>
        <div className="flex justify-center gap-8 mt-4 animate">
          {platforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={platform.image}
                alt={platform.alt}
                className="w-10 h-10 rounded-full "
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
