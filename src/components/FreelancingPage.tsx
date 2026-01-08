import React from "react";
import { navigateTo } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { brandMedia } from "../assets/assets";

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
  { link: "https://www.fiverr.com/", image: brandMedia.fiverr, alt: "Fiverr" },
  { link: "https://www.upwork.com/", image: brandMedia.upwork, alt: "Upwork" },
  {
    link: "https://www.freelancer.com/",
    image: brandMedia.freelancer,
    alt: "Freelancer",
  },
];

export default function FreelancingPage() {
  const navigate = useNavigate();
  return (
    <section
      id="Freelancing"
      style={{
        background: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        {/* Hero Section */}
        <header className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl space-y-6 text-center lg:text-left">
            <p
              className="text-sm font-semibold uppercase tracking-[0.35em]"
              style={{ color: "var(--accent-text)" }}
            >
              Freelance Services
            </p>
            <h1
              className="text-4xl font-bold leading-tight md:text-5xl"
              style={{ color: "var(--text-primary)" }}
            >
              Let's build something impactful together
            </h1>
            <p
              className="text-lg md:text-xl"
              style={{ color: "var(--text-muted)" }}
            >
              I partner with startups and product teams on conversion-driven
              interfaces, resilient mobile apps, and full-stack web experiences.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button
                onClick={() => navigateTo("#footer", navigate)}
                className="btn-primary inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-base font-semibold shadow transition sm:w-auto"
                style={{ background: "var(--accent-gradient)", color: "white" }}
              >
                Contact Me
              </button>
              <button
                onClick={() => navigateTo("#footer", navigate)}
                className="btn-secondary inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition sm:w-auto"
                style={{
                  border: "1px solid var(--accent)",
                  color: "var(--accent-text)",
                  background: "transparent",
                }}
              >
                Book a call
              </button>
            </div>
          </div>

          <div
            className="grid w-full max-w-md gap-4 rounded-2xl p-8 shadow-xl surface-card"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <h2
              className="text-xl font-semibold md:text-2xl"
              style={{ color: "var(--text-primary)" }}
            >
              What you can expect
            </h2>
            <ul
              className="space-y-3 text-left text-sm md:text-base"
              style={{ color: "var(--text-muted)" }}
            >
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 h-2 w-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                ></span>
                Figma-to-production handoffs with Tailwind-first UI architecture
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 h-2 w-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                ></span>
                Iterative delivery with async updates and Loom walkthroughs
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 h-2 w-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                ></span>
                Performance budgets, accessibility guardrails, and deployment
                support
              </li>
            </ul>
          </div>
        </header>

        {/* Services Grid */}
        <section>
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2
                className="text-3xl font-semibold md:text-4xl"
                style={{ color: "var(--text-primary)" }}
              >
                Services I provide
              </h2>
              <p
                className="mt-2 text-base md:text-lg"
                style={{ color: "var(--text-muted)" }}
              >
                Tailored React and React Native solutions tuned for launch or
                scale.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, idx) => (
              <article
                key={idx}
                className="group flex h-full flex-col rounded-2xl p-6 shadow-lg transition hover:-translate-y-1 surface-card"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <h3
                  className="text-xl font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="mt-3 text-sm md:text-base"
                  style={{ color: "var(--text-muted)" }}
                >
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Platforms */}
        <section
          className="rounded-3xl p-10 surface-card"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div className="flex flex-col gap-6 text-center sm:text-left">
            <div>
              <h2
                className="text-2xl font-semibold md:text-3xl text-center"
                style={{ color: "var(--text-primary)" }}
              >
                Available on trusted marketplaces
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center mx-auto gap-8 sm:justify-start">
              {platforms.map((platform, idx) => (
                <a
                  key={idx}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-16 w-16 items-center justify-center rounded-full p-4 transition hover:border-cyan-500"
                  style={{
                    border: "2px solid var(--border-subtle)",
                    background: "var(--bg-tertiary)",
                  }}
                  aria-label={platform.alt}
                >
                  <img
                    src={platform.image}
                    alt={platform.alt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
