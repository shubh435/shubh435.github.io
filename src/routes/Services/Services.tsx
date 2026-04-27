import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaPalette,
  FaRocket,
  FaVial,
  FaTools,
  FaComments,
  FaCheckCircle,
  FaArrowRight,
  FaBolt,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaClock,
  FaLeaf,
} from 'react-icons/fa';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAmazonaws,
  SiTailwindcss,
  SiMui,
  SiJest,
} from 'react-icons/si';
import { navigateTo } from '../../utils/utils';
import { brandMedia } from '../../assets/assets';

const MotionDiv = motion.div;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </MotionDiv>
  );
}

const services = [
  {
    icon: <FaCode size={24} />,
    title: 'React Web Development',
    desc: 'Modern, performant UIs built with React, Next.js, and Tailwind CSS — optimised for SEO and lightning-fast load times.',
    tags: ['React', 'Next.js', 'Tailwind'],
    pricing: 'From ₹20K',
  },
  {
    icon: <FaMobileAlt size={24} />,
    title: 'React Native App Development',
    desc: 'Cross-platform iOS & Android apps with native feel, smooth animations, and deep API integrations.',
    tags: ['React Native', 'Expo', 'iOS & Android'],
    pricing: 'From ₹25K',
  },
  {
    icon: <FaServer size={24} />,
    title: 'Full Stack Development',
    desc: 'End-to-end MERN stack applications — Node.js + Express APIs, MongoDB, JWT auth, and scalable backend systems.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    pricing: 'From ₹30K',
  },
  {
    icon: <FaPalette size={24} />,
    title: 'UI/UX & Design Systems',
    desc: 'Pixel-perfect Figma-to-code handoffs, reusable component libraries, and cohesive design system setup.',
    tags: ['Figma', 'MUI', 'Storybook'],
    pricing: 'From ₹20K',
  },
  {
    icon: <FaRocket size={24} />,
    title: 'Performance Optimisation',
    desc: 'Lighthouse audits, lazy loading, code splitting, image optimisation, and caching strategies for blazing-fast apps.',
    tags: ['Core Web Vitals', 'Webpack', 'CDN'],
    pricing: 'From ₹25K',
  },
  {
    icon: <FaVial size={24} />,
    title: 'Testing & Code Quality',
    desc: 'Comprehensive Jest + RTL test suites, CI/CD pipelines with GitHub Actions, and clean architecture reviews.',
    tags: ['Jest', 'RTL', 'GitHub Actions'],
    pricing: 'From ₹25K',
  },
  {
    icon: <FaTools size={24} />,
    title: 'Custom Feature Development',
    desc: 'SaaS dashboards, booking systems, real-time feeds, payment integrations — any complex feature shipped fast.',
    tags: ['SaaS', 'Stripe', 'WebSockets'],
    pricing: 'From ₹25K',
  },
  {
    icon: <FaComments size={24} />,
    title: 'Consulting & Debugging',
    desc: '1-on-1 expert sessions: architecture review, bug fixing, code walkthroughs, and roadmap guidance for your project.',
    tags: ['Hourly', 'Code Review', 'Mentoring'],
    pricing: 'From ₹1K/hour',
  },
];

const whyChooseMe = [
  {
    icon: <FaStar />,
    title: '4+ Years Experience',
    desc: 'Deep expertise across React, React Native, and full-stack development.',
  },
  {
    icon: <FaBolt />,
    title: '5+ Apps Shipped',
    desc: 'Production-grade apps for startups, enterprises, and indie clients worldwide.',
  },
  {
    icon: <FaShieldAlt />,
    title: '100% Test Coverage',
    desc: 'Every project delivered with comprehensive test suites and CI integration.',
  },
  {
    icon: <FaUsers />,
    title: 'Startup & Enterprise',
    desc: 'Comfortable with early-stage MVPs and large-scale enterprise systems alike.',
  },
  {
    icon: <FaClock />,
    title: 'Fast Delivery',
    desc: 'Iterative sprints, daily updates, and on-time delivery — always.',
  },
  {
    icon: <FaLeaf />,
    title: 'Clean, Scalable Code',
    desc: 'Maintainable architecture you can grow without a rewrite six months later.',
  },
];

const techStack = [
  { icon: <SiReact size={28} />, label: 'React', color: '#61DAFB' },
  { icon: <SiReact size={28} />, label: 'React Native', color: '#61DAFB' },
  { icon: <SiTypescript size={28} />, label: 'TypeScript', color: '#3178C6' },
  { icon: <SiJavascript size={28} />, label: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiNodedotjs size={28} />, label: 'Node.js', color: '#339933' },
  { icon: <SiExpress size={28} />, label: 'Express', color: '#f8fafc' },
  { icon: <SiMongodb size={28} />, label: 'MongoDB', color: '#47A248' },
  { icon: <SiFirebase size={28} />, label: 'Firebase', color: '#FFCA28' },
  { icon: <SiAmazonaws size={28} />, label: 'AWS', color: '#FF9900' },
  { icon: <SiTailwindcss size={28} />, label: 'Tailwind', color: '#06B6D4' },
  { icon: <SiMui size={28} />, label: 'MUI', color: '#007FFF' },
  { icon: <SiJest size={28} />, label: 'Jest', color: '#C21325' },
];

const workProcess = [
  {
    step: '01',
    title: 'Requirement Discussion',
    desc: 'We start with a deep-dive call to understand your goals, constraints, and vision.',
  },
  {
    step: '02',
    title: 'Planning & Architecture',
    desc: 'I draft the tech architecture, component tree, and timeline before writing a single line of code.',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Iterative sprints with async updates, Loom walkthroughs, and a live staging link throughout.',
  },
  {
    step: '04',
    title: 'Testing',
    desc: 'Jest + RTL tests, cross-browser QA, performance audits, and accessibility checks.',
  },
  {
    step: '05',
    title: 'Deployment & Support',
    desc: 'CI/CD deploy to your platform, post-launch monitoring, and 30-day bug-fix support included.',
  },
];

const platforms = [
  { link: 'https://www.fiverr.com/', image: brandMedia.fiverr, alt: 'Fiverr' },
  {
    link: 'https://www.upwork.com/freelancers/~01ae062ed43ee51e5f?mp_source=share',
    image: brandMedia.upwork,
    alt: 'Upwork',
  },
  {
    link: 'https://www.freelancer.com/u/shubhamsarode122?sb=t',
    image: brandMedia.freelancer,
    alt: 'Freelancer',
  },
];

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Freelance React & React Native Developer | Services – Shubham Sarode</title>
        <meta
          name="description"
          content="Hire Shubham Sarode — a freelance React and React Native developer with 4+ years of experience building scalable web and mobile applications for startups and enterprises."
        />
        <meta
          name="keywords"
          content="react developer freelance, react native developer hire, node js freelancer, full stack developer india, shubham sarode services"
        />
        <link rel="canonical" href="https://shubh435.github.io/services" />
      </Helmet>

      <main
        style={{
          background: 'var(--bg-main)',
          color: 'var(--text-primary)',
          minHeight: '100vh',
        }}
      >
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-28 pb-20 px-5 sm:px-8 lg:px-12">
          {/* Ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full opacity-20 blur-3xl"
            style={{ background: 'var(--accent-gradient)' }}
          />

          <div className="relative mx-auto max-w-5xl flex flex-col items-center text-center gap-6">
            {/* Badge */}
            <FadeIn>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
                style={{
                  border: '1px solid var(--border-focus)',
                  color: 'var(--accent-text)',
                  background: 'rgba(6,182,212,0.08)',
                }}
              >
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{ background: 'var(--accent)' }}
                />
                Available for Freelance
              </span>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1
                className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
                style={{ color: 'var(--text-primary)' }}
              >
                Freelance{' '}
                <span
                  style={{
                    background: 'var(--accent-gradient)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Services
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="max-w-2xl text-lg md:text-xl" style={{ color: 'var(--text-muted)' }}>
                Helping startups and businesses build scalable, high-quality web and mobile
                applications — on time, on budget, and built to last.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <button
                  onClick={() => navigateTo('#footer', navigate)}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 active:scale-95"
                  style={{ background: 'var(--accent-gradient)' }}
                >
                  Hire Me <FaArrowRight size={13} />
                </button>
                <button
                  onClick={() => navigateTo('https://calendly.com/shubhamsarode435', navigate)}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition hover:opacity-90 active:scale-95"
                  style={{
                    border: '1px solid var(--border-focus)',
                    color: 'var(--accent-text)',
                    background: 'rgba(6,182,212,0.06)',
                  }}
                >
                  Book a Call
                </button>
              </div>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.2}>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
                {[
                  { label: 'Years Experience', value: '4+' },
                  { label: 'Apps Shipped', value: '5+' },
                  { label: 'Test Coverage', value: '100%' },
                  { label: 'Happy Clients', value: '10+' },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <p
                      className="text-3xl font-bold"
                      style={{
                        background: 'var(--accent-gradient)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Services Grid ──────────────────────────────────────────────── */}
        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.3em] mb-3"
                  style={{ color: 'var(--accent-text)' }}
                >
                  What I Offer
                </p>
                <h2
                  className="text-3xl font-bold md:text-4xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Services I Provide
                </h2>
                <p
                  className="mt-3 text-base md:text-lg max-w-xl mx-auto"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Tailored solutions across the full product lifecycle — from idea to deployment.
                </p>
              </div>
            </FadeIn>

            <MotionDiv
              variants={stagger as {}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
            >
              {services.map((service, idx) => (
                <MotionDiv
                  key={idx}
                  variants={fadeUp as {}}
                  className="group flex flex-col rounded-2xl p-6 surface-card transition-all cursor-default"
                  style={{ border: '1px solid var(--border-subtle)' }}
                  whileHover={{
                    y: -6,
                    boxShadow: '0 20px 48px rgba(6,182,212,0.12)',
                    borderColor: 'var(--border-focus)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--border-focus)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                >
                  {/* Icon */}
                  <div
                    className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: 'rgba(6,182,212,0.1)',
                      color: 'var(--accent)',
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm flex-1" style={{ color: 'var(--text-muted)' }}>
                    {service.desc}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                        style={{
                          background: 'rgba(6,182,212,0.08)',
                          color: 'var(--accent-text)',
                          border: '1px solid var(--border-hover)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <p className="mt-3 text-xs font-semibold" style={{ color: 'var(--accent-text)' }}>
                    {service.pricing}
                  </p>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </section>

        {/* ── Why Choose Me ─────────────────────────────────────────────── */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 section-shell">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.3em] mb-3"
                  style={{ color: 'var(--accent-text)' }}
                >
                  Why Me
                </p>
                <h2
                  className="text-3xl font-bold md:text-4xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Why Choose Me
                </h2>
              </div>
            </FadeIn>

            <MotionDiv
              variants={stagger as {}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {whyChooseMe.map((item, idx) => (
                <MotionDiv
                  key={idx}
                  variants={fadeUp as {}}
                  className="flex items-start gap-4 rounded-2xl p-5 surface-card transition-all"
                  style={{ border: '1px solid var(--border-subtle)' }}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                  }}
                >
                  <div className="mt-0.5 flex-shrink-0 text-lg" style={{ color: 'var(--accent)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="text-sm font-semibold mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {item.desc}
                    </p>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </section>

        {/* ── Tech Stack ────────────────────────────────────────────────── */}
        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.3em] mb-3"
                  style={{ color: 'var(--accent-text)' }}
                >
                  Tools & Technologies
                </p>
                <h2
                  className="text-3xl font-bold md:text-4xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Tech Stack
                </h2>
                <p className="mt-3 text-base" style={{ color: 'var(--text-muted)' }}>
                  The tools I use to deliver production-ready, modern applications.
                </p>
              </div>
            </FadeIn>

            <MotionDiv
              variants={stagger as {}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6"
            >
              {techStack.map((tech, idx) => (
                <MotionDiv
                  key={idx}
                  variants={fadeUp as {}}
                  className="flex flex-col items-center gap-2 rounded-2xl p-4 surface-card transition-all"
                  style={{ border: '1px solid var(--border-subtle)' }}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                    borderColor: 'var(--border-focus)',
                  }}
                >
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                  <span
                    className="text-xs font-medium text-center"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {tech.label}
                  </span>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </section>

        {/* ── Work Process ──────────────────────────────────────────────── */}
        <section className="px-5 py-16 sm:px-8 lg:px-12 section-shell">
          <div className="mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-12 text-center">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.3em] mb-3"
                  style={{ color: 'var(--accent-text)' }}
                >
                  How It Works
                </p>
                <h2
                  className="text-3xl font-bold md:text-4xl"
                  style={{ color: 'var(--text-primary)' }}
                >
                  My Work Process
                </h2>
                <p className="mt-3 text-base" style={{ color: 'var(--text-muted)' }}>
                  A structured, transparent approach from brief to launch.
                </p>
              </div>
            </FadeIn>

            <div className="relative">
              {/* Vertical connector line (desktop) */}
              <div
                aria-hidden
                className="absolute left-[27px] top-10 bottom-10 w-px hidden lg:block"
                style={{ background: 'var(--border-subtle)' }}
              />

              <MotionDiv
                variants={stagger as {}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col gap-6"
              >
                {workProcess.map((step, idx) => (
                  <MotionDiv key={idx} variants={fadeUp as {}} className="flex items-start gap-5">
                    {/* Step number bubble */}
                    <div
                      className="relative z-10 flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        background: 'var(--accent-gradient)',
                        color: '#fff',
                        boxShadow: '0 0 24px rgba(6,182,212,0.25)',
                      }}
                    >
                      {step.step}
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 rounded-2xl p-5 surface-card transition-all"
                      style={{ border: '1px solid var(--border-subtle)' }}
                    >
                      <h3
                        className="text-base font-semibold mb-1.5"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                        {step.desc}
                      </p>
                    </div>
                  </MotionDiv>
                ))}
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* ── Platforms ─────────────────────────────────────────────────── */}
        <section className="px-5 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <div
                className="rounded-3xl p-8 surface-card text-center"
                style={{ border: '1px solid var(--border-subtle)' }}
              >
                <p className="text-sm font-semibold mb-6" style={{ color: 'var(--text-muted)' }}>
                  Also available on trusted freelance marketplaces
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {platforms.map((platform, idx) => (
                    <a
                      key={idx}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Hire me on ${platform.alt}`}
                      className="group flex h-14 w-14 items-center justify-center rounded-full p-3 transition-all"
                      style={{
                        border: '2px solid var(--border-subtle)',
                        background: 'var(--bg-tertiary)',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                      onMouseLeave={e =>
                        (e.currentTarget.style.borderColor = 'var(--border-subtle)')
                      }
                    >
                      <img
                        src={platform.image}
                        alt={platform.alt}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────────── */}
        <section className="px-5 py-20 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl relative">
              {/* Background gradient */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: 'var(--accent-gradient)', opacity: 0.12 }}
              />
              <div
                className="relative surface-card rounded-3xl p-10 md:p-14 text-center"
                style={{ border: '1px solid var(--border-focus)' }}
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6"
                  style={{
                    border: '1px solid var(--border-focus)',
                    color: 'var(--accent-text)',
                    background: 'rgba(6,182,212,0.08)',
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full animate-pulse"
                    style={{ background: 'var(--accent)' }}
                  />
                  Open to new projects
                </span>

                <h2
                  className="text-3xl font-extrabold md:text-5xl leading-tight mb-4"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Let's build something{' '}
                  <span
                    style={{
                      background: 'var(--accent-gradient)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    great together
                  </span>
                </h2>

                <p
                  className="text-base md:text-lg max-w-xl mx-auto mb-8"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Whether you have a fully-scoped project or just an idea — I'd love to hear about
                  it. Let's talk about what we can build.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => navigateTo('#footer', navigate)}
                    className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-90 active:scale-95"
                    style={{ background: 'var(--accent-gradient)' }}
                  >
                    Hire Me <FaArrowRight size={13} />
                  </button>
                  <button
                    onClick={() => navigateTo('https://calendly.com/shubhamsarode435', navigate)}
                    className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition hover:opacity-90 active:scale-95"
                    style={{
                      border: '1px solid var(--border-focus)',
                      color: 'var(--accent-text)',
                      background: 'rgba(6,182,212,0.06)',
                    }}
                  >
                    Book a Call
                  </button>
                  <button
                    onClick={() => navigateTo('#footer', navigate)}
                    className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition hover:opacity-90 active:scale-95"
                    style={{
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                      background: 'transparent',
                    }}
                  >
                    Contact Me
                  </button>
                </div>

                {/* Trust badges */}
                <div
                  className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t pt-8"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  {[
                    { icon: <FaCheckCircle />, label: 'Fast turnaround' },
                    { icon: <FaCheckCircle />, label: 'NDA available' },
                    { icon: <FaCheckCircle />, label: 'Async-friendly' },
                    { icon: <FaCheckCircle />, label: 'Timezone flexible' },
                  ].map(badge => (
                    <span
                      key={badge.label}
                      className="inline-flex items-center gap-1.5 text-xs font-medium"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <span style={{ color: 'var(--accent)' }}>{badge.icon}</span>
                      {badge.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default ServicesPage;
